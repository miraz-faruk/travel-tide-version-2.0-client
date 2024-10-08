import { Link } from "react-router-dom";
import Slider from "../Shared/Slider/Slider";
import TouristSpots from "../Shared/TouristSpots/TouristSpots";
import Countries from "../Shared/Countries/Countries";

const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
            <Slider></Slider>
            <TouristSpots></TouristSpots>
            {/* Magic page button */}
            <div className="flex justify-center mt-10">
                <Link to="/magic-page">
                    <button className="btn btn-outline btn-error">Click here to see the magic</button>
                </Link>
            </div>
            <Countries></Countries>
        </div>
    );
};

export default Home;