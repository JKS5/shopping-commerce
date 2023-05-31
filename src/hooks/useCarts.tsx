import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart, addOrUpdateToCart, removeFromCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCarts() {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext();

  const cartsQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateToCart(uid, product),
    {
      onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
    }
  );

  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
  });

  return { cartsQuery, addOrUpdateItem, removeItem };
}
