import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' flex justify-center mt-7'>
    <div className='flex sm:flex-col xl:flex-row justify-center gap-2 sm:w-full xl:w-[80%]'>

      <div className='sm:flex-0 xl:flex-2 b i bg-background text-text  p-3 rounded-2xl border border-border'>rafiz</div>
      <div className='sm:flex-0 xl:flex-8 b i bg-background text-text  p-3 rounded-2xl border border-border'>rafiz</div>
    </div>
    </div>
    </>
  )
}

export default App
