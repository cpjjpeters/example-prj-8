import { ProductCard } from "../components/ProductCard";

export function Products() {
  const protein = {
    title: "Protein",
    description: "Protein is good for you.",
    price: 40,
  };
  const carbs = {
    title: "Carbs",
    description: "Carbs are good for you.",
    price: 40,
  };
  const creatine = {
    title: "Creatine",
    description: "Creatine is good for you.",
    price: 25,
  };
  const massGainer = {
    title: "Mass Gainer",
    description: "Mass Gainer is good for you.",
    price: 50,
  };

  const products = [protein, carbs, creatine, massGainer];

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
