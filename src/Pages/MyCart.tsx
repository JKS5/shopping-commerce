import CartItem from "../components/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/PriceCard";
import Button from "../components/ui/Button";
import useCarts from "../hooks/useCarts";

export default function MyCart() {
  // const { uid } = useAuthContext();
  // const { isLoading, data: products } = useQuery(["carts"], () => getCart(uid));

  const {
    cartsQuery: { isLoading, data: products },
  } = useCarts();

  const totalPrice =
    products &&
    products.reduce(
      (prev, current) =>
        prev + parseInt(current.price) * parseInt(current.quantity),
      0
    );
  if (isLoading) return <p>Loading</p>;

  const hasProdcuts = products && products.length > 0;
  const SHIPPING = 3000;

  return (
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        내 장바구니
      </p>
      {!hasProdcuts && <p>장바구니에 상품이 없습니다. 열심히 쇼핑해주세요!</p>}
      {hasProdcuts && (
        <>
          <ul className="border-gray-300 border-b mb-8 p-4 px-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product}></CartItem>
              ))}
          </ul>
          <div className="flex justify-between items-center mb-4 px-2 md:px-8 lg:px-16">
            <PriceCard text="상품총액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송액" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
          </div>
          <Button text="주문하기" />
        </>
      )}
    </section>
  );
}
