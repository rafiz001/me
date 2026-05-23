import { useState } from 'react'
import Sidebar from './comp/Sidebar';
import MainContent from './comp/MainContent';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' flex justify-center mt-7'>
        <div className='flex flex-col xl:flex-row justify-center gap-4 w-full xl:w-[80%]'>

          <Sidebar />
          
          <MainContent/>
        </div>
      </div>
    </>
  )
}

export default App
