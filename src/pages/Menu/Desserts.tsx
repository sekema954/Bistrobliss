import { useState, useEffect } from "react";
import chocolateCake from '../../assets/images/icons/chocalate-cake.avif';
import applePie from '../../assets/images/icons/apple-pie.webp';
import cheesecake from '../../assets/images/icons/cheesecake.jpg';
import brownie from '../../assets/images/icons/brownie.jpeg';
import iceCream from '../../assets/images/icons/icecream.jpg';
import tiramisu from '../../assets/images/icons/tiramisu.jpeg';
import pudding from '../../assets/images/icons/pudding.jpg';
import macarons from '../../assets/images/icons/macarons.jpg';

function Desserts() {
    interface Prop {
        id: number;
        icon: string;
        price: number;
        title: string;
        desc: string;
    }

    const [dessertsMenu, setDessertsMenu] = useState<Prop[]>([]);
    const desserts = [
        {id: 1, icon: chocolateCake, price: 6.50, title: 'Chocolate Cake', desc: 'Rich and moist chocolate cake topped with creamy frosting.'},
        {id: 2, icon: applePie, price: 5.25, title: 'Classic Apple Pie', desc: 'Warm apple pie with a buttery, flaky crust and a hint of cinnamon.'},
        {id: 3, icon: cheesecake, price: 7.99, title: 'New York Cheesecake', desc: 'Creamy cheesecake with a graham cracker crust and berry topping.'},
        {id: 4, icon: brownie, price: 3.75, title: 'Fudgy Brownie', desc: 'Decadent brownie with a gooey center and a crispy top.'},
        {id: 5, icon: iceCream, price: 4.50, title: 'Vanilla Ice Cream', desc: 'Classic vanilla ice cream served with a waffle cone.'},
        {id: 6, icon: tiramisu, price: 6.25, title: 'Tiramisu', desc: 'Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.'},
        {id: 7, icon: pudding, price: 3.00, title: 'Chocolate Pudding', desc: 'Smooth and creamy chocolate pudding topped with whipped cream.'},
        {id: 8, icon: macarons, price: 5.75, title: 'French Macarons', desc: 'Delicate French macarons with a variety of flavors and colors.'},
    ];

    useEffect(() => {
        setDessertsMenu(desserts);
    }, []);

    return (
        <div className="flex flex-wrap gap-5 items-center justify-center p-4 md:p-8">
            {dessertsMenu.map(data => (
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

export default Desserts;
