import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './components/Header';
import Strcture from './Pages/Strcture';
import Exp1 from './Pages/Exp1';
import Exp2 from './Pages/Exp2';
import Exp3 from './Pages/Exp3';
import Exp4 from './Pages/Exp4';
import Exp5 from './Pages/Exp5';
import Exp6 from './Pages/Exp6';
import Exp7 from './Pages/Exp7';
import Exp8 from './Pages/Exp8';
import Cider from './Pages/Cider';
import LabFinal from './Pages/LabFinal';
import DrKhalid from './Pages/DrKhalid';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <div className="pages " style={{ marginTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Exp1 />} />
            <Route path="/Exp1" element={<Exp1 />} />
            <Route path="/Exp2" element={<Exp2 />} />
            <Route path="/Exp3" element={<Exp3 />} />
            <Route path="/Exp4" element={<Exp4 />} />
            <Route path="/Exp5" element={<Exp5 />} />
            <Route path="/Exp6" element={<Exp6 />} />
            <Route path="/Exp7" element={<Exp7 />} />
            <Route path="/Exp8" element={<Exp8 />} />
            <Route path="/Cider" element={<Cider />} />
            <Route path="/LabFinal" element={<LabFinal />} />
            <Route path="/DrKhalid" element={<DrKhalid />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
