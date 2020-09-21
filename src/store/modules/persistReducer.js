// import storage from 'redux-persist/lib/storage';
import storage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'devcinemapp',
      storage,
      whitelist: ['favorites'],
    },
    reducers
  );

  return persistedReducer;
};
