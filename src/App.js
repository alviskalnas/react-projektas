import { Route, Routes, Link } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.js';
import ProgramsPage from './components/ProgramsPage/ProgramsPage.js';
import NewsPage from './components/NewsPage/NewsPage.js';
import './components/NewsPage/newpage.css';
import CounterPage from './components/pages/CounterPage';
import Cars from './components/pages/cars'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
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
          </ul>
        } />
        <Route path='/' element={<MainPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/pages' element={<CounterPage/>} />
        <Route path='/main-page' element={<MainPage />} />
        <Route path='/cars' element={<Cars/>} />
        <Route path='*' element={
          <div>
            <h1>404 error. Page not found</h1>
            <Link to='/'>Back to Home page</Link>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;










































// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
