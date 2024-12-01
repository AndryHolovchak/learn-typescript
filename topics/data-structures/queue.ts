export const makeQueue = <T>() => {
	const items: T[] = [];

	const print = () => console.log(items);
	const enqueue = (item: T) => items.push(item);
	const dequeue = () => items.shift();

	return {
		print,
		enqueue,
		dequeue,
	};
};
