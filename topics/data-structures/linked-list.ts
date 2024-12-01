type ListNode<T> = {
	data: T;
	next: ListNode<T> | null;
};

export class LinkedList<T> {
	private _length: number = 0;
	private _head: ListNode<T> | null = null;

	get head() {
		return this._head;
	}

	get length() {
		return this._length;
	}

	print() {
		let result = "";

		let currentNode = this._head;

		while (currentNode != null) {
			result += `${currentNode.data}${currentNode.next ? " -> " : ""}`;
			currentNode = currentNode.next;
		}

		console.log(result);
		console.log(`length: ${this._length}`);
	}

	getAt(index: number) {
		this.validateIndex(index);

		let currentNode = this._head;

		for (let i = 1; i <= index; i++) {
			currentNode = currentNode?.next || null;
		}

		return currentNode?.data;
	}

	add(data: T) {
		const newNode: ListNode<T> = { data, next: null };

		if (this._head) {
			let currentNode = this._head;

			while (currentNode.next != null) {
				currentNode = currentNode.next;
			}

			currentNode.next = newNode;
		} else {
			this._head = newNode;
		}

		this._length++;
	}

	remove(data: T) {
		let previousNode: ListNode<T> | null = null;
		let currentNode = this._head;

		if (currentNode?.data === data) {
			this._head = currentNode.next;
		} else {
			while (currentNode != null && currentNode.data != data) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			if (currentNode) {
				previousNode!.next = currentNode?.next || null;
			} else {
				throw new Error("Node is not found");
			}
		}

		this._length--;
	}

	removeAt(index: number) {
		this.validateIndex(index);

		if (index === 0) {
			this._head = this.head!.next;
		} else {
			let previousNode = null;
			let currentNode = this._head;

			for (let i = 1; i <= index; i++) {
				previousNode = currentNode;
				currentNode = currentNode!.next;
			}

			previousNode!.next = currentNode?.next || null;
		}

		this._length--;
	}

	addAt(data: T, index: number) {
		this.validateIndex(index);

		const newNode: ListNode<T> = { data, next: null };

		let previousNode = null;
		let currentNode = this._head as ListNode<T>;

		for (let i = 1; i <= index; i++) {
			previousNode = currentNode;
			currentNode = currentNode!.next as ListNode<T>;
		}

		if (previousNode) {
			previousNode.next = newNode;
		} else {
			this._head = newNode;
		}

		newNode.next = currentNode;
		this._length++;
	}

	private validateIndex(index: number) {
		if (index < 0 || index >= this._length)
			throw new Error("Index is out of range");
	}
}
