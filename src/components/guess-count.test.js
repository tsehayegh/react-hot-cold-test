import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Renders a guess count', () => {
		const TEST_GUESSCOUNT = 2;
		const wrapper = shallow(<GuessCount guessCount={TEST_GUESSCOUNT} />);
		expect(wrapper.text()).toEqual(`You've made ${TEST_GUESSCOUNT} guesses!`);
	});
});