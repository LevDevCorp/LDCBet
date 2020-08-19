import React from 'react';
import ReactDOM from 'react-dom';

const tableRow = () => {
	return (
			<tr>
			    <td>23 იანვ.</td>
			    <td>2 ლარი</td>
			    <td>100X</td>
			    <td>5 კაციანი</td>
			    <td><img src="../images/user.svg" alt="user"/>ნოდარა, ელდარა, ემზარა, ზაირა, მერება</td>
			    <td>10</td>
			    <td className="history_table_money" >5000 ლარი</td>
			</tr>
	)
}


const historyTable = () => {
	return (
		<div className=" mt-2">
			<table className="text-center  history_table" style={{width:'100%'}}>
			  <tr>
			    <th>თარიღი</th>
			    <th>ღირებული</th>
			    <th>რა Xn </th>
			    <th>რაოდენობა</th>
			    <th>მონაწილეები</th>
			    <th>ადგილები</th>
			    <th>მოგებული</th>
			  </tr>
			  {tableRow()}
			  {tableRow()}
			  {tableRow()}
			  {tableRow()}
			  {tableRow()}
			  {tableRow()}
			  {tableRow()}
			  {tableRow()}
			  {tableRow()}
			</table>			
		</div>
	)
}

export { historyTable }