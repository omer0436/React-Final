import { createContext, useState } from "react";

export const DataContext = createContext("");

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [navCount, setNavCount] = useState(0);
  const [productCount, setProductCount] = useState(1);


  

  return (
    <DataContext.Provider value={{
        data,setData,
        selected, setSelected,
        navCount, setNavCount,
        productCount, setProductCount
        }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;