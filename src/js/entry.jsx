import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import createstore from './redux/store/store';
import {syncHistoryWithStore} from 'react-router-redux';
import Demo1 from './page/demo1';  // 首页
import Demo2 from './page/demo2';  // 首页
import Black from './components/black';
import Red from './components/red';
import Green from './components/green';


const store = createstore();
const history = syncHistoryWithStore(hashHistory, store);

class App extends React.Component {
	// componentWillMount() {},
	// componentDidMount() {},
	// componentWillUpdate(nextProps, nextState) {},
	// componentDidUpdate(prevProps, prevState) {},
	// componentWillUnmount() {},
	// componentWillReceiveProps(nextProps) {},
	// shouldComponentUpdate(nextProps, nextState) {},

	render() {
		return (
			<Provider store={store}>
				<Router history={history}>	
					<Route >
						<Route path="/" component={Demo1} />
						<Route path="/a" component={Demo2}>
							<IndexRoute component={Black} />
							<Route path="/a/1" component={Black} />
							<Route path="/a/2" component={Red} />
							<Route path="/a/3" component={Green} />
						</Route>
					</Route>
				</Router>
			</Provider>
		);
	}
}

const app = document.createElement('div');
const scripts = document.getElementsByTagName('script');
document.body.insertBefore(app, scripts[0]);
ReactDOM.render(<App />, app);