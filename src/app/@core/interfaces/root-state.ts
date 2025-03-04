export interface IRootState {
  loading: boolean;
  userInfo: {
    username: string;
    password: string;
  } | null;
}
