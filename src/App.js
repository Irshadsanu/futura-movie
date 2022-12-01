import Navbar from './Components/NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import Action from './Components/Category/Action'
import Comedy from './Components/Category/Comedy'
import Documentaries from './Components/Category/Documentaries'
import Horror from './Components/Category/Horror'
import Normals from './Components/Category/Normals'
import Romance from './Components/Category/Romance'
import {Route,Routes} from 'react-router-dom'
import Footer from './Components/Footer'



function App() {
  return (
    <div className="App">
          <Navbar />
     <Routes>
         <Route element = { <Banner/>} path='/'></Route>
         <Route element = { <Action />}path='/theatres'></Route>
         <Route element = { <Comedy/>} path='/comedy'></Route>
         <Route element = { <Documentaries/>} path='/science'></Route>
         <Route element = { <Horror />}path='/drama'></Route>
         <Route element = { <Normals/>} path='/kids'></Route>
         <Route element = { <Romance/> }path='/highrated'></Route>
      </Routes>  
          <Footer/>
    </div>
  );
}

export default App;
