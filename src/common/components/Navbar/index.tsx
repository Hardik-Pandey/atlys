import { Link, useNavigate } from 'react-router-dom';

import {
  SIGNUP_PATH as signupPath,
  SIGNIN_PATH as signinPath,
} from 'common/constants';
import { cn } from 'common/utils/cn';
import { clearCookie } from 'common/utils/cookie';
import { useAuthContext } from 'common/contexts/AuthContext';
import Image from 'common/components/Image';
import logo from 'common/assets/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const pathName = window.location.pathname;

  const handleSignout = () => {
    clearCookie('jwt');
    setIsLoggedIn(false);
    navigate(signinPath);
  };

  return (
    <header className="w-full transparent backdrop-blur-5px fixed">
      <div className="w-full px-5 py-1.5 flex text-white items-center justify-between">
        <Link to={'/'}>
          <div className="flex">
            <Image
              src={logo}
              lazy={false}
              alt="logo"
              className={cn(
                'w-10 h-10',
                pathName === '/signup' || pathName === '/signin'
                  ? 'invisible'
                  : 'visible'
              )}
            />
          </div>
        </Link>
        {isLoggedIn ? (
          <Link to={signinPath} onClick={handleSignout}>
            <div className="flex">
              <div className="text-xs xl:text-sm font-bold">Signout</div>
            </div>
          </Link>
        ) : (
          <Link to={signupPath}>
            <div className="flex px-6 py-2 bg-[var(--primaryCtaBg)] rounded-full">
              <div className="text-xs xl:text-sm font-bold">Get started</div>
            </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
