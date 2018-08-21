export class PubSub<E> {
	private handlers: Set<(v: E) => void> = new Set();

	subscribe(fn: (event: E) => void) {
		this.handlers.add(fn);
	}

	unsubscribe(fn: (event: E) => void) {
		this.handlers.delete(fn);
	}

	emit(event: E) {
		for (const fn of this.handlers) {
			fn(event);
		}
	}
}
