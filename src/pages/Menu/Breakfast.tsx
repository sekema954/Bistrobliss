import { useState, useEffect } from "react";
import pancakes from '../../assets/images/icons/pancakes.jpg';
import omlette from '../../assets/images/icons/omlette.jpg';
import toast from '../../assets/images/icons/toast.jpg';
import burrito from '../../assets/images/icons/burrito.jpg';
import parfait from '../../assets/images/icons/parfait.jpg';
import goldtoast from '../../assets/images/icons/goldtoast.webp';
import salmon from '../../assets/images/icons/salmon.jpg';
import smoothiebowl from '../../assets/images/icons/smoothiebowl.jpeg';

function Breakfast() {
    interface Prop {
        id: number;
        icon: string;
        price: number;
        title: string;
        desc: string;
    }

    const [breakfastMenu, setBreakfastMenu] = useState<Prop[]>([]);
    const Breakfast = [
        {id: 1, icon: pancakes, price: 5.99, title: 'Classic Pancakes', desc: 'Fluffy pancakes topped with butter and drizzled with maple syrup.'},
        {id: 2, icon: omlette, price: 7.49, title: 'Veggie Omelette', desc: 'A three-egg omelette filled with bell peppers, onions, mushrooms, and cheese.'},
        {id: 3, icon: toast, price: 6.99, title: 'Avocado Toast with Egg', desc: 'Sourdough toast topped with mashed avocado, poached egg, and chili flakes.'},
        {id: 4, icon: burrito, price: 8.49, title: 'Hearty Breakfast Burrito', desc: 'A warm tortilla filled with scrambled eggs, crispy bacon, cheese, and fresh salsa.'},
        {id: 5, icon: parfait, price: 4.99, title: 'Fresh Fruit Parfait', desc: 'Layers of creamy Greek yogurt, crunchy granola, and seasonal fresh fruits.'},
        {id: 6, icon: goldtoast, price: 6.49, title: 'Golden French Toast', desc: 'Thick slices of French toast, dusted with powdered sugar and served with fresh berries.'},
        {id: 7, icon: salmon, price: 9.99, title: 'Bagel with Smoked Salmon', desc: 'Toasted bagel topped with cream cheese, smoked salmon, capers, and red onion.'},
        {id: 8, icon: smoothiebowl, price: 7.99, title: 'Berry Smoothie Bowl', desc: 'A refreshing acai bowl topped with granola, banana, blueberries, and a drizzle of honey.'},
    ];

    useEffect(() => {
        setBreakfastMenu(Breakfast);
    }, []);

    return (
        <div className="flex flex-wrap gap-5 items-center justify-center p-4 md:p-8">
            {breakfastMenu.map(data => (
                <div 
                    key={data.id} 
                    className="w-full sm:w-[calc(50%-10px)] md:w-[306px] h-[428px] border border-[#DBDFD0] shadow-lg rounded-lg overflow-hidden"
                >
                    <div className="w-full h-[230px]">
                        <img className="w-full h-full object-cover" src={data.icon} alt={data.title} />
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 gap-2">
                        <p className="text-[#AD343E] font-semibold text-lg">${data.price}</p>
                        <p className="font-semibold text-base">{data.title}</p>
                        <p className="text-center text-[#414536] text-sm">{data.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Breakfast;
