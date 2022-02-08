import { Sidebar, Navbar, Footer } from "../components";
import { useProductsContext } from "../context/products_context";
import Loading from "../components/loading";
import Error from "../components/error";

const ProductsPage = () => {
  /*
  @product_loading state
  destructuring from custom product context hook
  */
  const { products_loading: loading, products_error: error } =
    useProductsContext();

  return (
    <>
      <Navbar />
      <Sidebar />
      <>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <main>List of Products will be display here</main>
        )}
      </>
      <Footer />
    </>
  );
};

export default ProductsPage;
