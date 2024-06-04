import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import {
  SIGNIN_PATH as signinPath,
  SIGNUP_PATH as signupPath,
} from 'common/constants';
import { setCookie } from 'common/utils/cookie';
import { getLocalStorage, setLocalStorage } from 'common/utils/localStorage';
import { useAuthContext } from 'common/contexts/AuthContext';
import { SigninOrSignupProps } from 'common/interfaces';
import AuthFormWrapper from 'common/components/AuthFormWrapper';

import { inputFields } from './data';

const Signup: React.FC<SigninOrSignupProps> = ({
  onSecondaryLinkClick,
  closeModalHandler,
}) => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuthContext();

  const handleFormSubmit = (formData: { [key: string]: any }) => {
    console.info('Form Data:', formData); // email, userName, password
    const { email: formDataEmail, userName: formDataUserName } = formData || {};
    const locallyStoredUsers = getLocalStorage('users') || {};
    const userAlreadyExists = !!Object.values(locallyStoredUsers).filter(
      ({ email, userName }) =>
        email === formDataEmail || userName === formDataUserName
    ).length;

    if (userAlreadyExists) {
      alert('User already exists. Please signin');
    } else {
      const timestamp = new Date();
      const randomProfilePicUrl = `https://picsum.photos/50/50?id=${Math.random()}`;
      const userProfile = {
        userId: uuidv4(),
        profilePic: randomProfilePicUrl,
        createdAt: timestamp,
        updatedAt: timestamp,
        ...formData, // email, userName, password
      };
      setLocalStorage('users', {
        ...locallyStoredUsers,
        [userProfile.userId]: {
          ...userProfile,
          // password: undefined
        },
      });
      setIsLoggedIn(true);
      const jwtToken = JSON.stringify({
        payload: { userId: userProfile.userId, ...formData },
      }); // replace this with actual JWT token
      setCookie('jwt', jwtToken, {
        secure: window.location.protocol === 'https',
        sameSite: 'Strict',
      });
      if (window.location.pathname === signupPath) {
        navigate('/');
      } else if (closeModalHandler) {
        closeModalHandler();
      }
    }
  };

  return (
    <AuthFormWrapper
      heading="Sign up"
      subHeading="Create an account to continue"
      inputFields={inputFields}
      onSubmit={handleFormSubmit}
      formCtaText="Continue"
      secondary={{
        text: 'Already have an account?',
        onSecondaryLinkClick: () => {
          if (onSecondaryLinkClick) {
            onSecondaryLinkClick();
          } else {
            navigate(signinPath);
          }
        },
        cta: 'Login →',
      }}
    />
  );
};

export default Signup;
