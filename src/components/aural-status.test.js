import React from 'react';

import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
	it('Renders without crashing', () => {
		shallow(<AuralStatus />);
	});

	it('Renders p tag', () => {
		const wrapper = shallow(<AuralStatus />);
		expect(wrapper.hasClass('visuallyhidden')).toEqual(true);
	});

	it('Returns a status', () => {
		const TEST_AURALSTATUS = 'You are hot';
		const wrapper = shallow(<AuralStatus auralStatus={TEST_AURALSTATUS} />);
			expect(wrapper.contains(TEST_AURALSTATUS)).toEqual(true);
	})
})