import './App.css';
import Authentication from './pages/Authentication/Authentication';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Message from './pages/Message/Message';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/*" element={<Authentication />} />
          <Route path="/message" element={<Message />} />
          <Route path="/home" element={<HomePage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
