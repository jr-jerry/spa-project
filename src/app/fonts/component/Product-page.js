import { bgColor, productImage, productImage2 } from "@/app/assests/image";

export default function ProductPage() {
    return (
        <div className="product-page pt-20 pb-10 md:pt-40 md:pb-20 h-auto">
            <div className="product-container flex flex-col md:flex-row justify-around items-center space-x-0 md:space-x-12">
                <img 
                    src={productImage} 
                    alt="product image" 
                    className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover rounded-t-full" 
                />
                <div className="flex text-center flex-col justify-around px-4 md:px-16">
                    <h3 className="text-lg md:text-xl">Alice every moment</h3>
                    <div className="relative w-full h-full">
                        <h2 className="text-4xl md:text-6xl font-thin">Beautiful in Every moment</h2>
                        <div className="relative w-[150px] md:w-[250px] mx-auto">
                            <h1 className="text-4xl md:text-6xl font-thin relative z-10">you</h1>
                            <img
                                src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Asset-6_2-1536x379.png"
                                alt="overlay image"
                                className="absolute inset-0 w-full h-full object-cover z-0" 
                            />
                        </div>
                    </div>
                    <p className="text-sm md:text-base px-2 md:px-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    </p>
                </div>
                <img 
                    src={productImage2} 
                    alt="product image" 
                    className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] object-cover rounded-t-full" 
                />
            </div>
        </div>
    );
}
