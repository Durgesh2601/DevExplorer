interface UserList {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  url: string;
}

interface UserData {
  id: number;
  login: string;
  name?: string;
  avatar_url: string;
  location: string;
  company: string;
  followers: number;
  following: number;
  public_repos: number;
  email: string;
  twitter_username: string;
}

interface UserListItem {
  id: number;
  login: string;
  name?: string;
  location?: string;
  avatar_url: string;
  url: string;
}

interface FetchUserDataResult {
  userDetails: UserData | null;
  loading: boolean | false;
}

interface ImageShimmerProps {
  width: number;
  height: number;
  imageUrl: string;
  alt: string;
}

interface UserDetailItemProps {
  value: string;
  icon: JSX.Element;
  label: string;
  fullwidth?: boolean;
}

interface UserDetailIcons {
  [key: string]: JSX.Element;
}

export type {
  UserData,
  UserList,
  UserListItem,
  FetchUserDataResult,
  ImageShimmerProps,
  UserDetailItemProps,
  UserDetailIcons,
};
