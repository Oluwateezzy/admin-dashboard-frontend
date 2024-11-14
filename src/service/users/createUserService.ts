import { ResponseData, UserDTO } from '@/interface/interface';
import axiosInstance from './axiosInstance';


export async function createUser(user: UserDTO): Promise<ResponseData> {
  try {
    const response = await axiosInstance.post('/users', user);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating user');
  }
}