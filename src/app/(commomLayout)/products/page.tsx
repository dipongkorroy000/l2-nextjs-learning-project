import ProductCart from "@/components/products/ProductCart";
import { IProduct } from "@/type";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", { cache: "no-store" });
  const products = await res.json();

  return (
    <div className="my-5">
      <h2 className="text-center">All Products</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 my-5">
        {products.map((product: IProduct) => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
