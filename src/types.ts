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

export type { UserData, UserList, UserListItem, FetchUserDataResult };
