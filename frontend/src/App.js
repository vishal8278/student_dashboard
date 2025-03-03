import Navbar from './component/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Alert from './component/Alert';
import Login from './component/Login';
import Signup from './component/Signup';
import { useState } from 'react';

function App() {
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  return (
    <> 
{/* <NoteState> */}
      <Router>
      <Navbar />
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
        <Route path='/login' element={<Login showalert={showalert}/>} />
        <Route path='/signup' element={<Signup showalert={showalert}/>} />
      </Routes> 
      </div>
    </Router>
{/* </NoteState> */}
    </>
  );
}

export default App;
