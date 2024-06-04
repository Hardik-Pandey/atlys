import { useNavigate } from 'react-router-dom';

import useAuth from 'common/customHooks/useAuth';
import Image from 'common/components/Image';
import logo from 'common/assets/logo.svg';

import { AuthPageWrapperProps } from './interface';

const AuthPageWrapper: React.FC<AuthPageWrapperProps> = ({ Component }) => {
  useAuth();
  const navigate = useNavigate();
  return (
    <div className="bg-[var(--primaryDark)] flex flex-col items-center justify-center min-h-dvh">
      <Image
        src={logo}
        lazy={false}
        alt="logo"
        className="w-10 h-10 mb-[49px] cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      />
      <Component />
    </div>
  );
};

export default AuthPageWrapper;
