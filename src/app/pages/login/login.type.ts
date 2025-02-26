export interface ILoginRequest{
    data:{
       username: string;
       password: string;
       retryCount: string;
    };
}
export interface ILoginResponse {
    status: number;
    message: string;
    data: {
      accessToken: string;
      refreshToken: string;
    };
    warnings: any[];
  }
  