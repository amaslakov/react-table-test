import React from "react";
import { GlobalStyle } from "./styled/GlobalStyle";
import { PersonData, PersonDataKey } from "./utilities/types";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled/theme";
import { TableWithSearch } from "./components/TableWithSearch";
import TableContextProvider from "./context/TableContextProvider";

export type IValue = any;

export interface IColumn {
  key: PersonDataKey;
  title: string;
  render?: (value: IValue) => IValue;
}

interface IProps {
  columns: IColumn[];
  data: PersonData[];
}

export const Table = React.memo((props: IProps) => {
  return (
    <TableContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TableWithSearch {...props} />
      </ThemeProvider>
    </TableContextProvider>
  );
});
