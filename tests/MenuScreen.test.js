// Snapshot testing for the menu screen
import 'react-native';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { Menu } from '../src/components/screens/MenuScreen';

describe('Menu Screen Component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Menu />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
