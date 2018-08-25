// Snapshot testing for the register screen
import 'react-native';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { Register } from '../src/components/screens/RegisterScreen';

describe('Register Screen Component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Register />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
