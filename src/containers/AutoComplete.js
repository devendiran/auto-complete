import React, { useContext, useCallback, useRef, useEffect} from 'react'

import { appContext } from '../appContext';
import  Input from '../components/Input';
import { searchUser } from '../store';

import './AutoComplete.css';
import UserDetailList from '../components/UserDetailList';

export default function AutoComplete(props) {
    const {state, dispatch} = useContext(appContext);
    console.log(state, '...state.....');
    const onSearchTextChangedHandler = useCallback(
        (event) => {
            dispatch(searchUser(event.target.value));
        },
        [dispatch]
    );
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="auto-complete">
            <Input ref={inputRef} value={state.searchText} placeholder="Search Users" onChange={onSearchTextChangedHandler}></Input>
            {state.searchText && <UserDetailList users={state.users}></UserDetailList>}
        </div>
    );
}
