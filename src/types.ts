import { ReactNode } from "react";

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
  [key: string]: string | number | undefined;
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
  value?: string | number;
  icon: JSX.Element;
  label: string;
  fullwidth?: boolean;
}

interface UserDetailIcons {
  [key: string]: JSX.Element;
}

interface UserDataContextType {
  userData: Record<string, UserData>;
  setUserData: (userId: string, data: UserData) => void;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export type {
  UserData,
  UserList,
  UserListItem,
  FetchUserDataResult,
  ImageShimmerProps,
  UserDetailItemProps,
  UserDetailIcons,
  UserDataContextType,
  ErrorBoundaryProps,
  ErrorBoundaryState,
};
