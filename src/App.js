import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from './pages/list/List'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // const [showData, setShowData] = useState("true");




  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
