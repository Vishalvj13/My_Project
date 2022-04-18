import React, { useState } from "react";
import { Badge, Button } from "react-bootstrap";

const Patient = (props) => {
  const { patient,SetInvoiceModal,SetReleaseModal } = props;
  const [releaseToggleFlag,setreleaseToggleFlag]=useState(true)
  const [invoiceToggleFlag,setInvoiceToggleFlag]=useState(false)
  return (
    <tr className="">
      <td>{patient.patId}</td>
      <td>{patient.name}</td>
      <td>{patient.paymentStatus =="paid"&&<Badge pill bg="success">
    PAID
  </Badge>}{patient.paymentStatus =="unpaid"&&<Badge pill bg="danger">
    UNPAID
  </Badge>}</td>
      <td>{patient.phoneNo}</td>
      <td>
      <Button onClick={()=>{SetInvoiceModal(patient)}} variant="warning" size="sm">Invoice</Button>
      </td>
      
    </tr>
  );
};

export default Patient;

// {invoiceToggleFlag &&(
//         <Button onClick={()=>{SetInvoiceModal(patient)}} variant="warning" size="sm">Invoice</Button>
//       )}
//       {releaseToggleFlag &&(
//         <Button onClick={()=>{SetReleaseModal(patient)}} variant="warning" size="sm">Release</Button>
//       )}