import  { createContext,  useState } from 'react';


export const StoreContext = createContext({});


export const StoreProvider = ({ children } : { children : React.ReactNode}) => {

  const [valuesCsv, setValueCsv] = useState({});
  const [error, setError] = useState(false);
  

  return (
    <StoreContext.Provider value={{ valuesCsv, setValueCsv , error , setError }}>
      {children}
    </StoreContext.Provider>
  );
};