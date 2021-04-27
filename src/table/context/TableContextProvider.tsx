import React, { ReactNode, useMemo, useState } from "react";
import { TableContext, TableContextState, defaultTableContextState } from "./TableContext";

interface Props {
  children: ReactNode;
}

function TableContextProvider(props: Props) {
  const [TableContextState, setTableContextState] = useState(defaultTableContextState);

  const contextValue = useMemo(() => {
    const setState = (newState: Partial<TableContextState>) => {
      setTableContextState((currentState) => ({ ...currentState, ...newState }));
    };

    return {
      ...TableContextState,
      setState,
    };
  }, [TableContextState]);

  return <TableContext.Provider value={contextValue}>{props.children}</TableContext.Provider>;
}

export default TableContextProvider;
