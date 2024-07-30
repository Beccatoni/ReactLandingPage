import React from "react";

const Navbar = () => {
  const listItems = [
    "FEATURES",
    "ABOUT",
    "SERVICES",
    "GALLERY",
    "TESTIMONIALS",
    "TEAM",
    "CONTACT",
  ];


  const listItem = listItems.map(item => <li>{item}</li>)
  return (
    <div>
      <nav className="flex justify-center gap-52 w-full h-[6rem] shadow-xl items-center">
         <h1 className="font-semibold text-2xl">REACT LANDING PAGE
         </h1>
        <ul className="flex gap-12 text-slate-600">
          {listItem}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
