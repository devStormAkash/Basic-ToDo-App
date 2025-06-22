import { useState } from "react";
import SideBar from "./components/SideBar.jsx";
import ToDo from "./components/ToDo.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen  flex gap-0 overflow-hidden">
        <SideBar />
        <ToDo />
      </div>
    </>
  );
}

export default App;
