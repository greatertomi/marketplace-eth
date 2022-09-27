import { useEffect } from "react";
import useSWR from "swr";

// You can hash this address with keccak256
const adminAddresses = {
  "0x1776F38286401E3A12f5E8Ad6929e2bEAF4Cf959": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    data,
    isAdmin: (data && adminAddresses[data]) ?? false,
    mutate,
    ...rest,
  };
};
