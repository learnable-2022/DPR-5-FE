import { proxy } from "valtio";

const state = proxy({
  userData: null,
  token: "",
});

export default state;
