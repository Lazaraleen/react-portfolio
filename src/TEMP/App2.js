import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './sections/navbar';
import RoutesReact from './routes/routes';

function App() {
  return (
    <BrowserRouter>
    <main>
      <div className="barNav">
        <NavBar />
      </div>
      <div className="page">
        <RoutesReact />
      </div>
    </main>
    </BrowserRouter>
  );
}

export default App;