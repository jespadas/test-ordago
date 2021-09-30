import { types } from '../types/types';

export const setError = () => ({
	type: types.uiSetError,
});

export const removeError = () => ({
	type: types.uiRemoveError,
});

export const startLoading = () => ({
	type: types.uiStartLoading,
});

export const finishLoading = () => ({
	type: types.uiFinishLoading,
});

export const openModal = () => ({
	type: types.uiOpenModal,
});

export const closeModal = () => ({
	type: types.uiCloseModal,
});
