import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PasswordAdd from "./Page/PasswordAdd";
import PasswordView from "./Page/PasswordView";

function App() {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-center items-center p-8">
      <BrowserRouter>
        <Routes>
          <Route path="/Add" element={<PasswordAdd />} />
          <Route path="/" element={<PasswordView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
