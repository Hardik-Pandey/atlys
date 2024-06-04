export interface PostData {
  postId: string;
  userId: string;
  profilePic: string;
  userName: string;
  timestamp: Date;
  postData: string;
  commentsCount: number;
}

export interface InputField {
  id: string;
  label: string;
  type?:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'url'
    | 'tel'
    | 'search'
    | 'date';
  placeholder: string;
  required: boolean;
}

export interface SigninOrSignupProps {
  onSecondaryLinkClick?: () => void;
  closeModalHandler?: () => void;
}
