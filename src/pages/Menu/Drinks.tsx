import { useState, useEffect } from "react";
import coffee from '../../assets/images/icons/coffee.jpg';
import orangeJuice from '../../assets/images/icons/orangejuice.jpeg';
import smoothie from '../../assets/images/icons/smoothie.jpg';
import greenTea from '../../assets/images/icons/greentea.webp';
import cappuccino from '../../assets/images/icons/cappuccino.jpg';
import lemonade from '../../assets/images/icons/lemonade.jpg';
import icedTea from '../../assets/images/icons/icedtea.jpg';
import mojito from '../../assets/images/icons/mojito.jpeg';

function Drinks() {
    interface Prop {
        id: number;
        icon: string;
        price: number;
        title: string;
        desc: string;
    }

    const [drinksMenu, setDrinksMenu] = useState<Prop[]>([]);
    const drinks = [
        {id: 1, icon: coffee, price: 3.50, title: 'Classic Coffee', desc: 'Rich and aromatic coffee brewed to perfection.'},
        {id: 2, icon: orangeJuice, price: 4.25, title: 'Fresh Orange Juice', desc: 'Refreshing freshly squeezed orange juice.'},
        {id: 3, icon: smoothie, price: 5.99, title: 'Strawberry Banana Smoothie', desc: 'A delicious blend of fresh strawberries and bananas.'},
        {id: 4, icon: greenTea, price: 3.00, title: 'Green Tea', desc: 'Calming and healthy green tea with a hint of honey.'},
        {id: 5, icon: cappuccino, price: 4.50, title: 'Creamy Cappuccino', desc: 'A perfect balance of espresso, steamed milk, and foam.'},
        {id: 6, icon: lemonade, price: 3.75, title: 'Classic Lemonade', desc: 'Cool and tangy lemonade, freshly squeezed.'},
        {id: 7, icon: icedTea, price: 4.00, title: 'Iced Peach Tea', desc: 'Chilled tea with a sweet peach flavor.'},
        {id: 8, icon: mojito, price: 5.25, title: 'Mint Mojito', desc: 'A refreshing cocktail with mint leaves, lime, and soda.'},
    ];

    useEffect(() => {
        setDrinksMenu(drinks);
    }, []);

    return (
        <div className="flex flex-wrap gap-5 items-center justify-center p-4 md:p-8">
            {drinksMenu.map(data => (
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

export default Drinks;
