import React from 'react';
import { addData } from '../displayTable/displayTable.actions';

const Display = ({data}) => {
    return(
        <div>
        
       <table>
                <tr>
                    
                    <th>Employee_name</th> 
                    <th>Employee_salary</th>
                    <th>Employee_age</th>
                </tr>
                {data.map(each=>(<tr>
                    <td>{each.employee_name}</td>
                    <td>{each.employee_age}</td>
                    <td>{each.employee_salary}</td>
                  
                </tr>))}

       </table>
       </div>
    );
}

export default Display