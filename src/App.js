
import './App.css';
import './CSS/main.css'
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header'
import Body from './Body/Body'


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header></Header>

        <Body></Body>

        

      
    </div>
    </BrowserRouter>
  );
}

export default App;
