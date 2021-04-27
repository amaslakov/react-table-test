import { createContext } from "react";
import { SortDirection } from "../utilities/sort-entries";
import { PersonDataKey } from "../utilities/types";

export interface TableContextState {
  search: string;
  entriesPerPage: string;
  currentPage: string;
  sortDirection: number;
  sortBy: PersonDataKey;
}

export const defaultTableContextState: TableContextState = {
  search: "",
  entriesPerPage: "10",
  currentPage: "0",
  sortDirection: SortDirection.none,
  sortBy: "firstName",
};

export interface TableContextData extends TableContextState {
  setState(state: Partial<TableContextState>): void;
}

export const TableContext = createContext<TableContextData>({
  ...defaultTableContextState,
  setState: () => {},
});
