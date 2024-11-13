import { FilterQueryDTO, PaginationQueryDTO, ResponseData } from "@/interface/interface";
import axiosInstance from "./axiosInstance";

export async function findManyUsers(
  filter: FilterQueryDTO,
  paginate: PaginationQueryDTO
): Promise<ResponseData> {
  try {
    const response = await axiosInstance.get('/users', {
      params: { ...filter, ...paginate },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching users');
  }
}