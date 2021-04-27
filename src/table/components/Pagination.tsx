import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { ItemsPerPageLabel } from "../styled/pagination/ItemsPerPageLabel";
import { PersonData } from "../utilities/types";
import { PaginationWrapper } from "../styled/pagination/PaginationWrapper";
import { SelectInput } from "../styled/pagination/SelectInput";
import { TableContext } from "../context/TableContext";

const ENTRIES_PER_PAGE_VALUES = ["10", "20", "50"];

interface Props {
  entries: PersonData[];
}

export default function Pagination(props: Props) {
  const { entriesPerPage, setState } = useContext(TableContext);

  const handleSelectEntriesPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ currentPage: "0", entriesPerPage: event.target.value });
  };

  const handleSelectPage = ({ selected }: { selected: number }) => {
    setState({ currentPage: String(selected) });
  };

  return (
    <PaginationWrapper>
      <ItemsPerPageLabel>Entries per page</ItemsPerPageLabel>
      <SelectInput name="pets" value={entriesPerPage} onChange={handleSelectEntriesPerPage} id="pet-select">
        {ENTRIES_PER_PAGE_VALUES.map((numberOfEntries) => (
          <option key={numberOfEntries} value={numberOfEntries}>
            {numberOfEntries}
          </option>
        ))}
      </SelectInput>
      <ReactPaginate
        previousLabel={"❮"}
        nextLabel={"❯"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(props.entries.length / +entriesPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handleSelectPage}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageLinkClassName={"page"}
        previousLinkClassName={"page"}
        nextLinkClassName={"page"}
        disabledClassName={"disabled"}
      />
    </PaginationWrapper>
  );
}
