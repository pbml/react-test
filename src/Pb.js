import React from "react";
import "./style.css";
import employee from './employee.json'

function Pb() {
  return (
    <div>
       <img src="https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg" alt="pb" width="400" />
       
    </div>
  );
  }

  function PbData() {
    return (
      <div>
         {JSON.stringify(employee)} 
      </div>

    );
    }

    function ShowPbData(){
      const DisplayData=employee.map(
          (info)=>{
              return(
                  <tr>
                      <td>{info.id}</td>
                      <td>{info.title}</td>                
                      <td>{info.firstName}</td>
                      <td>{info.lastName}</td>
                      <td>{info.salary}</td>
                  </tr>
              )
          }
      )
   
      return(
          <div>
              <table >
                  <thead>
                      <tr>
                      <th>Sr.NO</th>
                      <th>Name</th>
                      <th>City</th>
                      </tr>
                  </thead>
                  <tbody>
                   
                      
                      {DisplayData}
                      
                  </tbody>
              </table>
               
          </div>
      )
   }

export { Pb, PbData, ShowPbData }