import React, { useState } from "react";
import Nav from "./Nav";
import { Pie, Bar } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale } from "chart.js";
import "chart.js/auto";

Chart.register(ArcElement, CategoryScale);

function Home({ Toggle }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const dataPie = {
    labels: [],
    datasets: [
      {
        data: [198, 24, 89],
        backgroundColor: ["#4caf50", "#f44336", "#2196f3"],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 1,
        cutout: "80%",
        radius: "50%",
        height: "300px",
        width: "300px",
      },
    ],
  };

  const dataBar = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Amount",
        data: [198, 24, 24, 89, 350, 200, 250, 270, 214, 190, 130, 175],
        backgroundColor: ["#4caf50", "#4caf50"],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const YourTableData = [
    {
      product: "Abstract 3D",
      stock: "31 in stock",
      price: "$45.99",
      totalSales: "20",
    },
    {
      product: "Windows xp",
      stock: "47 in stock",
      price: "$45.99",
      totalSales: "30",
    },
    {
      product: "Power Point",
      stock: "49 in stock",
      price: "$45.99",
      totalSales: "40",
    },
    {
      product: "Word",
      stock: "32 in stock",
      price: "$45.99",
      totalSales: "45",
    },
    {
      product: "Car Play",
      stock: "37 in stock",
      price: "$45.99",
      totalSales: "17",
    },
  ];

  return (
    <div className="container-fluid p-0">
      <Nav Toggle={Toggle} />
      <div className="row g-3 my-2">
        <div className="col-md-3 p-1">
          <div className="p-3 bg-white rounded shadow-sm d-flex justify-content-around align-items-center">
            <div>
              <p className="fs-7"> Earning</p>
              <h3 className="fs-2">$198K</h3>
              <p className="fs-6 bi-arrow-up">37.8% this month</p>
            </div>
            <i className="bi bi-currency-dollar p-3 fs-1"></i>
          </div>
        </div>
        <div className="col-md-3 p-1">
          <div className="p-3 bg-white rounded shadow-sm d-flex justify-content-around align-items-center">
            <div>
              <p className="fs-7"> Orders</p>
              <h3 className="fs-2">$2.4K</h3>
              <p className="fs-6 bi-arrow-down">2% this month</p>
            </div>
            <i className="bi bi-layout-text-window-reverse p-3 fs-1"></i>
          </div>
        </div>
        <div className="col-md-3 p-1">
          <div className="p-3 bg-white rounded shadow-sm d-flex justify-content-around align-items-center">
            <div>
              <p className="fs-7"> Balance</p>
              <h3 className="fs-2">$2.4K</h3>
              <p className="fs-6 bi-arrow-down">2% this month</p>
            </div>
            <i className="bi bi-wallet2 p-3 fs-1"></i>
          </div>
        </div>
        <div className="col-md-3 p-1">
          <div className="p-3 bg-white rounded shadow-sm d-flex justify-content-around align-items-center">
            <div>
              <p className="fs-7"> Total Sales</p>
              <h3 className="fs-2">$89K</h3>
              <p className="fs-6 bi-arrow-up">11% this month</p>
            </div>
            <i className="bi bi-bag-fill p-3 fs-1"></i>
          </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-md-6 p-1">
          <h3 className="fs-2 mb-10">Overview</h3>
          <Bar
            data={dataBar}
            options={{ responsive: true }}
            style={{ height: "500px" }}
          />
        </div>
        <div className="col-md-6 p-1 md-7">
          <h3 className="fs-2">Customers</h3>
          <h5 className="fs-6">Customers that buy products</h5>
          <Pie
            data={dataPie}
            options={{ responsive: true }}
            style={{
              maxWidth: "500px",
              maxHeight: "500px",
              alignItems: "right",
              display: "flex",
            }}
          />
        </div>
      </div>

      <table
        id="example"
        className="table table-striped nowrap bg-white rounded mt-2 w-100"
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
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
          {YourTableData.filter((row) => {
            if (searchTerm === "") {
              return true;
            } else if (
              row.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.totalSales.includes(searchTerm) ||
              row.stock.toString().includes(searchTerm) ||
              row.price.toString().includes(searchTerm)
            ) {
              return true;
            }
            return false;
          }).map((filteredRow, index) => (
            <tr key={index}>
              <td>{filteredRow.product}</td>
              <td>{filteredRow.stock}</td>
              <td>{filteredRow.price}</td>
              <td></td>
              <td>{filteredRow.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
