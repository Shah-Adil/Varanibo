import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css"
import Home  from "./pages/Home";
import Header from './pages/Header'
import Footer from './pages/Footer'

// Hotel
import Hotel  from "./pages/hotel/Hotel";
import HotelPage from "./pages/hotel/HotelPage";

// HouseRent 
import HouseRent from './pages/HouseRent/HouseRent'
import HouseRentPage from './pages/HouseRent/HouseRentPage'


// party 
import Party from './pages/Party/Party'
import PartyPage from './pages/Party/PartyPage'

// EventMan 
import EventMan from './pages/EventMan/EventMan'
import EventManPage from './pages/EventMan/EventManPage'

// EventPhoto
import EventPhoto from './pages/EventPhoto/EventPhoto'
import EventPhotoPage from './pages/EventPhoto/EventPhotoPage'

// EventChecf
import EventChecf from './pages/EventChecf/EventChecf'
import EventChecfPage from './pages/EventChecf/EventChecfPage'

// Furniture
import Furniture from './pages/Furniture/Furniture'
import FurniturePage from './pages/Furniture/FurniturePage'

// Plant

import Plant from './pages/Plant/Plant'
import PlantPage from './pages/Plant/PlantPage'

// Sharwani
import Sharwani from './pages/Sharwani/Sharwani'
import SharwaniPage from './pages/Sharwani/SharwaniPage'

// Vehicle
import Vehicle from './pages/Vehicle/Vehicle'
import VehiclePage from './pages/Vehicle/VehiclePage'

// Rent
import Rent from './pages/Rent/Rent'
import RentPage from './pages/Rent/RentPage'

// Com
import Com from './pages/Com/Com'
import ComPage from './pages/Com/ComPage'

// Indoor
import Indoor from './pages/Indoor/Indoor'
import IndoorPage from './pages/Indoor/IndoorPage'

import AddSlider from "./pages/AddSlider";


import {   Routes , Route , useLocation } from "react-router-dom";

// admin 
import Admin from './Admin/Admin'
import HeaderAdmin from './Admin/HeaderAdmin'
import Booking from './Admin/Booking'
import CreatePost from './Admin/CreatePost'
import SubHeader from './Admin/SubHeader'
import Login from './Admin/Login'
import NewAccount from './Admin/NewAccount'









function App() {

  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
   

        
        <div className='wrapper'>
          <Routes>

            <Route path="/" element={<><Home/> <div className="container mt-4"><AddSlider/></div>  <Footer /></>} /> 


            <Route path="/hotel" element={<><Header /><Hotel/> <div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/hotel/page"  element={<><Header /><HotelPage/> <div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/houserent" element={<><Header /><HouseRent/> <div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/houserent/page"  element={<><Header /><HouseRentPage/> <div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/party" element={<><Header /><Party/> <div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/party/page"  element={<><Header /><PartyPage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/EventMan" element={<><Header /><EventMan/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/EventMan/page"  element={<><Header /><EventManPage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/EventPhoto" element={<><Header /><EventPhoto/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/EventPhotoPage/page"  element={<><Header /><EventPhotoPage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/EventChecf" element={<><Header /><EventChecf/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/EventChecf/page"  element={<><Header /><EventChecfPage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/Furniture" element={<><Header /><Furniture/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/Furniture/page"  element={<><Header /><FurniturePage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/Plant" element={<><Header /><Plant/><div className="container-xl mt-4"><AddSlider/></div>  <Footer /></>} />
            <Route path="/Plant/page"  element={<><Header /><PlantPage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/Sharwani" element={<><Header /><Sharwani/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/Sharwani/page"  element={<><Header /><SharwaniPage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/Vehicle" element={<><Header /><Vehicle/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/Vehicle/page"  element={<><Header /><VehiclePage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/Rent" element={<><Header /><Rent/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/Rent/page"  element={<><Header /><RentPage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/Com" element={<><Header /><Com/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/Com/page"  element={<><Header /><ComPage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/Indoor" element={<><Header /><Indoor/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />
            <Route path="/Indoor/page"  element={<><Header /><IndoorPage/><div className="container-xl mt-4"><AddSlider/></div> <Footer /></>} />

            <Route path="/Admin" element={<><HeaderAdmin /> <SubHeader/> <Admin/> <Footer /></>} />
            <Route path="/Booking" element={<><HeaderAdmin /> <SubHeader/> <Booking/> <Footer /></>} />
            <Route path="/Create" element={<><HeaderAdmin /><CreatePost/> <Footer /></>} />
            
 



          </Routes>
        </div>
        

          <Routes>
            <Route path="/Login" element={<><Login/></>} />
            <Route path="/NewAccount" element={<><NewAccount/></>} />

          </Routes>
      
        

       


      

     
    </>
  )
}

export default App
