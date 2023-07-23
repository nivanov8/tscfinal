import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './Components/Homepage';
import Signin from './Components/Signin';
import MyCart from './Components/MyCart';
import Checkout from './Components/Checkout';
import Signup from './Components/Signup';
import MyAccount from './Components/MyAccount';
import PickUpOrder from './Components/PickUpOrder';
import Confirmation from './Components/Confirmation';
import ItemGeneric from './Components/ItemGeneric';
import Browse from './Components/Browse';
import BrowseSpecific from './Components/BrowseSpecific';
import Chat from './Components/Chat'
import AboutUs from './Components/AboutUs';
import ConfirmationCart from './Components/ConfirmationCart';
import HomepageFR from './Components/HomepageFR';
import BrowseNational from './Components/BrowseNational';
import BrowseGloves from './Components/BrowseGloves';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/mycart" element={<MyCart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="pickuporder" element={<PickUpOrder />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/item" element={<ItemGeneric />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/browsespecific" element={<BrowseSpecific />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/confirmationcart" element={<ConfirmationCart />} />
      <Route path="/homepagefr" element={<HomepageFR />} />
      <Route path="/browsenational" element={<BrowseNational />} />
      <Route path="/browsegloves" element={<BrowseGloves />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
