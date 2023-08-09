import { MetricsTime, Worker } from "bullmq";

export default new Worker<void, void>(
  "something",
  async (job) => {
    console.log('Doing "something"');
    await new Promise((resolve) => setTimeout(resolve, 4000));
    console.log("Done!");
  },
  {
    autorun: false,
    metrics: { maxDataPoints: MetricsTime.TWO_WEEKS },
  }
);
