import { getCookie } from 'common/utils/cookie';

const useUserData = () => {
  const jwtCookie = getCookie('jwt'); // "{ payload: { userId, email, userName, password } }"
  if (jwtCookie) {
    try {
      const parsedJwtCookie = JSON.parse(jwtCookie);
      if (parsedJwtCookie && typeof parsedJwtCookie.payload === 'object') {
        return parsedJwtCookie.payload; // { userId, email, userName, password }
      }
    } catch (error) {
      console.error('Error parsing JWT:', error);
    }
  }
  return {};
};

export default useUserData;
