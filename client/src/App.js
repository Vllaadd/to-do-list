import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome, Vlad</h1>
      <h4>Your Task</h4>

      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>

          <div className="text">Get the bread</div>
          <div className="delete-todo">x</div>
        </div>
      </div>
    </div>
  );
}

export default App;
