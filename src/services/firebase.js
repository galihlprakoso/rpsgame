import { initializeApp } from '@firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from '@firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAoWod9ujxfqyVPpv_H8PG2UXPBRL9NeqA",
  authDomain: "rpsgame-7ce10.firebaseapp.com",
  projectId: "rpsgame-7ce10",
  storageBucket: "rpsgame-7ce10.appspot.com",
  messagingSenderId: "476768106743",
  appId: "1:476768106743:web:b6b00b9a4c52769857bbf2"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
