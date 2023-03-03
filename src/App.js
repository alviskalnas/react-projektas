import { BrowserRouter as Router, Routes,  Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.js';
import ProgramsPage from './components/ProgramsPage/ProgramsPage.js';
import NewsPage from './components/NewsPage/NewsPage.js';
import './components/NewsPage/newpage.css';
import CounterPage from './components/pages/CounterPage';
import Cars from './components/pages/cars'
import ShoppingList from './components/pages/shopping-page';
import ToDoList from './components/pages/to-do-list.js';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to='/main-page'>CodeAcademy Project</Link>
          </li>
          <li>
            <Link to='/'>Contacts Project</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/programs">Programs</Link>
          </li>
          <li>
            <Link to='/pages'>Counter</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
              <Link to="/shopping-page">Shopping Page</Link>
          </li>
          <li>
            <Link to="/to-do-list">To Do List</Link>
          </li>
        </ul>
        <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/pages' element={<CounterPage />} />
        <Route path='/main-page' element={<MainPage />} />
        <Route path='/cars' element={<Cars />} />
        <Route path="/shopping-page" element={<ShoppingList />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path='*' element={
          <div>
            <h1>404 error. Page not found</h1>
            <Link to='/'>Back to Home page</Link>
          </div>
        } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

