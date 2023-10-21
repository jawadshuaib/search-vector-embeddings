import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './ui/AppLayout';
import Search from './features/search/Search';

function App() {
  return (
    <Router>
      <AppLayout heading="Vector Search">
        <Routes>
          <Route path="/" element={<Search />} />
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
