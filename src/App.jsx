import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import AppLayout from './ui/AppLayout';
import Search from './features/search/Search';
import PageNotFound from './features/pages/PageNotFound';
import { Toaster } from 'react-hot-toast';

function App() {
  const queryClient = new QueryClient();

  return (
    <Router>
      <Provider store={store}>
        <AppLayout>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </QueryClientProvider>
        </AppLayout>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            error: { duration: 5000 },
          }}
        />
      </Provider>
    </Router>
  );
}

export default App;
