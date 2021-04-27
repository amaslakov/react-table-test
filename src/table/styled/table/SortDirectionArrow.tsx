import styled from "styled-components";
import { SortDirection } from "../../utilities/sort-entries";

interface ThProps {
  sortDirection: number;
}

export const SortDirectionArrow = styled.th<ThProps>`
  position: relative;
  padding-right: 16px;

  ::after {
    content: ' ';
    position: absolute;
    border-left: .4em solid transparent;
    border-right: .4em solid transparent;
    border-top: .4em solid ${props => props.sortDirection === SortDirection.desc ? 'black' : 'transparent'};
    border-bottom: .4em solid ${props => props.sortDirection === SortDirection.asc ? 'black' : 'transparent'};

    top: ${props => props.sortDirection === SortDirection.desc ? '50%' : 'unset'};
    bottom: ${props => props.sortDirection === SortDirection.asc ? '50%' : 'unset'};
    transform: ${props => props.sortDirection === SortDirection.asc ? 'translateY(.2em)' : 'translateY(-.2em)'};
    margin-left: 0.25em;
  }
`;

