import { Route, Routes } from 'react-router-dom'


import Home from './screen/Home'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
