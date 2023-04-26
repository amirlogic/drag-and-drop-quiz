
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppSymbolSort from './AppSymbolSort';
import AppWordSymbolCombination from './AppWordSymbolCombination';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" Component={AppSymbolSort} />
          <Route path="/app-word-symbol-combination" Component={AppWordSymbolCombination} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
