import { ResponseData, UpdateUserDTO } from "@/interface/interface";
import axiosInstance from "./axiosInstance";

export async function updateUser(
  id: string,
  data: UpdateUserDTO
): Promise<ResponseData> {
  try {
    const response = await axiosInstance.patch(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error updating user');
  }
}