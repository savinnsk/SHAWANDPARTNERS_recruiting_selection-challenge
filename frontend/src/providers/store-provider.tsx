  import  { createContext,  useCallback,  useState } from 'react';


interface ValueCsv {
  columnName : string;
  value : string;
  file : string
}

  interface StoreContextType {
    valuesCsv: ValueCsv[]; 
    setValueCsv: React.Dispatch<React.SetStateAction<ValueCsv[]>>; 
    error: boolean; 
    toSetError: any;
    notificationMessage: string | null; 
    toSetNotification: any; 
  }

  export const StoreContext = createContext<StoreContextType | undefined>(undefined);


  export const StoreProvider = ({ children } : { children : React.ReactNode}) => {

    const [valuesCsv, setValueCsv] = useState<ValueCsv[]>([]);
    const [error, setError] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState<string | null>("");
    
    const toSetNotification = useCallback((message: string) => {
      setNotificationMessage(message);
      setTimeout(() => {
        setNotificationMessage(null);
      }, 3000);
      setError(false);
    }, []);

    const toSetError = useCallback(() => {
      setError(true);
    }, []);

    return (
      <StoreContext.Provider value={{ valuesCsv, setValueCsv , error , toSetError , notificationMessage , toSetNotification }}>
        {children}
      </StoreContext.Provider>
    );
  };