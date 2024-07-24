

import {BrowserRouter ,Routes,Route} from 'react-router-dom'

import Home from './Home'
import Destination from './Destination';
import Travel from './Travel';
import HotelList from './HotelList';
import Hotel from './Hotel';
import Destinations from './Destinations';
import Travels from './Travels';
import DashboardHome from './Dashboard/DashboardHome';



function App(){
  return (
    <>
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/destination'element={<Destination/>}></Route>
      <Route path='destination/:id' element={<Destinations/>}></Route>
      <Route path='/travelpackage' element={<Travel/>}></Route>
      <Route path='/travelpackage/:id' element={<Travels/>}></Route>
      <Route path='/hotellist' element={<HotelList/>}></Route>
      <Route path='/hotellist/:id' element={<Hotel/>}> </Route>
      <Route path='/admin/*' element={<DashboardHome/>}></Route>
    </Routes>
    </BrowserRouter>
    </> 
    
    )
}
  
export default App;
