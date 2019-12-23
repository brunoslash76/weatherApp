import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, PURGE} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'weatherApp',
      storage: AsyncStorage,
      whitelist: ['city', 'hourlyForecast'],
    },
    reducers
  );
  return persistedReducer;
}
