import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import AddUser from './components/AddUser';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
      <div className="App">
        <ToastContainer position='top-center'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddUser" element={<AddUser />} />
        </Routes>
      </div>
  );
}

export default App;
