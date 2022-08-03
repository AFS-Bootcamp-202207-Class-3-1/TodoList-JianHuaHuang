import './App.css';
import TodoList from './features/todoList/TodoList';
import Layout from './layout/Layout';
import {Route,Routes} from "react-router-dom"
import HelpPage from './pages/HelpPage';
import DonePage from './pages/DonePage';
import NoFoundPage from './pages/NoFoundPage';

function App() {
  return (
    <div className="App">
        {/* <h1>
          TodoList
        </h1> */}
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route  index element={<TodoList/>}></Route>
            <Route path='help' element={<HelpPage/>}></Route>
            <Route path='done' element={<DonePage/>}></Route>
            <Route path='*' element={<NoFoundPage/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
