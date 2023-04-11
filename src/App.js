import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Profile, Setting, Notification, Header } from "./components";
import SideNav from "./components/sidenav/SideNav";
import Context from "./db/Context";

function App() {
  return (
    <div className="App">
      <Context>
        {/* <Home /> */}
        <BrowserRouter>
          <Header />
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="setting" element={<Setting />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notification" element={<Notification />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
