const tierColors: Record<string, string> = {
  free: 'bg-gray-200 text-black',
  silver: 'bg-gray-400 text-white',
  gold: 'bg-yellow-400 text-black',
  platinum: 'bg-blue-700 text-white',
};

export default function TierBadge({ tier }: { tier: string }) {
  return (
    <span className={`text-xs px-2 py-1 rounded ${tierColors[tier]} mb-2 inline-block`}>
      {tier.toUpperCase()}
    </span>
  );
}
