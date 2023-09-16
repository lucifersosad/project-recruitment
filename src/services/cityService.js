import { get } from "../utils/requests"

export const getListCity = async () => {
  const result = await get(`city`);
  return result;
};