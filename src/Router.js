import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/screens/Login';
import Register from './components/screens/Register';
import Menu from './components/screens/Menu';
import Vocab from './components/screens/Vocab';
import Grammar from './components/screens/Grammar';
import VideoViewer from './components/screens/VideoViewer';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar initial >
				<Scene key="auth">
					<Scene key="login" component={Login} title="Please Login" hideNavBar initial />
					<Scene key="register" component={Register} title="Registro" />
				</Scene>
				<Scene key="main" >
					<Scene key="menu" component={Menu} title="Principal" hideNavBar initial />
					<Scene key="vocab" component={Vocab} title="Vocabulario" />
					<Scene key="grammar" component={Grammar} title="Gramática" />
					<Scene key="videoViewer" component={VideoViewer} title="Vídeo" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
