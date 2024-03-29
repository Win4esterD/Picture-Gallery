'use client';
import {GlobalContext} from '@/provider/GlobalContext/GlobalContext';
import {useState, useEffect} from 'react';
import {cookieParser} from '@/utils/functions/cookieParser';

export function GlobalContextProvider({children}: {children: React.ReactNode}) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  useEffect(() => {
    if (cookieParser('token')) {
      setIsAuth(true);
    }
  }, []);
  return (
    <GlobalContext.Provider value={{isAuth, isDialogOpen, setIsDialogOpen}}>
      {children}
    </GlobalContext.Provider>
  );
}
