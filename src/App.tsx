import "./App.css";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="2xl:w-full xl:h-screen flex items-center relative xl:p-7 py-0 px-2">
      <Sidebar />
      <div className="xl:w-280 h-full bg-background xl:ml-[200px] ml-[70px] xl:rounded-2xl flex xl:flex-row flex-col items-start border border-main-border/70">
        <Dashboard />
        <Profile />
      </div>
    </div>
  );
}

export default App;
