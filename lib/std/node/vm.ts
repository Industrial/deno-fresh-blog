import * as vm from "std/node/vm.ts";

const isContext = () => false;

export default {
  ...vm,
  isContext,
};
