import {createStore} from 'redux';
import VideosReducer from './src/reducers/VideosReducer';
//redux persist
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['selecetedMovie'],
};

const persistedReducer = persistReducer(persistConfig, VideosReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
