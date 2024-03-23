import  { createContext,  useState } from 'react';


const MyContext = createContext({});


export const StoreProvider = ({ children } : { children : React.ReactNode}) => {

  const [valuesCsv, setValueCsv] = useState({});
  const [error, setError] = useState(false);
  

  return (
    <MyContext.Provider value={{ valuesCsv, setValueCsv , error , setError }}>
      {children}
    </MyContext.Provider>
  );
};