import React from 'react';

import {shallow, mount} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
	it('Renders without crashing', () => {
		shallow(<Feedback />);
	});
	it('Renders a feedback', () => {
		const EXAMPLE_FEEDBACK = 'You got it';

		const wrapper = shallow(<Feedback feedback={EXAMPLE_FEEDBACK} />);
		expect(wrapper.contains(EXAMPLE_FEEDBACK)).toEqual(true);
	});
});