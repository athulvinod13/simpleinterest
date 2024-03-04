
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>SIMPLE INTEREST CALCULATOR</h1>
          <p>Calculate simple ineterest with us</p>
        </div>
        <div className="total">
          <h2>&#8377;0</h2>
          <p>Your total interest</p>
        </div>
        <div className="form">
          
          <form action="">
            <div className='input'>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            <TextField id="outlined-basic" label="Outlined" variant="outlined" />

            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
          </form>
        </div>

      </div>

        
        
    </div>
  );
}

export default App;
