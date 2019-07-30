import React from 'react';
import {
	createHistory,
	createMemorySource,
	LocationProvider
} from '@reach/router';
import { cleanup, render } from 'react-testing-library';

import Index from './index';

function renderWithRouter(
	ui,
	{ route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
	return {
		...render(<LocationProvider history={history}>{ui}</LocationProvider>),
		// adding `history` to the returned utilities to allow us
		// to reference it in our tests
		history
	};
}

describe('Index', () => {
	describe('Full Rendering/Navigation', () => {
		afterEach(cleanup);

		it('should render the landing page properly', () => {
			const { container } = renderWithRouter(<Index />);

			console.log(container);

			// expect(container.querySelector('.index')).toMatch('Edit src');
		});
	});
});
