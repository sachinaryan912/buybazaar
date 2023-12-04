

import './App.css';
import Appbar from './component/navbar/Appbar';
import SimpleBottomNavigation from './footer/BottomNavigation';
import CustomPaginationActionsTable from './footer/Footer';


function App() {
  return (
    <>
      <Appbar />
      <CustomPaginationActionsTable />
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
