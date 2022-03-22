import { createStore } from 'redux';
import reacdleReducer from './reducers/reacdleReducer';

const store = createStore(
	reacdleReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
