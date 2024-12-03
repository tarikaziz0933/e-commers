import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/eCommerse image/banner_1_1.webp"
import img2 from "../../assets/eCommerse image/banner_1_3.webp"
import img3 from "../../assets/eCommerse image/banner_2_1.webp"

const Banner = () => {
    return (
        <Carousel>
            <div>
                <div className="absolute flex flex-col mt-8 pt-8 ml-7">
                    <h1 className="text-7xl font-bold">Gaming Headset</h1>
                    <h1 className="text-7xl font-bold">Brilliant Light Effect</h1>
                    <p className="text-4xl">Wireless TV connection</p>
                </div>
                <img src={img1} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <div className="absolute flex flex-col text-7xl font-bold mt-8 pt-8 ml-7">
                    <h1 className="text-7xl font-bold">Gaming Headset</h1>
                    <h1 className="text-7xl font-bold">Brilliant Light Effect</h1>
                    <p className="text-4xl">Wireless TV connection</p>
                </div>
                <img src={img2} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <div className="absolute flex flex-col text-7xl font-bold mt-8 pt-8 ml-7">
                    <h1 className="text-7xl font-bold">Gaming Headset</h1>
                    <h1 className="text-7xl font-bold">Brilliant Light Effect</h1>
                    <p className="text-4xl">Wireless TV connection</p>
                </div>
                <img src={img3} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;