import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<h1>Dashboard Page</h1>} />

        <Route path="Transactions" element={<h1>Transactions Page</h1>} />

        <Route path="Reports" element={<h1>Reports Page</h1>} />

        <Route path="Categories" element={<h1>Categories Page</h1>} />

        <Route path="Settings" element={<h1>Settings Page</h1>} />

      </Route>
    </Routes>

    
  );
}

export default App;