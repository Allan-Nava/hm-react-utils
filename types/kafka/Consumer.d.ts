declare type ConsumerInterface = {
    connect: Function;
    subscribe: Function;
    run: Function;
    pause: Function;
    resume: Function;
    isConsuming?: Boolean;
    fromBeginning?: boolean;
};
export declare class Consumer {
    consumer: ConsumerInterface;
    topic: string;
    event: string;
    pause: boolean;
    resume: boolean;
    isConsuming: boolean;
    fromBeginning: boolean;
    /**
     * Constructs the Kafka Socks consumer object, which wraps around a KafkaJS consumer object,
     * and associates the consumer object with a particular websocket event
     * @param consumer a Kafka Socks consumer
     * @param topic the topic to associate with the Kafka Socks consumer
     * @param event the websocket event ID
     */
    constructor(consumer: ConsumerInterface, topic: string, event: string, pause?: boolean, resume?: boolean, isConsuming?: boolean, fromBeginning?: boolean);
    /**
     * pauses the consumption of the KafkaSocks consumer
     */
    pauser(): void;
    /**
     * Resumes a paused KafkaSocks consumer
     * @param namespace not used
     */
    resumer(namespace: any): void;
    /**
     * Starts the KakfaJS consumers wrapped by the Kafka Socks consumer class
     * @param namespace a socket.io namespace
     */
    run(namespace: any): Promise<void>;
}
export default Consumer;
