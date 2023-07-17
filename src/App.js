import './App.css';
import Navbar from './components/navbar';
import {Routes,Route} from 'react-router-dom'
import Settings from './routes/settings';
import Workspaces from './routes/workspaces';
import Reports from './routes/reports';

function App() {
  return (
    <div className="flex flex-row bg-gray-100 w-full h-screen overflow-x-hidden font-Inter">
      <Navbar />
      <div className='w-[calc(100vw-246px)] h-full flex flex-col'>
        <Routes>
          <Route path='/' element={<Workspaces />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
