import { PersonData, PersonDataKey } from "./types";

interface FilterEntriesData {
  entries: PersonData[];
  search: string;
}

export default function filterEntries(data: FilterEntriesData) {
  const { entries, search } = data;

  const filteredEntries = entries.filter((entry) => {
    for (const key of Object.keys(entry)) {
      const value = entry[key as PersonDataKey];

      if (Array.isArray(value)) {
        for (const tag of value) {
          if (tag.toLowerCase().includes(search)) return true;
        }
      } else {
        if (String(value).toLowerCase().includes(search)) return true;
      }
    }

    return false;
  });

  return filteredEntries;
}
