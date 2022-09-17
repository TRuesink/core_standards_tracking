import authReducer from './auth.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token', 'isAuthenticated'],
};

const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
};

export default rootReducer;
