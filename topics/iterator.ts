// https://www.w3schools.com/js/js_iterables.asp

type Params<T> = {
	getCount: () => number;
	getByIndex: (index: number) => T | undefined;
};

export const createIterator = <T>({ getCount, getByIndex }: Params<T>) => {
	return (): Iterator<T> => {
		let currentIndex = 0;

		return {
			next: () => {
				if (currentIndex === getCount())
					return { done: true, value: undefined };

				return { done: false, value: getByIndex(currentIndex++) as T };
			},
		};
	};
};
