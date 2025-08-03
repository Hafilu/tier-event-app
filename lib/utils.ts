export const TIER_LEVELS = ['free', 'silver', 'gold', 'platinum'] as const;
export type Tier = typeof TIER_LEVELS[number];

export function getAccessibleTiers(userTier: Tier) {
  const index = TIER_LEVELS.indexOf(userTier);
  return TIER_LEVELS.slice(0, index + 1);
}
