import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Dashboard/>} />

        <Route path="Transactions" element={<h1>Transactions Page</h1>} />

        <Route path="Reports" element={<h1>Reports Page</h1>} />

        <Route path="Categories" element={<Categories/>} />

        <Route path="Settings" element={<h1>Settings Page</h1>} />

      </Route>
    </Routes>

    
  );
}

export default App;