import { Kafka } from "kafkajs";
export declare class Confluent {
    key: string;
    secret: string;
    server: string[];
    /**
     * Constructs a wrapper around a Confluent Kafka cluster
     * @param key the key or username for the Confluent Kafka cluster
     * @param secret the secret / password for the Confluent Kafka cluster
     * @param server the server URL for the Confluent Kafka cluster
     */
    constructor(key: string, secret: string, server: string[]);
    /**
     * Instantiates a kafkaJS object from the Confluent Kafka cluster
     * @param client identifies the client ID for the Confluent cluster
     * @returns a KafkaJS Object
     */
    create(client: string): Kafka;
}
export default Confluent;
