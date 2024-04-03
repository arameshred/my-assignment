import React from 'react'
import Nav from './Nav'
import { Pie, Bar } from 'react-chartjs-2'
import { Chart, ArcElement, CategoryScale } from 'chart.js'
import 'chart.js/auto'

Chart.register(ArcElement, CategoryScale)

function Home({Toggle}) {

    const dataPie = {
        labels: [],
        datasets: [
          {
            data: [198, 24, 89],
            backgroundColor: [
              '#4caf50',
              '#f44336',
              '#2196f3',
            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1,
            cutout: '80%', 
            radius: '50%',
            height:'300px',
            width:'300px',
          },
        ],
      }
    
      const dataBar = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Amount',
            data: [198, 24, 24, 89, 150, 200, 250, 300, 350, 400, 450, 500],
            backgroundColor: [
              '#4caf50',
              '#4caf50',

            ],
            borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
  return (
    <div className='container-fluid p-0'>
      <Nav Toggle={Toggle}/>
      <div className='row g-3 my-2'>
        <div className='col-md-3 p-1'>
          <div className='p-3 bg-white rounded shadow-sm d-flex justify-content-around align-items-center'>
            <div>
              <p className='fs-7'> Earning</p>
              <h3 className='fs-2'>$198K</h3>
              <p className='fs-6 bi-arrow-up'>37.8% this month</p>
            </div>
            <i className='bi bi-currency-dollar p-3 fs-1'></i>
          </div>
        </div> 
        <div className='col-md-3 p-1'>
          <div className='p-3 bg-white rounded shadow-sm d-flex justify-content-around align-items-center'>
            <div>
            <p className='fs-7'> Orders</p>
              <h3 className='fs-2'>$2.4K</h3>
              <p className='fs-6 bi-arrow-down'>2% this month</p>
            </div>
            <i className='bi bi-layout-text-window-reverse p-3 fs-1'></i>
          </div>
        </div> 
        <div className='col-md-3 p-1'>
          <div className='p-3 bg-white rounded shadow-sm d-flex justify-content-around align-items-center'>
            <div>
            <p className='fs-7'> Balance</p>
              <h3 className='fs-2'>$2.4K</h3>
              <p className='fs-6 bi-arrow-down'>2% this month</p>
            </div>
            <i className='bi bi-wallet2 p-3 fs-1'></i>
          </div>
        </div> 
        <div className='col-md-3 p-1'>
          <div className='p-3 bg-white rounded shadow-sm d-flex justify-content-around align-items-center'>
            <div>
              <p className='fs-7'> Total Sales</p>
              <h3 className='fs-2'>$89K</h3>
              <p className='fs-6 bi-arrow-up'>11% this month</p>
            </div>
            <i className='bi bi-bag-fill p-3 fs-1'></i>
          </div>
        </div> 
      </div>
      <div className='row bg-white'>
        <div className='col-md-6 p-1'>
        <h3 className='fs-2 mb-10'>Overview</h3>
          <Bar
            data={dataBar}
            options={{responsive: true}}
            style={{height: '500px'}}
          />
        </div>
        <div className='col-md-6 p-1 md-7'>
          <h3 className='fs-2'>Customers</h3>
          <h5 className='fs-6'>Customers that buy products</h5>
          <Pie data={dataPie} options={{responsive: true}} style={{maxWidth: '500px', maxHeight: '500px', alignItems:'right', display:'flex'}} />
        </div>
      </div>
        
      <table id="example" className="table table-striped nowrap bg-white rounded mt-2 w-100">
        <thead>
          <tr>
            <th>Product Sell</th>
            
            <th>Stock</th>
            <th>Price</th>
            <th></th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abstract 3D</td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td></td>
            <td>20</td>
          </tr>
          <tr>
            <td>Windows xp</td>
            <td>32 in stock</td>
            <td>$45.99</td>
            <td></td>
            <td>20</td>
          </tr>
          <tr>
          <td>Power Point</td>
          <td>32 in stock</td>
          <td>$45.99</td>
          <td></td>
          <td>20</td>
        </tr>
        <tr>
        <td>Word</td>
        <td>32 in stock</td>
        <td>$45.99</td>
        <td></td>
        <td>20</td>
      </tr>
      <tr>
      <td>Car Play</td>
      <td>32 in stock</td>
      <td>$45.99</td>
      <td></td>
      <td>20</td>
    </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
