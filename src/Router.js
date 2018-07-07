// The Router file is going to manage all the available screens in our app
// along with the navigation between them
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/screens/LoginScreen';
import Register from './components/screens/RegisterScreen';
import Menu from './components/screens/MenuScreen';
import Vocab from './components/screens/VocabScreen';
import Speech from './components/screens/SpeechScreen';
import Grammar from './components/screens/GrammarScreen';
import VideoViewer from './components/screens/VideoViewerScreen';
import About from './components/screens/AboutScreen';

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
					<Scene key="speech" component={Speech} title="Pronunciación" />
					<Scene key="grammar" component={Grammar} title="Gramática" />
					<Scene key="videoViewer" component={VideoViewer} title="Vídeo" />
					<Scene key="about" component={About} title="Acerca de" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
