import { ResponseData } from "@/interface/interface";
import axiosInstance from "./axiosInstance";

export async function deleteUser(id: string): Promise<ResponseData> {
  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error deleting user');
  }
}