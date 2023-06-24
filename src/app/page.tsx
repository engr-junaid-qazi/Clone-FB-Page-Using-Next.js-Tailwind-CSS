import Image from 'next/image'

export default function Home() {
  return (
 
    <div className='bg-gray-100 h-screen flex items-center justify-center'> 
      
      {/* Left Side */}
      
      <div className='text-2xl w-1/2 px-10 -ml-12 -mt-14'> 
        <Image alt='facebook logo' src='/pictures/facebook.svg' 
        width={300} height={100} />
        <h1 className='ml-7 -mt-3'> Facebook helps you connect and share with the people in your 
        life. </h1>
      </div>
      
      {/* Right w-1/3 Side */}
      
      <div className='bg-white flex flex-col p-4 rounded-xl w-1/3 pt-2 shadow-lg'> 
        <input className='my-2 border border-1 border-gray-200 p-3 
        rounded-lg focus:outline-1 outline-blue-500' type='text' placeholder='Email address or phone number' />
        <input className='my-2 border border-1 border-gray-200 p-3 
        rounded-lg focus:outline-1 outline-blue-500' type='password' placeholder='Password' />

        <button className='text-white bg-blue-600 font-bold 
      border-2  py-2 px-6  focus:outline-none rounded-lg text-xl'> 
      Log In 
      </button>
      
        <a className='my-2 cursor-pointer text-sm hover:underline text-blue-600 text-center mt-4' 
        href='#'> Forgotten Password? </a>
        
        <span className='mt-6 w-80 h-2 my-2'> 
          <hr/>
        </span>
        <button className='ml-12 w-56 mt-4 text-base text-white bg-green-500
        hover:bg-green-600 border-2 py-4 px-6 focus:outline-none rounded-lg font-bold'> Create new account</button>
        <br/>
        
      </div>
    </div>    
      )
}
