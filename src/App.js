import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Activation from './components/Activation';
import Forgotpass from './components/Forgotpass';
import Header from './components/Header';
import Login from './components/Login';
import Newpass from './components/Newpass';
import Signup from './components/Signup';

import Nav from './stackflow/Nav';
import 'bootstrap/dist/js/bootstrap.min.js'
import { UserProvider } from './stackflow/userContext';
import Userprofile from './stackflow/Userprofile';
import Questions from './stackflow/Questions';
import Allquesions from './stackflow/Allquesions';

import Viewq from './Viewq';
import Searchquestions from './stackflow/Searchquestions';
import Resetp from './components/Resetp';
import Companies from './stackflow/Companies';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
<UserProvider>
<Routes>
<Route path='/' element={<Header/>}>
  <Route index element={<Login/>}/>
  <Route path='Signup' element={<Signup/>} />
  <Route path='forgotpasscode' element={<Forgotpass/>} />
  <Route path ='newpass' element={<Newpass/>}/>
  <Route path='activation' element={<Activation/>}/>
  <Route path='passreset' element={<Resetp/>}/>
  </Route>
  <Route path='/home' element={<Nav/>}>
  <Route index element={<Allquesions/>} />
  <Route path='/home/userprofile'element={<Userprofile/>} />
  <Route path='/home/question' element={<Questions/>} />
  <Route path='/home/qview/:id' element={<Viewq/>}/>
  <Route path='/home/searchques' element={<Searchquestions/>} />
  <Route path='/home/companies' element={<Companies/>} />
  </Route>

     </Routes>

</UserProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
