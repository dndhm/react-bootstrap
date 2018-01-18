import values from './';

describe('Values reducer', () => {
	describe('default', () => {
		test('should return state unmutated', () => {
			const state = {
				key: {
					to: 'value',
				},
			};
			const action = { type: 'SOME_ACTION' };
			expect(values(state, action)).toEqual(state);
		});
	});

	describe('CHANGE action', () => {
		test('should return new state with value set at keyPath', () => {
			const state = {
				key: {
					to: 'value',
				},
			};
			const action = { type: 'CHANGE', payload: { keyPath: ['key', 'to'], value: 'new value' } };
			const expected = {
				key: {
					to: 'new value',
				},
			};
			expect(values(state, action)).toEqual(expected);
		});
	});
});
