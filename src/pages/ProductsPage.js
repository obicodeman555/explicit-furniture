import { Sidebar, Navbar, Footer } from "../components";
import { useProductsContext } from "../context/products_context";
import Loading from "../components/loading/Loading";

const ProductsPage = () => {
  /*
  @product_loading state
  destructuring from custom product context hook
  */
  const { products_loading } = useProductsContext();
  console.log(products_loading);
  return (
    <>
      <Navbar />
      <Sidebar />
      <>
        {products_loading ? (
          <Loading />
        ) : (
          <main>List of Products will be display here</main>
        )}
      </>
      <Footer />
    </>
  );
};

export default ProductsPage;
