import React from "react";

function Home() {
  return (
    <div className="w-full  ">
      <div className="banner-section-1  bg-[#FAFAF5] flex flex-col md:flex-row  pt-10 px-20 ">
        <div className="left md:w-1/2 ">
            <h1 className="text-4xl font-bold">
              The only Book API <br /> you'll ever need.
            </h1>
            <p className="mt-4 md:mt-8 text-gray-600 md:w-4/5 md:text-wrap">
              The Big Book API allows you to semantically search, filter, sort,
              and recommend books like never before.
            </p>
        </div>
        <div className="right md:w-1/2">
        <img src="/assets/images/banner-image.svg" className="object-contain w-full"  />
        </div>

        
      </div>
      <div className="banner-section-2 bg-white relative px-20 ">
    <div className="cards-container absolute -top-8 flex flex-col  md:flex-row md:justify-center md:space-x-4">
      <div className="card p-6 w-72 h-80 bg-red-400">
        <div className="img"><img src="/assets/images/books.svg" className="object-contain "  /></div>
        <h1 className="text-center">Millions of Books</h1>
        <h3 className="text-center">⤷ search by title, author, isbn</h3>
        <h3 className="text-center">⤷ filter and sort by rating, publish</h3>
        <h3 className="text-center">date</h3>
      </div>
      <div className="card p-6 w-72 h-80 bg-red-400">
        <div className="img"><img src="/assets/images/books.svg" className="object-contain "  /></div>
        <h1 className="text-center">Millions of Books</h1>
        <h3 className="text-center">⤷ search by title, author, isbn</h3>
        <h3 className="text-center">⤷ filter and sort by rating, publish</h3>
        <h3 className="text-center">date</h3>
      </div>
      <div className="card p-6 w-72 h-80 bg-red-400">
        <div className="img"><img src="/assets/images/books.svg" className="object-contain "  /></div>
        <h1 className="text-center">Millions of Books</h1>
        <h3 className="text-center">⤷ search by title, author, isbn</h3>
        <h3 className="text-center">⤷ filter and sort by rating, publish</h3>
        <h3 className="text-center">date</h3>
      </div>
    </div>


      </div>
      
    </div>
  );
}

export default Home;
