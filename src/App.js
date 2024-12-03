import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Content from './components/content';
function App() {
  return (
   <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Content />}/>
    </Routes>
   </Router> 
  );
}

export default App;
