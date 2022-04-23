import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { devToolsEnhancerLogOnlyInProduction } from '@redux-devtools/extension';

const store = createStore(rootReducer, devToolsEnhancerLogOnlyInProduction());

export default store;
