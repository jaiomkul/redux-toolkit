import "./App.css";
import { Counter } from "./Components/Pages/Counter";
import { FormData } from "./Components/Pages/Form";
import { MyForm } from "./Components/Pages/New";
import { Post } from "./Components/Pages/Post";

function App() {
  return (
    <div className="App">
      <FormData></FormData>
      <Post></Post>
      <Counter></Counter>
      <MyForm></MyForm>
    </div>
  );
}

export default App;
