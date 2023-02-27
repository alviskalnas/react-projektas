
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header.js';
import MainPage from './components/MainPage/MainPage.js';
import ProgramsPage from './components/ProgramsPage/ProgramsPage.js';
import NewsPage from './components/NewsPage/NewsPage.js';
import Footer from './components/Footer/Footer.js'
import './components/NewsPage/newpage.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='*' element={
          <div>
            <h1>404 error. Page not found</h1>
            <Link to='/'>Back to Home page</Link>
          </div>
        } />
      </Routes>
      <Footer/>
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
