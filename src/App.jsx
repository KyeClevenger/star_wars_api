import './App.css';
import {Route, Routes} from 'react-router-dom'
import Form from './components/Form'
import Landing from './views/Landing'
import People from './components/People'
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">
    <h1>Star Wars Api</h1>
    <Form />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/people/:id' element={<People />} />
      <Route path='/planets/:id' element={<Planet />} />
    </Routes>
    </div>
  );
}

export default App;
