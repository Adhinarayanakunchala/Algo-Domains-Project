import React from 'react'
import GetProduct from './pages/GetProduct';
import GetProducts from './pages/GetProducts';
import Nav from './compo/Nav';
import {Routes,Route} from 'react-router-dom'
import AddProduct from './pages/AddProduct';
import DeleteProduct from './pages/DeleteProduct';


function App() {
  return (
 <div>
  <Nav/>

   <Routes>

    <Route path="/getproducts" element={<GetProducts/>}></Route>
    <Route path="/getproduct" element={<GetProduct/>}></Route>
    <Route path="/addproduct" element={<AddProduct/>}></Route>
    <Route path="/deleteproduct" element={<DeleteProduct/>}></Route>

   </Routes>
    </div>
  )
}

export default App;





