import React from 'react';

class Black extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
            <div className="demo" style={{color:'white', background:'black'}}>
                I'm black
            </div>
		);
	}
}
export default Black