import set from 'lodash/fp/set';
import { CHANGE } from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {

  case CHANGE: {
    const { keyPath, value } = action.payload;
    return set(keyPath, value, state);
  }

  default:
    return state;
  }
};
