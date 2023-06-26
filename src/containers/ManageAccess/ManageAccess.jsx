import React from "react";
// import AddIcon from '@mui/icons-material/Add';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import './ManageAccess.css';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';

const Navbar = () => {
  return (
    <div className="straight">
      <li></li>

      <div className="straight">
      <li><AddCircleRoundedIcon/></li>
      <li><bold style={{ fontsize: "20px", fontWeight : 690, }}>New Entry</bold></li>
      </div>
    </div> 

  );
};

const ManageAccess = () => {
  const TableRow = styled.tr`
    // Row styles here
  `;

  const TableCell = styled.td`
    border: 1px solid black;
    padding: 8px;
    background-color: purple; /* Make all columns purple */

    &:nth-child(3) {
      background-color: gray; /* Only the 3rd column will be gray */
    }
  `;

  // Data for the table
  const data = [
    ['1', 'TONY ', 'wsdertyuiopijhgdxcgh',<div>sdfyujik<DeleteIcon /></div>],
    ['2', 'MARK', 'wsdertygijikedywcdv', <div>sdfghjk<DeleteIcon /></div>],
    ['3', 'MICHEAL', 'efgdfhjgrgnjfbvh', <div>srtyuty<DeleteIcon /></div>],
    ['4', 'RACHEAL', 'wertyuikjhgfvjkiuytf', <div>wertyu<DeleteIcon /></div>]
  ]; 

  return (
    <div>
      <Navbar />
      <table style={{ borderCollapse: 'collapse', width: '100%',padding:'200px' }}>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAccess;






