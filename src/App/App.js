import { Route } from "react-router-dom";
import Main from "../Pages/Main";
import Read from "../Pages/Read";

function App() {
  return (
    <>
      <Route exact path="/read" component={Read} />
      <Route exact path="/" component={Main} />
    </>
  );
}

export default App;
