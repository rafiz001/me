import { useState } from 'react'
import Sidebar from './comp/Sidebar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' flex justify-center mt-7'>
        <div className='flex flex-col xl:flex-row justify-center gap-4 w-full xl:w-[80%]'>

          <Sidebar />
          <div className='flex-0 xl:flex-8 b i bg-background text-text  p-3 rounded-2xl border border-border'>rafiz</div>
        </div>
      </div>
    </>
  )
}

export default App
