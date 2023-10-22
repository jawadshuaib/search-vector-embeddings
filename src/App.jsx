import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import AppLayout from './ui/AppLayout';
import Search from './features/search/Search';
import PageNotFound from './features/pages/PageNotFound';

function App() {
  const queryClient = new QueryClient();

  return (
    <Router>
      <AppLayout>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </QueryClientProvider>
      </AppLayout>
    </Router>
  );
}

export default App;
