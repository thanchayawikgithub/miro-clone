import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .then((result) => {
        return result;
      })
      .finally(() => setPending(false))
      .catch((error) => {
        throw error;
      });
  };

  return {
    mutate,
    pending,
  };
};
