

import './App.css';
import Carousel from './component/Carousel';
import Appbar from './component/navbar/Appbar';
import SimpleBottomNavigation from './footer/BottomNavigation';
import CustomPaginationActionsTable from './footer/Footer';


function App() {
  return (
    <>
      <Appbar />
      <Carousel />
      <CustomPaginationActionsTable />
   
    </>
  );
}

export default App;
