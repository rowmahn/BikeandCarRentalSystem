
import './App.css';
import './CSS/main.css'
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header></Header>

        <Body></Body>

        <Footer></Footer>

        

      
    </div>
    </BrowserRouter>
  );
}

export default App;
