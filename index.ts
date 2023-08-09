import { Queue } from "bullmq";
import worker from "./worker";

(async () => {
  console.log("Starting worker");
  await worker.run();
  console.log("Added job");
  new Queue("worker").add("test", { foo: "bar" });
  console.log("Shutting down");
})();
