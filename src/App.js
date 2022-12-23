import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import SideNav from './components/common/SideNav';
import CourseList from './pages/CourseList';
import Home from './pages/Home';

export const App = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div className='App'>
      <Header toggleNav={() => setShowSideNav(!showSideNav)} />
      <SideNav show={showSideNav} setShow={setShowSideNav} />
      <main className='mx-4 sm:mx-auto w-full' data-testid='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='courses' element={<CourseList />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
