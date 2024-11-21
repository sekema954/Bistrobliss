import { useState } from "react";
import All from "./Menu/All";
import Breakfast from "./Menu/Breakfast";
import Desserts from "./Menu/Desserts";
import Drinks from "./Menu/Drinks";
import MainDishes from "./Menu/MainDishes";
import OrderApps from "../components/OrderApps";

function Menu() {
  const [isCategory, setCategory] = useState('All');

  return (
    <div className="py-5 px-4 md:py-10">
      <div className="flex items-center justify-center">
        <p className="text-[32px] md:text-[60px] lg:text-[100px] text-center">Our Menu</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 py-4">
        <button 
          onClick={() => setCategory('All')}
          className={`border border-[#DBDFD0] px-4 py-2 rounded-full cursor-pointer transition duration-[1s] ${isCategory === 'All' ? 'bg-[#AD343E] text-white' : ''}`}
        >
          All
        </button>

        <button 
          onClick={() => setCategory('Breakfast')}
          className={`border border-[#DBDFD0] px-4 py-2 rounded-full cursor-pointer transition duration-[1s] ${isCategory === 'Breakfast' ? 'bg-[#AD343E] text-white' : ''}`}
        >
          Breakfast
        </button>

        <button 
          onClick={() => setCategory('Main Dishes')}
          className={`border border-[#DBDFD0] px-4 py-2 rounded-full cursor-pointer transition duration-[1s] ${isCategory === 'Main Dishes' ? 'bg-[#AD343E] text-white' : ''}`}
        >
          Main Dishes
        </button>

        <button 
          onClick={() => setCategory('Drinks')}
          className={`border border-[#DBDFD0] px-4 py-2 rounded-full cursor-pointer transition duration-[1s] ${isCategory === 'Drinks' ? 'bg-[#AD343E] text-white' : ''}`}
        >
          Drinks
        </button>

        <button 
          onClick={() => setCategory('Desserts')}
          className={`border border-[#DBDFD0] px-4 py-2 rounded-full cursor-pointer transition duration-[1s] ${isCategory === 'Desserts' ? 'bg-[#AD343E] text-white' : ''}`}
        >
          Desserts
        </button>
      </div>

      <div className="flex items-center justify-center py-5 md:py-10">
        {isCategory === 'All' && <All />}
        {isCategory === 'Breakfast' && <Breakfast />}
        {isCategory === 'Main Dishes' && <MainDishes />}
        {isCategory === 'Drinks' && <Drinks />}
        {isCategory === 'Desserts' && <Desserts />}
      </div>
      <div className="flex items-center justify-center bg-[#F9F9F7]">
        <OrderApps />
      </div>
    </div>
  );
}

export default Menu;
