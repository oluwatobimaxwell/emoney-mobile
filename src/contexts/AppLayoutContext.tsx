import React, { createContext, useContext, useState } from "react";
import invariant from "invariant";

interface PageContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  detectEndOfScroll: () => void;
}

const PageContext = createContext<PageContextType>({
  currentPage: 1,
  setCurrentPage: () => {},
  detectEndOfScroll: () => {},
});

const PageContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const detectEndOfScroll = (): void => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const value = {
    currentPage,
    setCurrentPage,
    detectEndOfScroll,
  };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

const usePageContext = () => {
  const context = useContext(PageContext);
  invariant(
    context,
    "usePageContext must be used within a PageContextProvider"
  );
  return context;
};

export { PageContextProvider, usePageContext };
