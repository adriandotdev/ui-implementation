import './App.css'

function App() {

  return (
    <>
      <main className="px-10">
        <div className="pt-5">
          <h1 className="text-3xl font-bold pb-5">Buttons</h1>
          <div className="buttons flex gap-5 flex-wrap">
            <button className='bg-blue-900 px-5 py-2 rounded-md text-white font-medium hover:bg-blue-700 transition-all focus:ring-2 focus:ring-offset-2 outline-none focus:ring-blue-900 focus:bg-blue-700 focus:shadow-lg focus:shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-500/50'>Primary</button>

            <button className='bg-red-900 px-5 py-2 rounded-md text-white font-medium hover:bg-red-700 transition-all focus:ring-2 focus:ring-offset-2 outline-none focus:ring-red-900 focus:bg-red-700 focus:shadow-lg focus:shadow-red-500/50 hover:shadow-lg hover:shadow-red-500/50'>
              Primary
            </button>

            <button className='bg-green-900 px-5 py-2 rounded-md text-white font-medium hover:bg-green-700 transition-all focus:ring-2 focus:ring-offset-2 outline-none focus:ring-green-900 focus:bg-green-700 focus:shadow-lg focus:shadow-green-500/50 hover:shadow-lg hover:shadow-green-500/50'>
              Success
            </button>

            <button className='border border-gray-950 px-5 py-2 rounded-md text-gray-950 font-medium outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all'>
              Success
            </button>

            <button className='bg-yellow-900 px-5 py-2 rounded-md text-white font-medium hover:bg-yellow-700 transition-all focus:ring-2 focus:ring-offset-2 outline-none focus:ring-yellow-900 focus:bg--700 focus:shadow-lg focus:shadow-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/50 min-w-[7rem]'>
              Info
            </button>
          </div>
        </div>

        <div className="pt-5">
          <h1 className="text-3xl font-bold pb-5">Forms</h1>

          <div className='flex flex-col max-w-xs gap-2'>
            <label className='font-medium' htmlFor="name">Name</label>
            <input className="transition-all outline-none border border-blue-950 p-2 rounded-md focus:ring focus:ring-offset-2 focus:caret-yellow-950" type="text" name="name" id="name" placeholder='E.g. Adrian' />
          </div>

          <div className='placeholder-animate flex flex-col max-w-xs gap-2 pt-5 relative'>
            <input className="transition-all outline-none border border-blue-950 p-2 rounded-md focus:ring-4 focus:ring-offset-0 focus:caret-yellow-950" type="text" name="name" id="name" placeholder='' />
            <label className='absolute top-1/2 left-[.5rem] transform -translate-y-[.2rem] text-gray-300' htmlFor="name">Name</label>
          </div>

          <div className='placeholder-animate flex flex-col max-w-xs gap-2 pt-5 relative'>
            <input className="transition-all outline-none border border-blue-950 p-2 rounded-md focus:ring-4 focus:ring-offset-0 focus:caret-yellow-950" type="password" name="name" id="name" placeholder='' />
            <label className='absolute top-1/2 left-[.5rem] transform -translate-y-[.2rem] text-gray-300' htmlFor="name">Password</label>
          </div>
        </div>

        <div className="pt-5">
          <h1 className="text-3xl font-bold pb-5">Upload</h1>

          <div className='flex gap-3 bg-gray-950 max-w-3xl rounded-lg'>
            <section className='avatar-aang'>
              {/* <img className='rounded-lg' src="/Avatar.jpg" alt="" /> */}
            </section>
            <section className='px-3 py-5'>
              <h1 className='avatar-title text-6xl font-mono font-bold text-orange-100'>Avatar Aang</h1>
              <p className='text-3xl text-orange-500'>The Last Airbender</p>
              <span className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit dolore, expedita, fugiat temporibus mollitia at culpa vel, blanditiis veniam asperiores corporis nulla molestiae quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.?</span>

              <section className='pt-5 flex gap-2'>
                <button className='bg-blue-900 px-5 py-2 rounded-md text-white font-medium hover:bg-blue-700 transition-all focus:ring-2 focus:ring-offset-2 outline-none focus:ring-blue-900 focus:bg-blue-700 focus:shadow-lg focus:shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-500/50'>Watch</button>

                <button className='bg-yellow-900 px-5 py-2 rounded-md text-white font-medium hover:bg-yellow-700 transition-all focus:ring-2 focus:ring-offset-2 outline-none focus:ring-yellow-900 focus:bg--700 focus:shadow-lg focus:shadow-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/50 min-w-[7rem]'>
                  Add to Watchlist
                </button>
              </section>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
