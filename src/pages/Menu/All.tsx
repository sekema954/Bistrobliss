import { useState, useEffect } from 'react';
// Importing images
import eggs from '../../assets/images/icons/eggs.png';
import pizza from '../../assets/images/icons/pizzaa.png';
import cocktail from '../../assets/images/icons/cocktail.png';
import cake from '../../assets/images/icons/cakee.png';
import lemonade1 from '../../assets/images/icons/lemonade.png';
import icecream from '../../assets/images/icons/icecream.png';
import burger from '../../assets/images/icons/burgerr.png';

// Breakfast items
import waffles from '../../assets/images/icons/waffles.png';
import pancakes from '../../assets/images/icons/pancakes.jpg';
import omlette from '../../assets/images/icons/omlette.jpg';
import toast from '../../assets/images/icons/toast.jpg';
import burrito from '../../assets/images/icons/burrito.jpg';
import parfait from '../../assets/images/icons/parfait.jpg';
import goldtoast from '../../assets/images/icons/goldtoast.webp';
import salmon from '../../assets/images/icons/salmon.jpg';
import smoothiebowl from '../../assets/images/icons/smoothiebowl.jpeg';

// Dessert items
import chocolateCake from '../../assets/images/icons/chocalate-cake.avif';
import applePie from '../../assets/images/icons/apple-pie.webp';
import cheesecake from '../../assets/images/icons/cheesecake.jpg';
import brownie from '../../assets/images/icons/brownie.jpeg';
import iceCream from '../../assets/images/icons/icecream.jpg';
import tiramisu from '../../assets/images/icons/tiramisu.jpeg';
import pudding from '../../assets/images/icons/pudding.jpg';
import macarons from '../../assets/images/icons/macarons.jpg';

// Drink items
import coffee from '../../assets/images/icons/coffee.jpg';
import orangeJuice from '../../assets/images/icons/orangejuice.jpeg';
import smoothie from '../../assets/images/icons/smoothie.jpg';
import greenTea from '../../assets/images/icons/greentea.webp';
import cappuccino from '../../assets/images/icons/cappuccino.jpg';
import icedTea from '../../assets/images/icons/icedtea.jpg';
import mojito from '../../assets/images/icons/mojito.jpeg';

// Main dishes
import grilledChicken from '../../assets/images/icons/grilledchicken.jpg';
import beefSteak from '../../assets/images/icons/beefsteak.webp';
import pastaAlfredo from '../../assets/images/icons/pastaAlfredo.jpg';
import fishTacos from '../../assets/images/icons/fishTacos.jpg';
import vegetableStirFry from '../../assets/images/icons/vegetableStirFry.jpeg';
import lambChops from '../../assets/images/icons/lambChops.jpeg';
import pizzaMargherita from '../../assets/images/icons/pizzaMargherita.avif';
import shrimpPaella from '../../assets/images/icons/shrimpPaella.jpg';

