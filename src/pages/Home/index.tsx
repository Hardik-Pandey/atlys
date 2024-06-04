import { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from 'common/utils/localStorage';
import { useAuthContext } from 'common/contexts/AuthContext';
import useUserData from 'common/customHooks/useUserData';
import CreatePost from 'common/components/CreatePost';
import Post from 'common/components/Post';

import { PostData } from 'common/interfaces';
import { initialPostsData } from './constants';

const Home = () => {
  useAuthContext();
  const { userId, userName } = useUserData(); // { userId, email, userName, password }
  const locallyStoredPosts = getLocalStorage<PostData[]>('posts');
  const [postsData, setPostsData] = useState<PostData[]>(
    locallyStoredPosts || []
  );

  useEffect(() => {
    if (!locallyStoredPosts) {
      setPostsData(initialPostsData);
      setLocalStorage('posts', initialPostsData);
    }
  }, []);

  return (
    <div className="bg-[var(--primaryDark)] flex flex-col items-center justify-center min-h-dvh">
      <div className="w-[700px] m-auto pt-[69px]">
        <div className="font-medium text-xl text-[var(--gray1)]">
          Hello {userName || ''}
        </div>
        <div className="w-[580px] mt-3 mb-10 text-base leading-6 text-[var(--gray2)]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </div>

        <CreatePost userId={userId} setPostsData={setPostsData} />

        {postsData.map(
          ({
            userId,
            profilePic,
            userName,
            timestamp,
            postData,
            commentsCount,
          }) => (
            <Post
              key={userId}
              profilePic={profilePic}
              userName={userName}
              timestamp={timestamp}
              postData={postData}
              commentsCount={commentsCount}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Home;
