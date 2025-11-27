import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route }from 'react-router-dom';
import AdminRouter from './Modules/Admin/ARoutes/AdminRouter'
import UserRouter from './Modules/User/URoutes/UserRouter'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path="/admin/*" element={<AdminRouter/>}/>
        <Route path="/*" element={<UserRouter/>}/>


      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
