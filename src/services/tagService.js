import { get } from "../utils/requests"

export const getListTag = async () => {
  const result = get(`tags`);
  return result;
}