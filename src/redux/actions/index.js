import * as types from './types';

export const change = (keyPath, value) => ({ type: types.CHANGE, payload: { keyPath, value } });
