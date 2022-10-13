import { handler as createAccountHook } from "@components/providers/hooks/useAccount";
import { handler as createNetworkHook } from "@components/providers/hooks/useNetwork";
import { handler as createOwnedCoursesHook } from "@components/providers/hooks/useOwnedCourses";

export const setupHooks = ({ web3, provider, contract }) => {
  return {
    useAccount: createAccountHook(web3, provider),
    useNetwork: createNetworkHook(web3, provider),
    useOwnedCourses: createOwnedCoursesHook(web3, contract),
  };
};
