import React, { Fragment } from "react";

interface Props {
  text: string;
  search: string;
}

export default function HighlightingTableCell(props: Props) {
  if (!props.search) return <td>{props.text}</td>;

  const regex = new RegExp(props.search, 'i')
  const [firstWord, ...rest] = String(props.text).split(regex);

  return (
    <td>
      {firstWord}
      {rest.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <mark>{props.search}</mark>
          {word}
        </Fragment>
      ))}
    </td>
  );
}
