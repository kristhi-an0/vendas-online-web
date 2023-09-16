import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";

const Product = () => {
  const { user } = useGlobalContext();
  console.log('user', user);
  return <div>{`Produtos ${user?.cpf}`}</div>;
}
export default Product;