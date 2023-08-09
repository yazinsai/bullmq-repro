import { Queue } from "bullmq";
import worker from "./worker";

(async () => {
  console.log("Starting worker");
  await worker.run();
  console.log("Added job");
  new Queue("something").add("job", {});
  console.log("Shutting down");
})();
