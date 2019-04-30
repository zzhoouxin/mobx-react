import React, {Component} from 'react';
// 引入BrowserRouter
import { HashRouter } from 'react-router-dom';

const history = require("history").createBrowserHistory
// 直接引入页面组件
import Intro from './index';
class Router extends Component{
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		return (
			<HashRouter>{/*history会自动传入BrowserRouter*/}
				<Intro />{/*不需要单独配置路由，直接加载页面即可，同时注意只允许一个children*/}
			</HashRouter>
		);
	}
};

export default Router;