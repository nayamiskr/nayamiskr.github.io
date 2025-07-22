import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './page/homepage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
