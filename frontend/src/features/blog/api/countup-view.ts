import { api } from "@/lib/api-client";

export const countupArticleView = async (
  id: number
): Promise<{ message: string }> => {
  const response = await api.patch(`/article/view/${id}`);
  return response.data;
};
