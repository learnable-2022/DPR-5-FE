import { proxy } from "valtio";

const store = proxy({
  userData: null,
  userLoginData: "",
  userWalletAddress: "",
  allergyData: null,
});

export default store;
