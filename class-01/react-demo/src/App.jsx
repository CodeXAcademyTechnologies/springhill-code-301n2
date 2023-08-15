import './App.css';
import Grid from './Grid';
import Square from './Square';

 function App() {
  return(
    <div>
      <h1>Three by Three</h1>
      <Grid />
      <Square value={'hello'}/>
      <Square value={'world'}/>
    </div>
  )
}

export default App;