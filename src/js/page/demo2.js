import React from 'react';
import { Tabs } from 'antd';


const TabPane = Tabs.TabPane;

class Demo2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			key: '1'
		}
		this.onChange = this.onChange.bind(this);
	}
	onChange(e) {
		this.props.router.push('/a/'+ e);
		this.setState({
			key: e
		});
	}
	render() {
		return (
            <div>  
                <Tabs defaultActiveKey="1" activeKey={this.state.key} onChange={this.onChange}>
					<TabPane tab="Tab 1" key="1">
					</TabPane>
					<TabPane tab="Tab 2" key="2">
					</TabPane>
					<TabPane tab="Tab 3" key="3">
					</TabPane>
				</Tabs>
				{this.props.children}
            </div>
		);
	}
}
export default Demo2