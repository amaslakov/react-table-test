import React, { memo, useContext, useMemo } from "react";
import HighlightingTableCell from "./HighlightingTableCell";
import Pagination from "../components/Pagination";
import filterEntries from "../utilities/filter-entries";
import sortEntries, { SortDirection } from "../utilities/sort-entries";
import { GlobalStyle } from "../styled/GlobalStyle";
import { PersonData, PersonDataKey } from "../utilities/types";
import { Search } from "./Search";
import { SortDirectionArrow } from "../styled/table/SortDirectionArrow";
import { StyledTable } from "../styled/table/StyledTable";
import { TableContext } from "../context/TableContext";
import { TableWrapper } from "../styled/table/TableWrapper";
import { IColumn } from "..";

interface IProps {
  columns: IColumn[];
  data: PersonData[];
}

export const TableWithSearch = memo((props: IProps) => {
  const { entriesPerPage, currentPage, sortBy, sortDirection, setState, search } = useContext(TableContext);

  const handleColumnClick = (key: PersonDataKey) => () => {
    if (key === sortBy) setState({ sortDirection: (sortDirection + 1) % 3 });
    else setState({ sortBy: key, sortDirection: SortDirection.asc });
  };

  const entries = props.data;
  const filteredEntries = useMemo(() => (search ? filterEntries({ entries, search }) : entries), [search]);
  const sortedEntries = useMemo(() => sortEntries({ entries: filteredEntries, sortBy, sortDirection }), [
    search,
    sortBy,
    sortDirection,
  ]);

  const firstEntryIndex = +currentPage * +entriesPerPage;
  const entriesToDisplay = sortedEntries.slice(firstEntryIndex, firstEntryIndex + +entriesPerPage);

  return (
    <TableWrapper>
      <GlobalStyle />
      <Search />
      <StyledTable>
        <colgroup>
          <col style={{ width: "12%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "7%" }} />
          <col style={{ width: "7%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "50%" }} />
        </colgroup>
        <thead>
          <tr>
            {props.columns.map((column) => (
              <SortDirectionArrow
                key={column.key}
                sortDirection={sortBy === column.key ? sortDirection : SortDirection.none}
                onClick={handleColumnClick(column.key)}
              >
                {column.title}
              </SortDirectionArrow>
            ))}
          </tr>
        </thead>
        <tbody>
          {entriesToDisplay.map((item) => (
            // ideally you would want to have a unique ID here
            <tr key={`${item.firstName}-${item.lastName}-${item.visits}`}>
              {props.columns.map((column) => (
                <HighlightingTableCell
                  key={column.key}
                  text={column.render ? column.render(item[column.key]) : item[column.key]}
                  search={search}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <Pagination entries={sortedEntries} />
    </TableWrapper>
  );
});
