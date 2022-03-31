const { Worker } = require("worker_threads");

//Create new worker
const worker = new Worker("./worker1.js", { workerData: 40 });

//Listen for a message from worker
worker.once("message", (result) => {
  console.log(`${result.num}th Fibonacci Number: ${result.fib}`);
});

worker.on("error", (error) => {
  console.log("worker error ", error);
});

worker.on("exit", (exitCode) => {
  console.log("worker exit ", exitCode);
});

// post message event to worker
// worker.postMessage({ num: 40 });
// worker.postMessage({ num: 5 });

let a = 3;
for (let i = 0; i < a; i += 1) {
  console.log("Executed in the parent thread ", i);
}
