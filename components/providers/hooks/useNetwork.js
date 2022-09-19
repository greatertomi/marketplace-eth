import useSWR from "swr";
import { useEffect } from "react";

export const handler = (web3, provider) => () => {
  const { mutate, ...rest } = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      return await web3.eth.net.getId();
    }
  );

  useEffect(() => {
    provider && provider.on("chainChanged", (netId) => mutate(netId));
  }, [web3]);

  return {
    network: { mutate, ...rest },
  };
};
