import React from 'react';
import { act, cleanup, fireEvent, render } from 'react-testing-library';

import Content from './Content';

const data = [
	{
		id: 123,
		byline: 'by NewYork Times',
		media: [
			{
				'media-metadata': [
					{},
					{
						url: 'https://imgplaceholder.com'
					},
					{},
					{},
					{
						url: 'https://imgplaceholder.com'
					}
				]
			}
		],
		published_date: '2019-24-1',
		title: 'a title'
	},
	{
		id: 124,
		byline: 'by NewYork Times',
		media: [
			{
				'media-metadata': [
					{},
					{
						url: 'https://imgplaceholder.com'
					},
					{},
					{},
					{
						url: 'https://imgplaceholder.com'
					}
				]
			}
		],
		published_date: '2019-24-1',
		title: 'a title 2'
	}
];

describe('Content', () => {
	let spy;

	beforeAll(() => {
		spy = jest
			.spyOn(window, 'scrollTo')
			.mockImplementation(() => (window.scrollY = 0));
	});

	afterEach(cleanup);

	it('should render error if exists', () => {
		const { container } = render(<Content data={data} error="error occured" />);

		expect(container.querySelector('.error').textContent).toBe('error occured');
	});

	it('should display content when data is passed', () => {
		const { container } = render(<Content data={data} />);

		expect(container.firstChild).toMatchSnapshot();
	});

	describe('OnClick', () => {
		let container;

		beforeEach(() => {
			({ container } = render(<Content data={data} />));
		});

		afterEach(cleanup);

		it('should set first item selected on click', () => {
			const contentItems = container.querySelectorAll('.content--item');
			fireEvent.click(contentItems[0]);
			expect(
				container.querySelector('.detail .detail--title').textContent
			).toBe('a title');
		});

		it('should set second item selected on click', () => {
			const contentItems = container.querySelectorAll('.content--item');
			fireEvent.click(contentItems[1]);
			expect(
				container.querySelector('.detail .detail--title').textContent
			).toBe('a title 2');
		});
	});
});
