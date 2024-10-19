import { reviewImage, serviceImage1, serviceImage2, serviceImage3, serviceImage4, serviceImage5, serviceImage6 } from "@/app/assests/image";

export default function Service() {
    return (
        <div className="service-section w-full p-8 md:p-24 bg-amber-50">
            {/* Text Section */}
            <div className="text-container text-center mb-12">
                <p className="font-thin text-4xl md:text-6xl text-lime-900">Our Service</p>
                <p className="text-xl md:text-2xl text-lime-500">Lorem text here the description</p>
            </div>

            {/* Image Section */}
            <div className="image-container flex flex-wrap justify-center md:justify-between mb-12">
                {/* Service 1 */}
                <div className="image-text-container w-full md:w-[30%] mb-8 relative">
                    <img src={serviceImage1} className="h-[250px] md:h-[400px] w-full rounded-t-full object-cover" />
                    <div className="text-description absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] p-4 bg-white text-black rounded shadow-lg text-center">
                        <p className="font-semibold text-xl md:text-2xl text-lime-900">Face Scrub</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</p>
                        <button className="mt-2 px-4 py-2 text-lime-600 underline rounded">Learn more</button>
                    </div>
                </div>

                {/* Service 2 */}
                <div className="image-text-container w-full md:w-[30%] mb-8 relative">
                    <img src={serviceImage2} className="h-[250px] md:h-[400px] w-full rounded-t-full object-cover" />
                    <div className="text-description absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] p-4 bg-white text-black rounded shadow-lg text-center">
                        <p className="font-semibold text-xl md:text-2xl text-lime-900">Face Massage</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</p>
                        <button className="mt-2 px-4 py-2 text-lime-600 underline rounded">Learn more</button>
                    </div>
                </div>

                {/* Service 3 */}
                <div className="image-text-container w-full md:w-[30%] mb-8 relative">
                    <img src={serviceImage3} className="h-[250px] md:h-[400px] w-full rounded-t-full object-cover" />
                    <div className="text-description absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] p-4 bg-white text-black rounded shadow-lg text-center">
                        <p className="font-semibold text-xl md:text-2xl text-lime-900">Body Massage</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</p>
                        <button className="mt-2 px-4 py-2 text-lime-600 underline rounded">Learn more</button>
                    </div>
                </div>

                {/* Service 4 */}
                <div className="image-text-container w-full md:w-[30%] mb-8 relative">
                    <img src={serviceImage4} className="h-[250px] md:h-[400px] w-full rounded-t-full object-cover" />
                    <div className="text-description absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] p-4 bg-white text-black rounded shadow-lg text-center">
                        <p className="font-semibold text-xl md:text-2xl text-lime-900">Botox Filler</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</p>
                        <button className="mt-2 px-4 py-2 text-lime-600 underline rounded">Learn more</button>
                    </div>
                </div>

                {/* Service 5 */}
                <div className="image-text-container w-full md:w-[30%] mb-8 relative">
                    <img src={serviceImage5} className="h-[250px] md:h-[400px] w-full rounded-t-full object-cover" />
                    <div className="text-description absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] p-4 bg-white text-black rounded shadow-lg text-center">
                        <p className="font-semibold text-xl md:text-2xl text-lime-900">Pedicure</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</p>
                        <button className="mt-2 px-4 py-2 text-lime-600 underline rounded">Learn more</button>
                    </div>
                </div>

                {/* Service 6 */}
                <div className="image-text-container w-full md:w-[30%] mb-8 relative">
                    <img src={serviceImage6} className="h-[250px] md:h-[400px] w-full rounded-t-full object-cover" />
                    <div className="text-description absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] p-4 bg-white text-black rounded shadow-lg text-center">
                        <p className="font-semibold text-xl md:text-2xl text-lime-900">Face Cleanser</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris</p>
                        <button className="mt-2 px-4 py-2 text-lime-600 underline rounded">Learn more</button>
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div className="review-container flex flex-col md:flex-row items-center justify-center md:justify-start">
                <div className="image-container w-full md:w-[60%] mb-8 md:mb-0">
                    <img src={reviewImage} className="h-[400px] w-full rounded-t-full object-cover" />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start md:ml-8">
                    <div className="text-container rounded flex flex-col justify-around bg-lime-900 p-8 md:p-12 h-[300px] w-full md:w-[500px]">
                        <p className="text-2xl md:text-4xl text-white font-thin">Our Story</p>
                        <p className="text-sm md:text-xl text-white">Lorem  dolor sit amet, consectetur adipiscing elit. Mauris eu nulla vitae est luctus malesuada.</p>
                        <div>
                            <button className="rounded-[20px] bg-white px-4 py-2 text-lime-900">Read more</button>
                        </div>
                    </div>
                    <div className="review-count flex flex-col md:flex-row mt-4">
                        <div className="first-review p-4 border text-center md:flex-1">
                            <p className="text-xl md:text-2xl font-thin">955+ reviews</p>
                        </div>
                        <div className="second-review p-4 border text-center md:flex-1">
                            <p className="text-xl md:text-2xl font-thin">255+ happy customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
