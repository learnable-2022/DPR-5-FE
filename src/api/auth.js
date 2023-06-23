import request from "./request";

export const signUp = async (userDataObj) => {
  const response = await request.post("/user/signup", userDataObj);

  return response;
};

export const logIn = async (logInObj) => {
  const response = await request.post("/user/login", logInObj);

  return response;
};
