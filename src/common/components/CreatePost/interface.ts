export interface CreatePostProps {
  userId: string;
  setPostsData: any;
}

export interface User {
  userId: string;
  userName: string;
  email: string;
  profilePic: string;
  createdAt: Date;
  updatedAt: Date;
}

export type StoredUsers = {
  [key: string]: User;
};
