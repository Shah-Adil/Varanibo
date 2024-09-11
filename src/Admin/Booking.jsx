import React from 'react'

const Booking = () => {
  return (
    <div className='container-xl'>
      <div className="dashboard-table">
  <div className="d-flex justify-content-between">
    <h5 className="mb-3 mt-2">Booking Request</h5>
    <div className="mb-3 mt-2">
      <form action="" method="GET">
        <div className="form-group d-flex justify-content-between">
          <input
            type="search"
            name="search"
            className="form-control"
            placeholder="Search...."
          />
          <button type="submit" className="btn btn-sm btn-outline-success ml-2">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </form>
    </div>
  </div>
  <p className="text-center">Data Not Found</p>
  <table>
    <thead>
      <tr>
        <th className="text-center">No.</th>
        <th className="text-center">Indoor Name</th>
        <th className="text-center">Date</th>
        <th className="text-center">Time</th>
        <th className="text-center">Number</th>
        <th className="text-center">Bkash Number</th>
        <th className="text-center">Transaction Number</th>
        <th className="text-center">Amount</th>
        <th className="text-center">Due</th>
        <th className="text-center">Status</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

    </div>
  )
}

export default Booking
