import { useState } from "react";
import info from './data-dummy.json';

function Student() {
  const [data , setData] = useState(info);

  return (
    <>
      <center>
        <span>
          <h1>Student List</h1>
        </span>
        <button id="btn-add">AddStudent</button>
      </center>
<center>
      <table width="100%">
        <thead>
        <tr>
          <th>SI.NO</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>COURSE</th>
          <th>BATCH</th>
          <th>CHANGE</th>
        </tr>
        </thead>
        <br/>
        <tbody>
          {
            data.map((d)=>(
              <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>{d.course}</td>
                <td>{d.batch}</td>  
                <td>Edit</td>
              </tr>
            ))
          }
        </tbody>
      </table>
</center>
    </>
  );
}
export default Student;
