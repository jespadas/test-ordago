import { getUsers } from '../helpers/getUsers'
import { types } from '../types/types';
import { finishLoading, setError, startLoading } from './ui';

export const startLoadingUsers = () => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            const users = await getUsers();
            dispatch(setUsers(users));
            dispatch(finishLoading());
        } catch (error) {
            console.log(error);
            dispatch(finishLoading());
            dispatch(setError());
        }
    }
};

export const setUsers = (users) => ({
    type: types.userLoad,
    payload: users
});

export const setActiveUser = (id, user) => ({
    type: types.userActive,
    payload: {
        id,
        ...user
    }
});

export const removeActiveUser = () => ({
    type: types.userRemoveActive,
});
