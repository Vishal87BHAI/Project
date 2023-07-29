import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Addstudent from "./component/Addstudent";
import AddTeacher from "./component/AddTeacher";
import Editstudent from "./component/Editstudent";
import Editteacher from "./component/Editteacher";
import Error from "./component/Error";
import Home from "./component/Home";
import Login from "./component/jaggi-don/Login";
import LoginForm from "./component/jaggi-don/LoginForm";
import Navbarcomp from "./component/Navbarcomp";
import Students from "./component/Students";
import Studentview from "./component/Studentview";
import Teachers from "./component/Teachers";
import Teacherviewform from "./component/Teacherviewform";

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
        <div style={{ height: "5%" }}>
          <Navbarcomp />
        </div>
        <div style={{ height: "95%", marginTop: "3rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Teachers" element={<Teachers />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Teacherviewform/:id" element={<Teacherviewform />} />
            <Route path="/Studentview/:id" element={<Studentview />} />
            <Route path="/Addstudent" element={<Addstudent />} />
            <Route path="/AddTeacher" element={<AddTeacher />} />
            <Route path="/Editteacher/:id" element={<Editteacher />} />
            <Route path="/Editstudent/:id" element={<Editstudent />} />
            <Route path="/Jaggi" element={<LoginForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
