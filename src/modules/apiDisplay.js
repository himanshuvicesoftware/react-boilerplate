import React from 'react'

const ApiDisplay = data => {
  console.log(data.data, 'rendder')
  debugger
  return (
    <table border="1">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
      {data.data.map(res => (
        <tr>
          <td>{res.id}</td>
          <td>{res.name}</td>
          <td>{res.username}</td>
          <td>{res.email}</td>
          <td>{res.address.city}</td>
        </tr>
      ))}
    </table>
  )
}

export default ApiDisplay
