"use client";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import EventCard from "@/components/EventCard";
import { TIER_LEVELS, Tier } from "@/lib/utils";
import { redirect } from "next/navigation";
import SimulateTierUpgrade from "@/components/SimulateTierUpgrade";

type Event = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  tier: Tier;
};

// Validate tier from Clerk metadata
function asTier(tier: unknown): Tier {
  return TIER_LEVELS.includes(tier as Tier) ? (tier as Tier) : "free";
}

// Get all tiers up to and including user's tier
function getAccessibleTiers(userTier: Tier): Tier[] {
  const index = TIER_LEVELS.indexOf(userTier);
  return TIER_LEVELS.slice(0, index + 1);
}

export default function EventsPage() {
  const { user, isLoaded } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   const userTier: Tier = isLoaded ? asTier(user?.publicMetadata?.tier) : "free";
  useEffect(() => {
  if (isLoaded && !user) {
    redirect("/");  
  }
}, [isLoaded, user]);
  useEffect(() => {
  

    if (!isLoaded) return;

    const fetchEvents = async () => {
      setLoading(true);
      setError(null);

      const tiers = getAccessibleTiers(userTier);

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .in("tier", tiers);

      if (error) {
        console.error(error);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
        return;
      }

      setEvents(data as Event[]);
      setLoading(false);
    };

    fetchEvents();
  }, [isLoaded, userTier]);
  
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">
          Welcome,{" "}
          {user?.firstName ||
            user?.primaryEmailAddress?.emailAddress?.split("@")[0] ||
            "Guest"}
          !
        </h1>
        <SignedIn>
          <div className="mt-6 flex flex-col items-center gap-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>

      <p className="text-gray-500 mb-4">
        You are currently on the{" "}
        <span className="font-semibold capitalize">{userTier}</span> tier.
      
      </p>
      <div className="pb-4">
          <SimulateTierUpgrade/>
      </div>

      {loading ? (
        <p className="text-blue-500">Loading events...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : events.length === 0 ? (
        <p className="text-gray-500">No events available for your tier.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </main>
  );
}
