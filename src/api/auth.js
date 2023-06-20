import request from "./request";

export const signUp = async (userDataObj) => {
  const response = await request.post("/user/signup", userDataObj);

  return response;
};

export const logIN = async () => {
  const response = await request.post("/user/login");

  return response;
};
