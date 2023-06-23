import { proxy } from "valtio";

const store = proxy({
  userData: null,
  userLoginData: "",
  userWalletAddress: "",
});

export default store;
