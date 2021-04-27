import { PersonData, PersonDataKey } from "./types";

export enum SortDirection {
  none,
  asc,
  desc,
}

interface SortEntriesData {
  entries: PersonData[];
  sortBy: PersonDataKey;
  sortDirection: number;
}

export default function sortEntries(data: SortEntriesData) {
  const { entries, sortBy, sortDirection } = data;
  if (!sortBy || !sortDirection) return entries;

  const directionModifier = sortDirection === SortDirection.asc ? 1 : -1;

  const sortedEntries = [...entries].sort((a, b) => {
    if (a[sortBy] === undefined || b[sortBy] === undefined) return 0;
    if (a[sortBy] > b[sortBy]) return 1 * directionModifier;
    if (a[sortBy] < b[sortBy]) return -1 * directionModifier;
    return 0;
  });

  return sortedEntries;
}
