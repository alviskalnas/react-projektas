import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.js';
import ProgramsPage from './components/ProgramsPage/ProgramsPage.js';
import NewsPage from './components/NewsPage/NewsPage.js';
import CounterPage from './components/pages/CounterPage';
import Cars from './components/pages/cars/cars'
import ShoppingList from './components/pages/shoping/shoping-page';
import ToDoList from './components/pages/todo/to-do-list.js';
import StudentPage from './components/Student/student-page.js';
import Cat from './components/APIpage/API-page.js';
import Bored from './components/APIpage/bored.js';
import Coinbase from './components/APIpage/coinbase.js';
import Navigation from './components/Navigation/navigation.js';
import FakeAccount from './components/APIpage/fake-acc.js'
import NewApi from './components/APIpage/new-API.js';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/MainPage' element={<MainPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/pages' element={<CounterPage />} />
        <Route path='/main-page' element={<MainPage />} />
        <Route path='/cars' element={<Cars />} />
        <Route path="/shopping-page" element={<ShoppingList />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/student-page" element={<StudentPage />} />
        <Route path="/API-page" element={<Cat />} />
        <Route path="/bored" element={<Bored />} />
        <Route path="/coinbase" element={<Coinbase />} />
        <Route path="/fake-acc" element={<FakeAccount />} />
        <Route path="new-API" element={<NewApi />} />
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


