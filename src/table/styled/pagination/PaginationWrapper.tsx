import styled from "styled-components";

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;

  .pagination {
    display: inline-block;
  }
  .pagination > * {
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    box-sizing: border-box;
    &:hover {
      box-shadow: 0 0 0 2px ${(props) => props.theme.color.pagination.border.primary};
      background-color: ${(props) => props.theme.color.pagination.background.primary};
    }
  }
  .pagination > * + * {
    margin-left: 8px;
  }
  .page {
    outline: none;
    display: inherit;
    padding: 0.5em 1em;
  }
  .active {
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.pagination.border.active};
    background-color: ${(props) => props.theme.color.pagination.background.active};
  }
  .disabled {
    color: ${(props) => props.theme.color.text.disabled};
    &:hover {
      box-shadow: 0 0 0 2px ${(props) => props.theme.color.pagination.border.disabled};
      background-color: ${(props) => props.theme.color.pagination.background.disabled};
    }
  }
`;
