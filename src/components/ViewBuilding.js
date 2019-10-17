import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data } = this.props
		const building = data
		.filter(directory => {
			return directory.id === this.props.selectedBuilding
		})
		.map(directory => {
			return (
				<div key={directory.id}>

					<li>Address: {directory.address} </li>
				</div>

			);
		});
		return (
			<div>
				<p>
					{building}
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
