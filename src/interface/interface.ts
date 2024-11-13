export interface UserDTO {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface ResponseData {
  status: number;
  message: string;
  data?: unknown
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  message: string;
  data: {
    token: string,
    userInfo: {
        id: string,
        email: string,
        username: string,
        role: string,
        status: string,
        createdAt: Date,
        updatedAt: Date
    }
  }
}