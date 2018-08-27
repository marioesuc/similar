// Snapshot testing for the grammar screen
import 'react-native';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { Grammar } from '../src/components/screens/GrammarScreen';

describe('Grammar Screen Component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Grammar />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
