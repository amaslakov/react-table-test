import { debounce } from "lodash";
import React, { memo, useCallback, useContext, useEffect, useState } from "react";
import { TableContext } from "../context/TableContext";
import { SearchInput } from "../styled/search/SearchInput";

export const Search = memo(() => {
  const { setState } = useContext(TableContext);
  const [query, setQuery] = useState("");

  const handleUpdateState = () => {
    setState({ search: query });
  };

  const debouncedQuery = useCallback(debounce(handleUpdateState, 500), [query]);

  useEffect(() => {
    debouncedQuery();
    return debouncedQuery.cancel;
  }, [query, debouncedQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.toLowerCase());
  };

  return <SearchInput type="search" onChange={handleSearch} placeholder="Search" />;
});
