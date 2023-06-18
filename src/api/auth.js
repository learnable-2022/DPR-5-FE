import request from "./request";

export const signUp = async (userDataObj) => {
  try {
    const response = await request.post(
      "https://medisync-instance.onrender.com/api/v1/user/signup",
      userDataObj
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
