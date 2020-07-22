import React, {useContext} from 'react';
import { useHistory} from 'react-router-dom';
import { AppRoute} from './'
import { CreateUserContext } from '../../context/CurrentUserContext';
import { post, SIGN_IN_URL } from '../../utils/api-helpers';

export const PrivateRoute = props => {
  const [user, setUser] = useContext(CreateUserContext);
  const token = localStorage.getItem('accessToken');
  const {push} = useHistory();

  const {id: userId} = user;

  const restoreSession = async () => {
    try {
      const response = await post(SIGN_IN_URL, {});

      setUser(response);
      localStorage.setItem('accessToken', response.token);
      push('/home');
    }
    catch(error) {
      console.error(error.message);
    }
  }

  if (!userId && !token) {
    return 'Sorry this page is private';
  }

  if (!userId && token) {
    restoreSession();
    return 'Please wait... Session is being restored'
  }

  if (userId && token) {
    return <AppRoute {...props} />;
  }
};