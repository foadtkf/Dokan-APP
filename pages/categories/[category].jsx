import Head from "next/head";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="py-[10%] px-[10%]">
      <Head>
        <title>Dokan:: {category}</title>
      </Head>
      <h1 className="text-2xl md:text-8xl pb-[5%]">
        Category:
        <a className="text-blue-700 ml-2">{category}</a>
      </h1>
      <div className=" grid grid-cols-2 gap-y-4">
        {[1, 2, 3, 4, 5, 6].map((val) => (
          <div className="card w-96 glass" key={val}>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1597227772909-a6d166b48b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Dokan.. {val}</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => router.push(`/shops/shop${val}`)}
                >
                  Visit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
