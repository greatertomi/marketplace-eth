import { handler as createUseAccount } from "@components/providers/hooks/handler";

export const setupHooks = (web3) => {
  return { useAccount: createUseAccount(web3) };
};
