import request from "./request";

export const allergy = async () => {
  const response = await request.post("/allergy/648bcf82e3bb1687678b1438");

  return response;
};
