interface IToken {
  authToken: string;
  refreshToken: string;
}

type IUser = {
  userName: string | undefined;
  id: string;
};


interface Authentication {
  data: {
    isLoggedIn: boolean | undefined;
  };
}

interface IOptionsParams {
  userName: string;
  password: string;
  userType?: string
}
