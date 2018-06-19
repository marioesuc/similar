import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Menu from './src/components/Menu';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar initial>
				<Scene key="auth">
					<Scene key="login" component={Login} title="Please Login" hideNavBar initial />
					<Scene key="register" component={Register} title="Registro" />
				</Scene>
				<Scene key="main">
					<Scene key="menu" component={Menu} title="Principal" hideNavBar initial />
					<Scene key="about" component={Menu} title="Principal" hideNavBar initial />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
