/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

function Sidebar() {
  return (
    <div className='bg-white sidebar p-2'>
       <div className='m-2'>
          <i className='bi bi-x-diamond-fill me-3 fs-4'></i>
          <span>Dashboard</span>
       </div>
       <hr className='text-dark' />
       <div className='list-group list-group-flush'>
           <a className='list-group-item py-2'>
               <i className='bi bi-speedometer2 fs-5 me-3'></i>
               <span >Dashboard</span>
           </a>
           <a className='list-group-item py-2'>
           <i className='bi bi-box-fill fs-4 me-3'></i>
           <span >Product</span>
           </a>
           <a className='list-group-item py-2'>
           <i className='bi bi-people-fill fs-4 me-3'></i>
           <span >Customers</span>
           </a>
           <a className='list-group-item py-2'>
           <i className='bi bi-cash fs-4 me-3'></i>
           <span >Income</span>
           </a>
           <a className='list-group-item py-2'>
           <i className='bi bi-percent fs-4 me-3'></i>
           <span >Promote</span>
           </a>
           <a className='list-group-item py-2'>
           <i className='bi bi-question-square-fill fs-4 me-3'></i>
           <span >Help</span>
           </a>
       </div>
    </div>
  )
}

export default Sidebar