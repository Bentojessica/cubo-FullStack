import Home from "./Page/Home/Home"
import GlobalState from "./contexts/Global/GlobalState"
function App() {
  return (
    <div>
      <GlobalState>
      <Home/>
      </GlobalState>
    </div>
  );
}

export default App;
