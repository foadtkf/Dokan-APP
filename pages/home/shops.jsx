import { useRouter } from "next/router";
import React from "react";

const Shops = () => {
  const navigate = useRouter();
  return (
    <div>
      <div className="md:px-[20%] ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, index) => (
          <div
            onClick={() => navigate.push(`/shop/shop${product}`)}
            className="card lg:card-side bg-base-100 shadow-xl my-[2%] cursor-pointer"
            key={index}
          >
            <img
              className="md:w-[50%] rounded-s-xl"
              src="https://images.unsplash.com/photo-1559925393-a8e5b72d6608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Album"
            />

            <div className="card-body text-black">
              <h2 className="card-title">Dokan {product}</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                quidem assumenda sed nisi? Doloremque, enim.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shops;
