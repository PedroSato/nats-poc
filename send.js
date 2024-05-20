import { StringCodec,connect } from "nats";
const nc = await connect({ servers: "nats://localhost:4222" });
const sc = StringCodec();
nc.publish("updates", sc.encode("All is Well"));
nc.publish("updates", sc.encode("teu cu"))
