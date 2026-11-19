// Filtering and the spoiler rule for the trophy checklist.
//
// A trophy passes when it matches every active filter: grade, kind
// (story / missable / collectibles / activities / online), text search and
// the earned/unearned switch. The spoiler rule is separate: while spoilers
// are on, a story trophy that is not earned yet shows a masked name and
// description instead of the real ones.

export const KIND_LABELS = {
  platinum: 'Platinum',
  story: 'Story',
  missable: 'Missable',
  collectibles: 'Collectibles',
  activities: 'Activities',
  online: 'Online',
};

export function trophyMatches(trophy, filters, earned) {
  if (filters.grade !== 'all' && trophy.grade !== filters.grade) return false;
  if (filters.kind !== 'all') {
    if (filters.kind === 'missable' && !trophy.missable) return false;
    else if (filters.kind === 'online') return false; // the official list has no online trophies
    else if (filters.kind !== 'missable' && trophy.kind !== filters.kind) return false;
  }
  if (filters.earned === 'earned' && !earned.has(trophy.id)) return false;
  if (filters.earned === 'unearned' && earned.has(trophy.id)) return false;
  if (filters.missableOnly && !trophy.missable) return false;
  if (filters.query) {
    const hay = `${trophy.name} ${trophy.description}`.toLowerCase();
    if (!hay.includes(filters.query)) return false;
  }
  return true;
}

export function isSpoilerHidden(trophy, spoilersOn, earned) {
  return spoilersOn && trophy.kind === 'story' && !earned.has(trophy.id);
}

export function displayName(trophy, spoilersOn, earned) {
  return isSpoilerHidden(trophy, spoilersOn, earned) ? 'Hidden story trophy' : trophy.name;
}

export function displayDescription(trophy, spoilersOn, earned) {
  return isSpoilerHidden(trophy, spoilersOn, earned)
    ? 'Hidden on PlayStation until earned. Earn it, or switch spoilers off, to reveal it.'
    : trophy.description;
}
