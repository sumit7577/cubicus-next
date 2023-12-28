"use client";
import React from "react";


const brandsData = [
  {
    title: "$30M+",
    name: "Investment",
    description: "Raised by start-ups"
  },
  {
    title: "400+",
    name: "Projects!",
    description: "Raised by start-ups"
  },
  {
    title: "200+",
    name: "Associated",
    description: "Raised by start-ups"
  },
  {
    title: "30+",
    name: "Industries!",
    description: "Raised by start-ups"
  },
  {
    title: "10+",
    name: "Years",
    description: "Raised by start-ups"
  }
]

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="relative -top-25 z-99999">
        <div className="mx-auto px-4 md:px-8 2xl:px-0 max-w-c-1315">
          <div className="p-8 grid grid-cols-2 items-center justify-center gap-7.5 md:grid-cols-5 lg:gap-12.5 xl:gap-29 bg-primary shadow-md rounded-md">
            {brandsData.map((item, index) => (
              <div key={index} className="text-center">
                <h2 className="text-white text-sectiontitle4 font-semibold font-sans">{item.title}</h2>
                <h2 className="text-white text-sectiontitle">{item.name}</h2>
                <h2 className="text-white text-metatitle font-light">{item.description}</h2>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
