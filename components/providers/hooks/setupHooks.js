import { handler as createAccountHook } from "@components/providers/hooks/useAccount";
import { handler as createNetworkHook } from "@components/providers/hooks/useNetwork";

export const setupHooks = (...deps) => {
  return {
    useAccount: createAccountHook(...deps),
    useNetwork: createNetworkHook(...deps),
  };
};
