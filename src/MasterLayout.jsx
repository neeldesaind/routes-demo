import {Outlet} from 'react-router'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function MasterLayout() {
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MasterLayout
