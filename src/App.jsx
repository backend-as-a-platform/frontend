import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/Routes/Home';

const App = () => {
  return (
    <div className="mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-14 overflow-clip">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
