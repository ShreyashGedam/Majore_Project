
import { Routes, Route } from 'react-router-dom'
import { Cart } from '../pages/cart'
import { Home } from '../pages/home'
import { Login } from '../pages/login'
import { Products } from '../pages/products'
import { Signup } from '../pages/signup'
import { Product } from '../pages/singleproduct'
import { Private } from './privateroutes'

export const Allroutes = () => {
    return (
        <div>  
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/products' element={<Products></Products>}></Route>
                <Route path='/products/:userId/:id' element={<Private><Product></Product></Private>}></Route>
                <Route path='/cart' element={<Private><Cart></Cart></Private>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<Signup></Signup>}></Route>
            </Routes>
        </div>
    )
}