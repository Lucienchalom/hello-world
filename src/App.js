import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello/Hello';
import { Goodbye } from './components/Goodbye/Goodbye' ;
import { SayHello } from './components/SayHello/SayHello';

function App() {
  return (
    <>
      <Hello />
      <Goodbye />
      <SayHello />
    </>
  );
}

export default App;
