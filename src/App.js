import "./App.css";
import Form from "./Pages/Form.js";
import user from "./data/Data.js";
import UserPage from "./Pages/UserPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form user={user} />} />
        <Route path='/userpage' element={<UserPage user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
