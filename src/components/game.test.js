import React from 'react';

import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />);
	});

	it('Can restart a new game', () => {
		const wrapper = shallow(<Game />);
		wrapper.setState({
			guesses: [1, 2, 3, 4],
			feedback: 'Good job',
			correctAnswer: 0,
		});
		wrapper.instance().restartGame();
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
	});

});