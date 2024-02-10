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
}

interface UserListItem {
  id: number;
  login: string;
  name?: string;
  location?: string;
  avatar_url: string;
  url: string;
}

export type { UserData, UserList, UserListItem };
