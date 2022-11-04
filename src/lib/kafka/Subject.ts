import Logger from './Logger';

export class Subject {
    io: any;
    namespace: any;
    consumerArr: any[];

    // io is socket server instance
    // consumerArr is an array of KafkaSocks consumerArr (from the Consumer class we created)

    /**
     * Constructs the entire set of the Kafka Socks Consumers
     * @param io the socket.io server object
     * @param namespace the websocket namespace id
     * @param consumerArr an array of Kafka Socks consumer objects
     */
    constructor(io: any, namespace: string, consumerArr: any[] = []) {
        this.io = io;
        this.namespace = this.io.of("/" + namespace);
        this.consumerArr = consumerArr;
        Logger("subject made");
    }

    /**
     * Adds the Kafka Socks consumer object to consumer array
     * @param consumer a Kafka socks consumer object
     */
    add(consumer: any) {
        // instantiate the Kakfa Consumer using the Kafa-provided class + add that consumer to our array
        Logger("in Subject.add");
        this.consumerArr.push(consumer);
    }

    /**
     * pauses all of the Kafka Socks consumers in the consumer array
     */
    pause() {
        this.consumerArr.forEach((consumer: any) => {
            consumer.pauser();

            // socket.on('disconnect', () => {
            //   Logger('disconnecting');
            //   consumer.disconnect().then(() => Logger('disconnected'));
            // });
        });
    }

    /**
     * resumes all of the Kafka Socks consumers in the consumer array
     */
    resume() {
        Logger("in resume inside Subject.ts");
        this.consumerArr.forEach((consumer: any) => {
            consumer.resumer(this.namespace);
        });
    }

    /**
     * intializes the listener for the websocket namespaces
     */
    connect() {
        Logger("in Subject.connect()");
        this.namespace.on("connection", (socket: any) => {
            Logger("in the namespace connection");
            // we need the socket to be listening to the event here
            // there is no socket.on('this.event')

            // socket.on('disconnect', consumer => {
            //   consumer.
            // });

            Logger("in namespace.on cb");
            this.consumerArr.forEach((consumer: any) => {
                consumer.run(this.namespace);

                // socket.on('disconnect', () => {
                //   Logger('disconnecting');
                //   consumer.disconnect().then(() => Logger('disconnected'));
                // });
            });
        });
    }

    // disconnect(event: any) {
    //   this.namespace.on(event, (socket : object) => {
    //     Logger('disconnected...')
    //   })
    // }
}

export default Subject;