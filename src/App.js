import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import PersistentDrawerLeft from "./components/sidenav/SideNaav";
function App() {
  return (
    <>
      <Header />
      <PersistentDrawerLeft/>

      <Routes>
        <Route path="/" />
        <Route path="expenses" />
        <Route path="invoices" />
      </Routes>
    </>
  );
}

export default App;
