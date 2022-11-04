export declare class Subject {
    io: any;
    namespace: any;
    consumerArr: any[];
    /**
     * Constructs the entire set of the Kafka Socks Consumers
     * @param io the socket.io server object
     * @param namespace the websocket namespace id
     * @param consumerArr an array of Kafka Socks consumer objects
     */
    constructor(io: any, namespace: string, consumerArr?: any[]);
    /**
     * Adds the Kafka Socks consumer object to consumer array
     * @param consumer a Kafka socks consumer object
     */
    add(consumer: any): void;
    /**
     * pauses all of the Kafka Socks consumers in the consumer array
     */
    pause(): void;
    /**
     * resumes all of the Kafka Socks consumers in the consumer array
     */
    resume(): void;
    /**
     * intializes the listener for the websocket namespaces
     */
    connect(): void;
}
export default Subject;
