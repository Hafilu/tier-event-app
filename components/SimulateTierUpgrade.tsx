"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const TIER_OPTIONS = ["free", "silver", "gold", "platinum"] as const;

export default function SimulateTierUpgrade() {
  const { user, isLoaded } = useUser();
  const [currentTier, setCurrentTier] = useState("free");

  useEffect(() => {
  if (isLoaded && user?.publicMetadata?.tier) {
    setCurrentTier(user.publicMetadata.tier as string);
  }
}, [isLoaded, user]);


const handleUpgrade = async () => {
  const currentIndex = TIER_OPTIONS.indexOf(currentTier as any);
  if (currentIndex >= TIER_OPTIONS.length - 1) return;

  const nextTier = TIER_OPTIONS[currentIndex + 1];

  await fetch("/api/upgrade-tier", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nextTier }),
  });

  await user?.reload();
  setCurrentTier(nextTier);
};


  const isMaxTier = currentTier === "platinum";

  return (
    <button
      onClick={handleUpgrade}
      disabled={isMaxTier}
      className={`mt-4 px-4 py-2 rounded font-semibold ${
        isMaxTier
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
    >
      {isMaxTier ? "You are at the highest tier" : `Upgrade to next tier`}
    </button>
  );
}
