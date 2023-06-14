import { proxy } from "valtio";

const state = proxy({
  userData: null,
});

export default state;
