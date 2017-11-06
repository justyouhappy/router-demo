import React from 'react';

class Green extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
            <div className="demo" style={{color:'white', background:'green'}}>
                I'm green
            </div>
		);
	}
}
export default Green