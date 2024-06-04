import { timeAgo } from 'common/utils/time';
import Image from 'common/components/Image';
import dotsHorizontal from 'common/assets/dotsHorizontal.svg';
import chatBubble from 'common/assets/chatBubble.svg';

import { PostProps } from './interface';
import { cn } from 'common/utils/cn';

const Post: React.FC<PostProps> = ({
  profilePic,
  userName,
  timestamp,
  postData,
  commentsCount,
}) => {
  return (
    <div className="mb-4 px-5 py-6 bg-[var(--secondaryDark)] border-[2px] border-solid border-[var(--gray3)] rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={profilePic}
            lazy={false}
            alt="profile picture"
            ariaLabel="profile picture"
            className="w-11 h-11 mr-4 rounded-full"
          />

          <div className="flex flex-col">
            <div className="text-base mb-1 text-[var(--gray1)] font-medium">
              {userName}
            </div>
            <div className="text-sm text-[var(--gray2)] font-medium">
              {timeAgo(
                typeof timestamp === 'string' ? new Date(timestamp) : timestamp
              )}
            </div>
          </div>
        </div>

        <Image
          src={dotsHorizontal}
          lazy={false}
          alt="Horizontal dots"
          ariaLabel="Horizontal dots"
          className="w-5 h-5 cursor-pointer"
        />
      </div>

      <div className="my-4 p-4 bg-[var(--tertiaryDark)] rounded-lg">
        <div className="flex">
          <div className="w-12 h-12 flex items-center justify-center bg-[var(--secondaryDark)] rounded-full cursor-pointer">
            👋
          </div>
          <div className="w-[551px] ml-4 text-base leading-6 text-[var(--gray2)]">
            {postData}
          </div>
        </div>
      </div>

      <div
        className={cn(
          'flex items-center'
          // commentsCount ? 'visible' : 'hidden'
        )}
      >
        <Image
          src={chatBubble}
          lazy={false}
          alt="Chat Bubble"
          ariaLabel="Chat Bubble"
          className="w-5 h-5 mr-2"
        />
        <p className="mr-2 text-sm text-[var(--gray2)]">
          {commentsCount} comments
        </p>
      </div>
    </div>
  );
};

export default Post;
