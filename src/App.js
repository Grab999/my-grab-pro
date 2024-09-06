import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Profile from './Components/Profile';
import Future from './Components/Future';
import Counter from './Components/Counter';
import Grab from './Components/Grab'
import Chibuike from './Components/Chibuike'
import FunctionEvent from './Components/FunctionEvent';
import ClassEvent from './Components/ClassEvent';
import FunctionalCounter from './Components/FunctionalCounter';
import ConditionalComponent from './Components/ConditionalComponent';
import Product from './Components/Product';
import Fruit from './Components/Fruit';
import Form from './Components/Form';
import Todo from './Components/Todo';


function App() {
  return (
    <div className="App">
      <Hello></Hello>
      <Message></Message>
      <Profile name ="Football" coach ="Grab"/>
      <Profile name ="vollyball" coach = "Grabmoney" />
      <Profile name ="basketball" coach ="Smooth">
        <h1>I really miss sports 💔</h1>
      </Profile>
      <Future futurecontent = "well i really appricaite the fact that i'm now leaning coding " />
      <Future futurecode = "GrabMoney" />
      <Counter />
      <Grab name = "Chibuike" lastname = "Onyeama"/>
      <Chibuike name = "Onyeama" />
      <FunctionEvent />
      <ClassEvent />
      <FunctionalCounter />
      <ConditionalComponent />
      <Product />
      <Fruit />
      <Form />
      
    </div>
  );
}

export default App;
