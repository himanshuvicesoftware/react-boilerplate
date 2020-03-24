import React from 'react'

const ApiDisplay = ({data,editApi })=> {
  console.log(data.data, 'rendder')
  debugger
  return (
    <table border="1">
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>username</th>
        <th>Email</th>
        <th>city</th> 
        </tr>
      {data.data.map(res => (
        <tr>
          <td>{res.id}</td>
          <td>{res.name}</td>
          <td>{res.username}</td>
          <td>{res.email}</td>
         
          <td>{res.address.city}</td>
          <button onClick={() => data.editApi(res.id)}>Edit</button>
          {/* <td><button type="button">Edit</button></td> */}
        </tr>
      ))}
    </table>
  )
}

export default ApiDisplay
