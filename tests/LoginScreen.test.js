// Snapshot testing for the login screen
import 'react-native';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { Login } from '../src/components/screens/LoginScreen';

describe('Login Screen Component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Login />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