function All() {
    // Interface for menu items
    interface Prop {
        id: number;
        icon: string;
        price: number;
        title: string;
        desc: string;
    }

    // State for all menu items
    const [allMenu, setAllMenu] = useState<Prop[]>([]);
    // Pagination state
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 8;

    // Array of all menu items
    const AllMenu = [
        {id: 1, icon: eggs, price: 9.99, title:'Fried Eggs', desc: 'Made with eggs, lettuce, salt, oil and other ingredients.'},
        {id: 2, icon: pizza, price: 15.99, title:'Hawaiian Pizza', desc: 'Made with eggs, lettuce, salt, oil and other ingredients.'},
        {id: 3, icon: cocktail, price: 7.25, title:'Martinez Cocktail', desc: 'Made with eggs, lettuce, salt, oil and other ingredients.'},
        {id: 4, icon: cake, price: 20.99, title:'Butterscotch Cake', desc: 'Made with eggs, lettuce, salt, oil and other ingredients.'},
        {id: 5, icon: lemonade1, price: 5.89, title:'Mint Lemonade', desc: 'Made with eggs, lettuce, salt, oil and other ingredients.'},
        {id: 6, icon: icecream, price: 18.05, title:'Chocolate Icecream', desc: 'Made with eggs, lettuce, salt, oil and other ingredients.'},
        {id: 7, icon: burger, price: 12.55, title:'Cheese Burger', desc: 'Made with eggs, lettuce, salt, oil and other ingredients.'},
        {id: 8, icon: waffles, price: 12.99, title:'Classic Waffles', desc: 'Made with eggs, lettuce, salt, oil and other ingredients.'},
        {id: 9, icon: pancakes, price: 5.99, title: 'Classic Pancakes', desc: 'Fluffy pancakes topped with butter and drizzled with maple syrup.'},
        {id: 10, icon: omlette, price: 7.49, title: 'Veggie Omelette', desc: 'A three-egg omelette filled with bell peppers, onions, mushrooms, and cheese.'},
        {id: 11, icon: toast, price: 6.99, title: 'Avocado Toast with Egg', desc: 'Sourdough toast topped with mashed avocado, poached egg, and chili flakes.'},
        {id: 12, icon: burrito, price: 8.49, title: 'Hearty Breakfast Burrito', desc: 'A warm tortilla filled with scrambled eggs, crispy bacon, cheese, and fresh salsa.'},
        {id: 13, icon: parfait, price: 4.99, title: 'Fresh Fruit Parfait', desc: 'Layers of creamy Greek yogurt, crunchy granola, and seasonal fresh fruits.'},
        {id: 14, icon: goldtoast, price: 6.49, title: 'Golden French Toast', desc: 'Thick slices of French toast, dusted with powdered sugar and served with fresh berries.'},
        {id: 15, icon: salmon, price: 9.99, title: 'Bagel with Smoked Salmon', desc: 'Toasted bagel topped with cream cheese, smoked salmon, capers, and red onion.'},
        {id: 16, icon: smoothiebowl, price: 7.99, title: 'Berry Smoothie Bowl', desc: 'A refreshing acai bowl topped with granola, banana, blueberries, and a drizzle of honey.'},
        {id: 17, icon: chocolateCake, price: 6.50, title: 'Chocolate Cake', desc: 'Rich and moist chocolate cake topped with creamy frosting.'},
        {id: 18, icon: applePie, price: 5.25, title: 'Classic Apple Pie', desc: 'Warm apple pie with a buttery, flaky crust and a hint of cinnamon.'},
        {id: 19, icon: cheesecake, price: 7.99, title: 'New York Cheesecake', desc: 'Creamy cheesecake with a graham cracker crust and berry topping.'},
        {id: 20, icon: brownie, price: 3.75, title: 'Fudgy Brownie', desc: 'Decadent brownie with a gooey center and a crispy top.'},
        {id: 21, icon: iceCream, price: 4.50, title: 'Vanilla Ice Cream', desc: 'Classic vanilla ice cream served with a waffle cone.'},
        {id: 22, icon: tiramisu, price: 6.25, title: 'Tiramisu', desc: 'Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.'},
        {id: 23, icon: pudding, price: 3.00, title: 'Chocolate Pudding', desc: 'Smooth and creamy chocolate pudding topped with whipped cream.'},
        {id: 24, icon: macarons, price: 5.75, title: 'French Macarons', desc: 'Delicate French macarons with a variety of flavors and colors.'},
        {id: 25, icon: coffee, price: 3.50, title: 'Classic Coffee', desc: 'Rich and aromatic coffee brewed to perfection.'},
        {id: 26, icon: orangeJuice, price: 4.25, title: 'Fresh Orange Juice', desc: 'Refreshing freshly squeezed orange juice.'},
        {id: 27, icon: smoothie, price: 5.99, title: 'Strawberry Banana Smoothie', desc: 'A delicious blend of fresh strawberries and bananas.'},
        {id: 28, icon: greenTea, price: 3.00, title: 'Green Tea', desc: 'Calming and healthy green tea with a hint of honey.'},
        {id: 29, icon: cappuccino, price: 4.50, title: 'Creamy Cappuccino', desc: 'A perfect balance of espresso, steamed milk, and foam.'},
        {id: 30, icon: lemonade1, price: 3.75, title: 'Classic Lemonade', desc: 'Cool and tangy lemonade, freshly squeezed.'},
        {id: 31, icon: icedTea, price: 4.00, title: 'Iced Peach Tea', desc: 'Chilled tea with a sweet peach flavor.'},
        {id: 32, icon: mojito, price: 5.25, title: 'Mint Mojito', desc: 'A refreshing cocktail with mint leaves, lime, and soda.'},
        {id: 33, icon: beefSteak, price: 19.50, title: 'Beef Steak', desc: 'Tender and flavorful beef steak cooked to your preference.'},
        {id: 34, icon: pastaAlfredo, price: 14.25, title: 'Pasta Alfredo', desc: 'Creamy Alfredo pasta with a touch of Parmesan cheese.'},
        {id: 35, icon: fishTacos, price: 10.75, title: 'Fish Tacos', desc: 'Soft tortillas filled with crispy fish, fresh slaw, and zesty sauce.'},
        {id: 36, icon: vegetableStirFry, price: 9.50, title: 'Vegetable Stir-Fry', desc: 'A colorful mix of stir-fried vegetables with a light soy sauce.'},
        {id: 37, icon: lambChops, price: 22.00, title: 'Lamb Chops', desc: 'Succulent lamb chops grilled with herbs and served with a side of potatoes.'},
        {id: 38, icon: pizzaMargherita, price: 11.00, title: 'Pizza Margherita', desc: 'Classic Margherita pizza with fresh mozzarella, tomatoes, and basil.'},
        {id: 39, icon: shrimpPaella, price: 17.99, title: 'Shrimp Paella', desc: 'Traditional Spanish paella with shrimp, rice, and vegetables.'},
        {id: 40, icon: grilledChicken, price: 12.99, title: 'Grilled Chicken', desc: 'Juicy grilled chicken breast seasoned to perfection.'},
        // Additional items...
    ];

    // Set menu data on component mount
    useEffect(() => {
        setAllMenu(AllMenu);
    }, []);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = allMenu.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allMenu.length / itemsPerPage);

    // Render items for current page
    const renderItems = () => {
        return currentItems.map((data) => (
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
        ));
    };

    // Change page
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Render pagination buttons
    const renderPagination = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`w-[50px] h-[35px] border ${
                        currentPage === i ? 'bg-white text-red-500' : 'bg-red-800 text-white'
                    } rounded-md mx-1 hover:bg-red-600 hover:text-white transition duration-200`}
                >
                    {i}
                </button>
            );
        }
        return <div className="flex justify-center mt-6">{buttons}</div>;
    };

    return (
        <div>
            <div className="flex flex-wrap gap-5 items-center justify-center p-4 md:p-8">
                {renderItems()}
            </div>
            {renderPagination()}
        </div>
    );
}

export default All;
