import './App.css';
import Form from './features/form/Form';
import Results from './features/results/Results';
import H1 from './ui/H1';

function App() {
  return (
    <div className="App flex min-h-screen justify-center dark:bg-slate-800">
      <div className="translate-y-1/3">
        <H1>Search Vector!</H1>

        <div className="relative w-96 max-w-lg mt-10">
          <Form />
          <Results />
        </div>
      </div>
    </div>
  );
}

export default App;
