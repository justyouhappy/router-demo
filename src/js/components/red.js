import React from 'react';

class Red extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
            <div className="demo" style={{color:'white', background:'red'}}>
                I'm red
            </div>
		);
	}
}
export default Red