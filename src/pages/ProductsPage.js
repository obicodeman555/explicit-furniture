import { Sidebar, Navbar, ProductsList, Filters, Sort } from "../components";
import { useProductsContext } from "../context/products_context";
import Loading from "../components/loading";
import Error from "../components/error";
import "./productsPage.scss";

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
          <main className="allProducts">
            <div className="allProducts__container">
              <Filters />
              <div className="positioned--relative">
                <Sort />
                <ProductsList />
              </div>
            </div>
          </main>
        )}
      </>
    </>
  );
};

export default ProductsPage;
