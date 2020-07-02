import React from 'react';
import ReactDOM from 'react-dom';


const listHeading = () => {
	return (
		<div className="list ">
			<ul className="nav list_head">
			  <li className="nav-item ml-3 mr-3">
			    <a className="nav-link active" href="#">ტოპ მოგებები</a>
			  </li>
			  <li className="nav-item ml-3 mr-3">
			    <a className="nav-link" href="#">ლიდერბორდი</a>
			  </li>
			  <li className="nav-item ml-3 mr-3">
			    <a className="nav-link" href="#">ისტორია</a>
			  </li>
			  <li className="nav-item ml-3 mr-3">
			    <a className="nav-link" href="#">წესები</a>
			  </li>
			</ul>
		</div>
	)
}

const tableRow = () => {
	return (
			  <tr>
			    <td><img src="images/logo2.svg" alt="logo2"/></td>
			    <td># 4412452</td>
			    <td><img className="mr-2 list_table_time" src="images/history.svg"/>12:33</td>
			    <td><div><p className="list_table_coefficient list_table_border m-auto">2.37</p></div></td>
			    <td><img className="mr-2 list_table_time" src="images/user.svg"/>Nodard...</td>
			    <td><div><p className="list_table_prize list_table_border m-auto">33.35₾</p></div></td>
			  </tr>
	)
}


const tableList = () => {
	return (
		<div className="list_table mt-2">
			<table className="text-center" style={{width:'100%'}}>
			  <tr>
			    <th></th>
			    <th>ნომერი</th>
			    <th>დრო</th>
			    <th>კოეპიციენტი</th>
			    <th>მომხმარებელი</th>
			    <th>მოგებული თანხა</th>
			  </tr>
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

export { listHeading ,tableList }