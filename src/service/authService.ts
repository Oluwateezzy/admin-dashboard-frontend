import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

export async function loginUser(loginData: LoginDTO): Promise<LoginResponse> {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, loginData);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'An error occurred during login';
    throw new Error(errorMessage);
  }
}