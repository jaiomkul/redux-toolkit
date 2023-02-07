import "./App.css";
import { Counter } from "./Components/Pages/Counter";
import { FormData } from "./Components/Pages/Form";
import { Post } from "./Components/Pages/Post";
import { MyForm } from "./Redux/New";

function App() {
  return (
    <div className="App">
      <MyForm></MyForm>
    </div>
  );
}

export default App;
