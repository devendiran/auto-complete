import { createContext } from 'react';

const appContext = createContext();
const AppContextProvider = appContext.Provider;
const AppContextConsumer = appContext.Consumer;


export { appContext, AppContextConsumer, AppContextProvider};