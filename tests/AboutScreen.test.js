// Snapshot testing for the about screen
import 'react-native';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { About } from '../src/components/screens/AboutScreen';

describe('About Screen Component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<About />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
