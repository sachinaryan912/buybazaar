

import './App.css';
import Carousel from './component/Carousel';
import Appbar from './component/navbar/Appbar';
import Appbar2 from './component/navbar/Appbar2';
import SimpleBottomNavigation from './footer/BottomNavigation';

import CustomPaginationActionsTable from './footer/Footer';
import ProductList from './pages/Products';


function App() {
  const linkArray=["Men", "Women", "Kids", "Home & Decor", "Electronics & Appliances", "Others"];
  return (
    <>
      {/* <Appbar /> */}
      <Appbar2 linkArray={linkArray}/>
      <Carousel />
      <ProductList />
      <CustomPaginationActionsTable />
      <SimpleBottomNavigation/>
   
    </>
  );
}


export default App;
