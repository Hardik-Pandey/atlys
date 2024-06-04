import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getLocalStorage, setLocalStorage } from 'common/utils/localStorage';
import { PostData } from 'common/interfaces';
import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Modal from 'common/components/Modal';
import Signin from 'common/components/Signin';
import Signup from 'common/components/Signup';

import { CreatePostProps, StoredUsers, User } from './interface';

const CreatePost: React.FC<CreatePostProps> = ({ userId, setPostsData }) => {
  const [postData, setPostData] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [toggleSigninSignupModal, setToggleSigninSignupModal] =
    useState<string>('signin');

  const handlePostDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData(e.target.value);
  };

  const handleSubmit = () => {
    console.info({ postData });
    const timestamp = new Date();
    const storedUsers = getLocalStorage<StoredUsers>('users');
    if (storedUsers) {
      const userProfile: User | undefined = storedUsers[userId];
      if (userProfile) {
        console.info('Retrieved user profile:', userProfile);
        const { profilePic, userName } = userProfile || {};
        if (postData) {
          setPostsData((prevPostsData: PostData[]) => {
            const newPostsData = [
              ...prevPostsData,
              {
                postId: uuidv4(),
                userId,
                profilePic,
                userName,
                timestamp,
                postData,
                commentsCount: 0,
              },
            ];
            setLocalStorage('posts', newPostsData);
            return newPostsData;
          });

          setPostData('');
        }
      } else {
        console.info('User profile not found in local storage.');
        setShowModal(true);
      }
    } else {
      console.info('Users not found in local storage.');
      setShowModal(true);
    }
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const secondaryLinkClickHandler = () => {
    if (toggleSigninSignupModal === 'signin') {
      setToggleSigninSignupModal('signup');
    } else if (toggleSigninSignupModal === 'signup') {
      setToggleSigninSignupModal('signin');
    }
  };

  const SigninOrSignupComp =
    toggleSigninSignupModal === 'signin' ? Signin : Signup;

  return (
    <>
      <div className="mb-4 px-5 py-6 bg-[var(--secondaryDark)] border-[2px] border-solid border-[var(--gray3)] rounded-lg">
        <div className="text-lg text-[var(--gray1)]">Create post</div>
        <div className="my-4 p-4 bg-[var(--tertiaryDark)] rounded-lg">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-[var(--secondaryDark)] rounded-full cursor-pointer">
              💬
            </div>
            <Input
              required
              type="text"
              value={postData}
              placeholder="How are you feeling today?"
              onChange={handlePostDataChange}
              className="ml-4 w-full border-none border-transparent leading-4 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <Button
            disabled={!postData}
            className={`w-[111px]${!postData ? ' bg-[#999]' : ''}`}
            onClick={handleSubmit}
          >
            Post
          </Button>
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <SigninOrSignupComp
            onSecondaryLinkClick={secondaryLinkClickHandler}
            closeModalHandler={closeModalHandler}
          />
        </Modal>
      )}
    </>
  );
};

export default CreatePost;
