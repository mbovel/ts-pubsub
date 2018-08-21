export declare class PubSub<E> {
    private handlers;
    subscribe(fn: (event: E) => void): void;
    unsubscribe(fn: (event: E) => void): void;
    emit(event: E): void;
}
