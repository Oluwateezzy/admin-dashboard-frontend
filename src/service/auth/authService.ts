import { LoginDTO, LoginResponse } from '@/interface/interface';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function loginUser(loginData: LoginDTO): Promise<LoginResponse> {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, loginData);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'An error occurred during login';
    throw new Error(errorMessage);
  }
}