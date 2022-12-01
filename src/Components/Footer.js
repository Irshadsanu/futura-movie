import React from 'react';


export default function App() {
  return (
    <div  className='bg-dark text-center text-lg-left'>
      <div className='text-center text-white p-3' >
        &copy; {new Date().getFullYear()} Copyright :  
        <a className='text-white' href='/'>
           futura lab.com
        </a>
      </div>
    </div>
  );
}