// import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import {
  USERNAME_CHANGED
} from './types';

export const usernameChanged = (text) => ({
  type: USERNAME_CHANGED,
  payload: text
});
