import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart, addOrUpdateToCart, removeFromCart } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export default function useCarts() {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext();

  const cartsQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const plusCart = useMutation((uid, product) => addOrUpdateToCart(), {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });

  const minusCart = useMutation(() => addOrUpdateToCart(), {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });

  const deleteCart = useMutation(() => removeFromCart(), {
    onSuccess: () => queryClient.invalidateQueries(["carts"]),
  });

  return { cartsQuery, plusCart, minusCart, deleteCart };
}
