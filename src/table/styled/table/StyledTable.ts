import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    border: 1px solid black;
    padding: 8px;
  }

  th {
    text-align: left;
    padding-right: 16px;
  }
`;
