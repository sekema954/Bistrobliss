import { useState, useEffect } from "react";
import grilledChicken from '../../assets/images/icons/grilledchicken.jpg';
import beefSteak from '../../assets/images/icons/beefsteak.webp';
import pastaAlfredo from '../../assets/images/icons/pastaAlfredo.jpg';
import fishTacos from '../../assets/images/icons/fishTacos.jpg';
import vegetableStirFry from '../../assets/images/icons/vegetableStirFry.jpeg';
import lambChops from '../../assets/images/icons/lambChops.jpeg';
import pizzaMargherita from '../../assets/images/icons/pizzaMargherita.avif';
import shrimpPaella from '../../assets/images/icons/shrimpPaella.jpg';

function MainDishes() {
    interface Prop {
        id: number;
        icon: string;
        price: number;
        title: string;
        desc: string;
    }

    const [mainDishesMenu, setMainDishesMenu] = useState<Prop[]>([]);
    const mainDishes = [
        {id: 1, icon: grilledChicken, price: 12.99, title: 'Grilled Chicken', desc: 'Juicy grilled chicken breast seasoned to perfection.'},
        {id: 2, icon: beefSteak, price: 19.50, title: 'Beef Steak', desc: 'Tender and flavorful beef steak cooked to your preference.'},
        {id: 3, icon: pastaAlfredo, price: 14.25, title: 'Pasta Alfredo', desc: 'Creamy Alfredo pasta with a touch of Parmesan cheese.'},
        {id: 4, icon: fishTacos, price: 10.75, title: 'Fish Tacos', desc: 'Soft tortillas filled with crispy fish, fresh slaw, and zesty sauce.'},
        {id: 5, icon: vegetableStirFry, price: 9.50, title: 'Vegetable Stir-Fry', desc: 'A colorful mix of stir-fried vegetables with a light soy sauce.'},
        {id: 6, icon: lambChops, price: 22.00, title: 'Lamb Chops', desc: 'Succulent lamb chops grilled with herbs and served with a side of potatoes.'},
        {id: 7, icon: pizzaMargherita, price: 11.00, title: 'Pizza Margherita', desc: 'Classic Margherita pizza with fresh mozzarella, tomatoes, and basil.'},
        {id: 8, icon: shrimpPaella, price: 17.99, title: 'Shrimp Paella', desc: 'Traditional Spanish paella with shrimp, rice, and vegetables.'},
    ];

    useEffect(() => {
        setMainDishesMenu(mainDishes);
    }, []);

    return (
        <div className="flex flex-wrap gap-5 items-center justify-center p-4 md:p-8">
            {mainDishesMenu.map(data => (
                <div 
                    key={data.id} 
                    className="w-full sm:w-[calc(50%-10px)] md:w-[306px] h-[428px] border border-[#DBDFD0] shadow-lg rounded-lg overflow-hidden"
                >
                    <div className="w-full h-[230px]">
                        <img className="w-full h-full object-cover" src={data.icon} alt={data.title} />
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 gap-2">
                        <p className="text-[#AD343E] font-semibold text-lg">${data.price.toFixed(2)}</p>
                        <p className="font-semibold text-base">{data.title}</p>
                        <p className="text-center text-[#414536] text-sm">{data.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MainDishes;
