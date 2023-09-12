import { useState } from 'react'
import banner from './assets/images/banner1-8736e47c.jpg'

function App() {
  const [residentialIsOpen ,setResidentialIsOpen] = useState(false)
  const [inputValue,setInputValue]=useState('residential')
  console.log(inputValue)

  return (
    <div className='lg:h-[1000px]'>
      <div className='max-w-7xl  mx-auto relative'>
      <img className='w-full hidden lg:block h-[365px] object-cover z-0' src={banner} alt="" />
      <div className='bg-[#212529cc] lg:absolute lg:rounded-lg lg:-bottom-[98px] lg:left-[32.5%]  lg:w-[35%] text-xl z-10 p-5 mt-10'>
          <ul className='flex items-center justify-center gap-5 mb-5 text-xl font-medium text-white'>
            <li><a className='border-b-2 cursor-pointer border-[#e03c31]' href="">Buy</a></li>
            <li><a className='cursor-pointer' href="">Rent</a></li>
          </ul>
          <form className='flex justify-center  text-[17px]' action="">
            <input className='bg-white text-gray-900 focus:outline-none p-3 rounded-l-md w-full' type="text" placeholder="Search Location" />
            <button className='bg-[#e03c31] text-white p-3 rounded-r-md' type='submit'>Search</button>
          </form>
          <div className='text-sm mt-5 flex items-center gap-5 justify-center'>
            <div className='relative'>
              <h1 onClick={()=>setResidentialIsOpen(!residentialIsOpen)} className='flex text-white items-center gap-1 z-0 cursor-pointer'>All Residential 
              {residentialIsOpen?<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>:<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>}
              
              </h1>
              <div className={residentialIsOpen===true ? 'absolute bg-white z-10 w-80 shadow-md rounded-lg top-7 left-0' : 'hidden'}>
                <div className='p-3'>
                  <h1>Property Type</h1>
                  <div className='flex gap-2 mt-3'>
                    <h6 className='bg-[#e03c31] bg-opacity-10 text-[#e03c31] cursor-pointer  py-1 px-3 rounded-full'>Residential</h6>
                    <h6 className='bg-[#212529] rounded-full bg-opacity-10 text-[#212529] cursor-pointer  py-1 px-3 "'>Commertial</h6>
                  </div>
                </div>
                <div className='overflow-scroll h-52 overflow-x-hidden w-full bg-[#5050500d]'>
                  <div onClick={() => {setInputValue("residential")}} className={inputValue === 'residential'?'bg-[#212529cc] text-white':''}>
                  <label className="p-3 w-full flex items-center mb-2 cursor-pointer ">
                    <input
                     type="radio"
                     name='residential'
                     className="h-5 w-5 text-blue-600"
                     value={inputValue}
                     checked={inputValue == "residential"}
                      />
                    <span className="ml-2">All Residential</span>
                    </label>
                  </div>
                  <div onClick={() => {setInputValue("condo")}} >
                  <label className={inputValue=='condo'?"p-3 w-full flex items-center mb-2 cursor-pointer bg-[#212529cc] text-white":'p-3 w-full flex items-center mb-2 cursor-pointer'}>
                    <input 
                    type="radio"
                    name='condo'
                    className="h-5 w-5 text-blue-600"
                    value={inputValue}
                    checked={inputValue == "condo"} 
                    />
                    <span className="ml-2">Condo</span>
                    </label>
                  <div className={inputValue === 'condo'?'px-10':'hidden'}>
                    <label className='flex items-center gap-1'>
                    <input type="checkbox" className="h-4 w-4 text-blue-600" value="" />
                    <span className="ml-2">Condo</span>
                    </label>
                  </div>
                  </div>
                  <div onClick={() => {setInputValue("detached")}} >
                  <label className={inputValue=='detached'?"p-3 w-full flex items-center mb-2 cursor-pointer bg-[#212529cc] text-white":'p-3 w-full flex items-center mb-2 cursor-pointer'}>
                    <input 
                    type="radio"
                    name='detached'
                    className="h-5 w-5 text-blue-600"
                    value={inputValue}
                    checked={inputValue == "detached"} 
                    />
                    <span className="ml-2">Detached House</span>
                    </label>
                  <div className={inputValue === 'detached'?'px-10':'hidden'}>
                    <label className='flex items-center gap-1'>
                    <input type="checkbox" className="h-4 w-4 text-blue-600" value="" />
                    <span className="ml-2">Detached House</span>
                    </label>
                  </div>
                  </div>
                  <div onClick={() => {setInputValue("town")}} >
                  <label className={inputValue=='town'?"p-3 w-full flex items-center mb-2 cursor-pointer bg-[#212529cc] text-white":'p-3 w-full flex items-center mb-2 cursor-pointer'}>
                    <input 
                    type="radio"
                    name='town'
                    className="h-5 w-5 text-blue-600"
                    value={inputValue}
                    checked={inputValue == "town"} 
                    />
                    <span className="ml-2">Town House</span>
                    </label>
                  <div className={inputValue === 'town'?'px-10':'hidden'}>
                    <label className='flex items-center gap-1'>
                    <input type="checkbox" className="h-4 w-4 text-blue-600" value="" />
                    <span className="ml-2">Town House</span>
                    </label>
                  </div>
                  </div>
                  <div onClick={() => {setInputValue("land")}} >
                  <label className={inputValue=='land'?"p-3 w-full flex items-center mb-2 cursor-pointer bg-[#212529cc] text-white":'p-3 w-full flex items-center mb-2 cursor-pointer'}>
                    <input 
                    type="radio"
                    name='land'
                    className="h-5 w-5 text-blue-600"
                    value={inputValue}
                    checked={inputValue == "land"} 
                    />
                    <span className="ml-2">land</span>
                    </label>
                  <div className={inputValue === 'land'?'px-10':'hidden'}>
                    <label className='flex items-center gap-1'>
                    <input type="checkbox" className="h-4 w-4 text-blue-600" value="" />
                    <span className="ml-2">land</span>
                    </label>
                  </div>
                  </div>
                  <div onClick={() => {setInputValue("apartment")}} >
                  <label className={inputValue=='apartment'?"p-3 w-full flex items-center mb-2 cursor-pointer bg-[#212529cc] text-white":'p-3 w-full flex items-center mb-2 cursor-pointer'}>
                    <input 
                    type="radio"
                    name='apartment'
                    className="h-5 w-5 text-blue-600"
                    value={inputValue}
                    checked={inputValue == "apartment"} 
                    />
                    <span className="ml-2">Apartment</span>
                    </label>
                  <div className={inputValue === 'apartment'?'px-10':'hidden'}>
                    <label className='flex items-center gap-1'>
                    <input type="checkbox" className="h-4 w-4 text-blue-600" value="" />
                    <span className="ml-2">Apartment</span>
                    </label>
                  </div>
                  </div>
                  
                  
                </div>
                
                <div className="text-[#212529] flex justify-between items-center p-5 text-sm">
                <button>Clear</button>
                <button className="text-xs py-2 flex gap-2 items-center rounded px-6 bg-[#212529] hover:bg-[#212529]/90 text-white">Apply Filter</button>
                </div>
              </div>
              
             
            </div>
            <div className=''>
              <h1 className='flex text-white items-center gap-1'>Any Price 
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>
              </h1>
              
            </div>
            <div className=''>
              <h1 className='flex items-center gap-1 text-white'>Bedroom 
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path></svg>
              </h1>
              
            </div>
          </div>
          
      </div>
      <img className='w-full block lg:hidden h-[365px] object-cover z-0' src={banner} alt="" />
    </div>
    </div>
  )
}

export default App
