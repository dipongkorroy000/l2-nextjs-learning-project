import { IProduct } from "@/type";

const ProductCart = ({ product }: { product: IProduct }) => {
  return (
    <div key={product.id} className="border border-gray-800 p-5 rounded-sm flex flex-col justify-between">
      <img className="rounded-sm mx-auto" src={product.image} alt={product.product_name} height={300} width={300} />
      <div>
        <h2>{product.product_name}</h2>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
      </div>
      <div className="flex justify-between mt-2">
        <button className="px-4 py-2 border border-gray-800 rounded-sm cursor-pointer">View</button>
        <button className="px-4 py-2 border border-gray-800 rounded-sm cursor-pointer">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCart;
