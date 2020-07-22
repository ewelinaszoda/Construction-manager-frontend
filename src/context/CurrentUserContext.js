import {createContext} from 'react';

export const emptyUser = () => ({
  id: null,
  name: ''
});

export const CreateUserContext = createContext([
  {},
  () => {},
]);