import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import MagicPage from "../MagicPage/MagicPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import PrivateRoutes from "./PrivateRoutes";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import SpotDetails from "../pages/SpotDetails/SpotDetails";
import AllTouristSpots from "../pages/AllTouristSpots/AllTouristSpots";
import MyList from "../pages/MyList/MyList";
import UpdateSpot from "../pages/UpdateSpot/UpdateSpot";
import CountrySpots from "../pages/CountrySpots/CountrySpots";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/add-tourist-spot",
                element: <PrivateRoutes>
                    <AddTouristSpot></AddTouristSpot>
                </PrivateRoutes>
            },
            {
                path: "/spot-details/:id",
                element: <PrivateRoutes>
                    <SpotDetails></SpotDetails>
                </PrivateRoutes>
            },
            {
                path: "/all-tourist-spots",
                element: <AllTouristSpots></AllTouristSpots>
            },
            {
                path: "/my-list",
                element: <PrivateRoutes>
                    <MyList></MyList>
                </PrivateRoutes>
            },
            {
                path: "/update-spot/:id",
                element: <PrivateRoutes>
                    <UpdateSpot></UpdateSpot>
                </PrivateRoutes>
            },
            {
                path: "/countries/:countryName/spots",
                element: <CountrySpots></CountrySpots>
            },
            {
                path: "/magic-page",
                element: <MagicPage></MagicPage>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ]
    },
]);

export default router;