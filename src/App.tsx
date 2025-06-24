import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className='w-full xl:h-screen flex items-center relative xl:p-7 py-0 px-2'>
      <div className="h-full xl:w-[calc(100%-250px)] w-[calc(100%-80px)] bg-background xl:ml-17.5 xl:rounded-2xl flex xl:flex-row flex-col items-start border border-main-border/70">
      <Sidebar/>
      </div>
    </div>
  )
}

export default App
