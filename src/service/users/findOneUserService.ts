import { ResponseData } from "@/interface/interface";
import axiosInstance from "./axiosInstance";

export async function findOneUser(id: string): Promise<ResponseData> {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching user');
  }
}