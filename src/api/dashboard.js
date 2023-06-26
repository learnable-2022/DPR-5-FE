import request from "./request";

export const allergy = async (allergyDetail) => {
  const response = await request.post(
    "https://fakestoreapi.com/products/1",
    allergyDetail
  );

  return response;
};
