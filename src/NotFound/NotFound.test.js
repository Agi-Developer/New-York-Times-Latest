import React from 'react';
import { render } from 'react-testing-library';
import NotFound from './NotFound';

describe('NotFound', () => {
	it('should have right 404 text', () => {
		const { container } = render(<NotFound />);

		expect(container.querySelector('.not-found').textContent).toBe(
			'404 | This page could not be found.'
		);
	});
});