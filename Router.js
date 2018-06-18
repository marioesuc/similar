import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './src/components/Login';
import Register from './src/components/Register';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={Login} title="Please Login" hideNavBar initial />
					<Scene key="register" component={Register} title="Registro" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
