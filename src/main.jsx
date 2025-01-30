import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MasterLayout from './MasterLayout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import About from './Components/About/About.jsx'
import Header from './Components/Header/Header.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Product from './Product/Product.jsx'
import PageNotFound from './Components/PageNotFound/PageNotFound.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MasterLayout />}>
      <Route path='' element={<Hero/>} />
      <Route path='header' element={<Header/>} />
      <Route path='aboutus' element={<About/>} />
      <Route path='product/:category' element={<Product/>} />
      <Route path="*" element={<PageNotFound />}
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
 <StrictMode>
  <RouterProvider router={router}/>
 </StrictMode>
)
