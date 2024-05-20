import { StringCodec, connect } from "nats";

const nc = await connect({ servers: "nats://localhost:4222" });

const sc = StringCodec();
// this is an example of a callback subscription
// https://github.com/nats-io/nats.js/blob/master/README.md#async-vs-callbacks
nc.subscribe("updates", {
    callback: (err, msg) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(sc.decode(msg.data));
        }
    }
});

// here's an iterator subscription - note the code in the
// for loop will block until the iterator completes
// either from a break/return from the iterator, an
// unsubscribe after the message arrives, or in this case
// an auto-unsubscribe after the first message is received
// const sub = nc.subscribe("updates");
// for await (const m of sub) {
//     console.log(sc.decode(m.data));
// }

// subscriptions have notifications, simply wait
// the closed promise
// sub.closed
//     .then(() => {
//         console.log("subscription closed");
//     })
//     .catch((err) => {
//         console.err(`subscription closed with an error ${err.message}`);
//     });