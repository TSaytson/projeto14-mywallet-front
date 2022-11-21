import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ResetCss } from './ResetCss'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import Registry from './components/registry';
import Transaction from './components/transaction'

function App() {
  return (
    <BrowserRouter>
      <ResetCss />
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/Sign-Up' element={<SignUp />} />
        <Route path='/Registry' element={<Registry />} />
        <Route path='/Transaction' element={<Transaction />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
