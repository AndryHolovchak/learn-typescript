import { createIterator } from "../iterator";

export const createStack = <T>() => {
	let count = 0;
	const items: Record<number, T> = {};

	const pop = () => count > 0 && delete items[count--];
	const push = (item: T) => (items[count++] = item);
	const get = (index: number) => (index in items ? items[index] : undefined);
	const next = () => {
		if (!count) return undefined;

		const item = items[count - 1];
		delete items[count--];
		return item;
	};

	return {
		get,
		pop,
		push,
		next,
		[Symbol.iterator]: createIterator({
			getCount: () => count,
			// return elements starting at the end
			getByIndex: (index) => items[count - index - 1],
		}),
	};
};
