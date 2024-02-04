'use client';
import {GlobalContext} from '@/provider/GlobalContext/GlobalContext';
import {useState} from 'react';

export function GlobalContextProvider({children}: {children: React.ReactNode}) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  return (
    <GlobalContext.Provider value={{isAuth, isDialogOpen, setIsDialogOpen}}>
      {children}
    </GlobalContext.Provider>
  );
}
