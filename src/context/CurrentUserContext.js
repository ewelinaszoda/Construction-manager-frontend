import {createContext} from 'react';

export const emptyUser = () => ({
  id: null,
  email: ''
});

export const CreateUserContext = createContext([
  {},
  () => {},
]);