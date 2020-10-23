import React from 'react';
import './App.css';
import {users} from './data';
import { useReducer } from 'react';
import { AppContextProvider } from './appContext';
import { reducer } from './store';

import AutoComplete from './containers/AutoComplete';

const initialState = {
  users: users,
  searchText:'',
};


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContextProvider value={{state, dispatch}}>
      <div className="App">
        <AutoComplete></AutoComplete>
      </div>
    </AppContextProvider>
  );
}

export default App;
