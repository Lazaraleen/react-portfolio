import { Routes, Route} from 'react-router-dom';
import Home from '../sections/home';
import Skills from '../sections/skills';


function RoutesReact() {
  return (
      <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
                  
          {/* Renvoie à la page Home si une mauvaise route est tapée */}
          <Route path='/*' element={<Home />} />

      </Routes>
  );
}

export default RoutesReact;