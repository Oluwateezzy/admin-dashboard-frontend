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

export interface FilterQueryDTO {
  role?: string;
  status?: string;
}

export interface PaginationQueryDTO {
  page: number;
  limit: number;
}

export interface UpdateUserDTO {
  email?: string,
  username?: string,
  role?: string,
  status?: string,
}