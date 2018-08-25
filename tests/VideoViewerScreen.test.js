// Snapshot testing for the video viewer screen
import 'react-native';
import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { VideoViewer } from '../src/components/screens/VideoViewerScreen';

describe('VideoViewer Screen Component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<VideoViewer />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
