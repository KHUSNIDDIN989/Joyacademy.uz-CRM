import MiniDrawer from "./components/sidenav/SideNaav";
import { ContextData} from "./context/ContextData";
function App() {
  return (
    <>
      <ContextData>
        <MiniDrawer />
      </ContextData>
    </>
  );
}

export default App;
