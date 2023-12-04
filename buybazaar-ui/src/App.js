

import './App.css';
import Appbar from './component/navbar/Appbar';

function App() {
  const linkArray=["Products","Services","Overview","Contact Us"];
  return (
<>
<Appbar linkArray={linkArray}/>

</>
  );
}

export default App;
