

import {BrowserRouter ,Routes,Route} from 'react-router-dom'

import Signin from './Signin';
import Signup from './Signup'
import Home from './Home'
import Destination from './Destination';
import Travel from './Travel';
import Hotel from './Hotel';



function App(){
  return (
    <>
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<Home/>}></Route>
      <Route path='/destination'element={<Destination/>}></Route>
      <Route path='/travel package' element={<Travel/>}></Route>
      <Route path='/hotels' element={<Hotel/>}></Route>
    </Routes>
    </BrowserRouter>
    </> 
    
    )
}
  
export default App;
