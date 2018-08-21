"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PubSub {
    constructor() {
        this.handlers = new Set();
    }
    subscribe(fn) {
        this.handlers.add(fn);
    }
    unsubscribe(fn) {
        this.handlers.delete(fn);
    }
    emit(event) {
        for (const fn of this.handlers) {
            fn(event);
        }
    }
}
exports.PubSub = PubSub;
//# sourceMappingURL=PubSub.js.map