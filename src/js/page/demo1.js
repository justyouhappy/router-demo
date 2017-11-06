import React from 'react';
import { Tabs } from 'antd';
import Black from '../components/black';
import Red from '../components/red';
import Green from '../components/Green';


const TabPane = Tabs.TabPane;

class Demo1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		return (
            <div>  
                <Tabs defaultActiveKey="1">
					<TabPane tab="Tab 1" key="1">
						<Black/>	
					</TabPane>
					<TabPane tab="Tab 2" key="2">
						<Red/>
					</TabPane>
					<TabPane tab="Tab 3" key="3">
						<Green/>
					</TabPane>
				</Tabs>
            </div>
		);
	}
}
export default Demo1