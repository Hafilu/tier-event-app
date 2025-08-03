import TierBadge from "./TierBadge";

export default function EventCard({ event }: { event: any }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={
          event.image_url ||
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
        }
        alt={event.title}
        className="w-full h-40 object-cover rounded mb-3"
      />

      <TierBadge tier={event.tier} />
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-gray-600 text-sm">{event.description}</p>
      <p className="text-sm mt-2 text-gray-500">
        {new Date(event.event_date).toLocaleDateString()}
      </p>
    </div>
  );
}
