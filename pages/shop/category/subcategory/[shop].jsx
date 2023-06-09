import Head from "next/head";
import { useRouter } from "next/router";

const Shop = () => {
  const router = useRouter();
  const { shop } = router.query;

  return (
    <div className="py-[10%]  px-[5%]">
      <Head>
        <title>Dokan:: {shop}</title>
      </Head>
      <h1 className="text-2xl md:text-8xl pb-[5%]">
        Shop Name:
        <a className="text-blue-700 ml-2">{shop}</a>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, index) => (
          <div className="card card-compact bg-base-100 shadow-xl" key={index}>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1652010701131-1aa7afde29e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-black">
              <h2 className="card-title">Product {product}</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                alias?
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
