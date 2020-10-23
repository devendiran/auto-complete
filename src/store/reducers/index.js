import { SEARCH_USERS, RESET_SEARCH } from '../actions';

const initialState = {
    users: [],
    searchText: '',
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                searchText: action.payload
            };
        case RESET_SEARCH:
            return {
                ...state,
                searchText: ''
            };
    }

    return state;
}