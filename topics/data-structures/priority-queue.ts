type Priority = 1 | 2 | 3 | 4 | 5;
type ItemWithPriority<T> = { priority: Priority; item: T };

export const makePriorityQueue = <T>() => {
	const items: ItemWithPriority<T>[] = [];

	const print = () => console.log(items.map(({ item }) => item));
	const enqueue = (item: T, priority: Priority) => {
		const itemWithPriority = { priority, item };

		if (!items.length) {
			items.push(itemWithPriority);
		} else {
			let added = false;

			for (let i = 0; i < items.length; i++) {
				const currentItem = items[i];
				if (currentItem.priority < priority) {
					items.splice(i, 0, itemWithPriority);
					added = true;
					break;
				}
			}

			if (!added) items.push(itemWithPriority);
		}
	};

	const dequeue = () => items.shift();

	return {
		print,
		enqueue,
		dequeue,
	};
};
