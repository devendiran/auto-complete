export const SEARCH_USERS = 'SEARCH_USERS';
export const RESET_SEARCH = 'RESET_SEARCH';

export const searchUser = (searchText) => {
    return {
        type: SEARCH_USERS,
        payload: searchText
    }
};

export const resetSearch = () => {
    return {
        type: RESET_SEARCH
    }
};