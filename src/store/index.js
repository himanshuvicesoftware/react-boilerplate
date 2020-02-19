import { createStore } from 'redux';
import reducer from '../modules/list/list.reducer';

const store = createStore(reducer);

export default store;