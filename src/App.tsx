import "./App.css";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
    <header className="2xl:w-full 2xl:mt-50 xl:mt-120 mb-40 xl:h-[100vh] flex items-center relative xl:p-7 py-0 px-2">
      <Sidebar />
      <div className="xl:w-280 h-full pb-[880px] bg-background xl:ml-[200px] ml-[70px] xl:rounded-2xl flex xl:flex-row flex-col items-start border border-main-border/70">
        <Dashboard />
        <Profile />
      </div>
    </header>
        <Footer/>
    </div>
  );
}

export default App;
