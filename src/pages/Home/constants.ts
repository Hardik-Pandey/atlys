import profilePic1 from 'common/assets/profilePic1.png';
import profilePic2 from 'common/assets/profilePic2.png';

const currentDate = new Date();
const fiveMinutesAgo = new Date(currentDate.getTime() - 5 * 60000);
const eightMinutesAgo = new Date(currentDate.getTime() - 8 * 60000);

export const initialPostsData = [
  {
    postId: 'postId1',
    userId: 'userId1',
    profilePic: profilePic1,
    userName: 'Theresa Webb',
    timestamp: fiveMinutesAgo,
    postData:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentsCount: 24,
  },
  {
    postId: 'postId2',
    userId: 'userId2',
    profilePic: profilePic2,
    userName: 'Marvin McKinney',
    timestamp: eightMinutesAgo,
    postData:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    commentsCount: 11,
  },
];
