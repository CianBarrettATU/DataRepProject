import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Content from './components/content';
import Create from './components/create';
import Read from './components/read';

function App() {
  return (
   <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Content />}/>
      <Route path="/create" element={<Create />}/>
      <Route path="/read" element={<Read />}/>
    </Routes>
   </Router> 
  );
}

export default App;
