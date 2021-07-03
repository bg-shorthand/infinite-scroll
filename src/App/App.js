import { Route, Switch } from "react-router-dom";
import Main from "../Pages/Main";
import Read from "../Pages/Read";

function App() {
  return (
    <Switch>
      <Route path="/read/:id" component={Read} />
      <Route exact path="/" component={Main} />
    </Switch>
  );
}

export default App;
