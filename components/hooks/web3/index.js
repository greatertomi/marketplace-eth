import { useHooks } from "@components/providers/web3";

const enhanceHook = (swrRes) => {
  return { ...swrRes, hasInitialResponse: swrRes.data || swrRes.error };
};

export const useAccount = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useAccount)());
  return { account: swrRes };
};

export const useNetwork = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.useNetwork)());
  return { network: swrRes };
};

export const useOwnedCourses = (...args) => {
  const res = enhanceHook(useHooks((hooks) => hooks.useOwnedCourses)(...args));
  return { ownedCourses: { data: res } };
};

export const useWalletInfo = () => {
  const { account } = useAccount();
  const { network } = useNetwork();
  const canPurchaseCourse = !!(account.data && network.isSupported);
  return { account, network, canPurchaseCourse };
};
