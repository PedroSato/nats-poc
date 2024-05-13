import { connect } from "nats";
const test = async () => {
  try {
    const nc = await connect({ servers: "nats://localhost:4222" });

    console.log("Connected to " + nc.getServer());

    const done = nc.closed();

    // await nc.close();
    // console.log("Connection closed");

    const err = await done;

    if (err) {
      console.log("Error closing connection: " + err);
    }
  } catch (err) {
    console.log(err);
  }
};

test();
