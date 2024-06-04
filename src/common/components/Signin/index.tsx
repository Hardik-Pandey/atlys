import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  SIGNUP_PATH as signupPath,
  SIGNIN_PATH as signinPath,
} from 'common/constants';
import { setCookie } from 'common/utils/cookie';
import { getLocalStorage } from 'common/utils/localStorage';
import { useAuthContext } from 'common/contexts/AuthContext';
import { SigninOrSignupProps } from 'common/interfaces';
import AuthFormWrapper from 'common/components/AuthFormWrapper';

import { inputFields } from './data';

const Signin: React.FC<SigninOrSignupProps> = ({
  onSecondaryLinkClick,
  closeModalHandler,
}) => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuthContext();

  const handleFormSubmit = (formData: { [key: string]: any }) => {
    console.info('Form Data:', formData);
    const { emailOrUsername, password: formDataPassword } = formData || {};
    const locallyStoredUsers = getLocalStorage('users') || {};
    const { userId, email, userName, password } =
      Object.values(locallyStoredUsers).filter(
        ({ email, userName }) =>
          email === emailOrUsername || userName === emailOrUsername
      )[0] || {};
    if (userId && password === formDataPassword) {
      setIsLoggedIn(true);
      const jwtToken = JSON.stringify({
        payload: { userId, email, userName, ...formData },
      }); // replace this with actual JWT token
      setCookie('jwt', jwtToken, {
        secure: window.location.protocol === 'https',
        sameSite: 'Strict',
      });
      if (window.location.pathname === signinPath) {
        navigate('/');
      } else if (closeModalHandler) {
        closeModalHandler();
      }
    } else {
      alert('User not found or incorrect credentials');
    }
  };

  return (
    <AuthFormWrapper
      heading="WELCOME BACK"
      subHeading="Log into your account"
      inputFields={inputFields}
      onSubmit={handleFormSubmit}
      formCtaText="Login now"
      secondary={{
        text: 'Not registered yet?',
        onSecondaryLinkClick: () => {
          if (onSecondaryLinkClick) {
            onSecondaryLinkClick();
          } else {
            navigate(signupPath);
          }
        },
        cta: 'Register →',
      }}
    />
  );
};

export default Signin;
