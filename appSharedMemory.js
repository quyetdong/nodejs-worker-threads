const { Worker } = require("worker_threads");

//Create new worker
const worker = new Worker("./workerSharedMemory.js");

//Listen for a message from worker
worker.on("message", (result) => {
  console.log(`${result.num}th Fibonacci Number: ${result.fib}`);
});

worker.on("error", (error) => {
  console.log("worker error ", error);
});

worker.on("exit", (exitCode) => {
  console.log("worker exit ", exitCode);
});

// create shared array
let nums = [21, 33, 15, 40];

//get size of the array buffer with int32 size buffer for each element in the array
const size = Int32Array.BYTES_PER_ELEMENT * nums.length;
//create the buffer for the shared array
const sharedBuffer = new SharedArrayBuffer(size);
// create the shared array
const sharedArray = new Int32Array(sharedBuffer);

// set value to the sharedarray with atomic constraint to avoid race conditions
nums.forEach((num, index) => {
  Atomics.store(sharedArray, index, num);
});

// post message event to worker
worker.postMessage({ nums: sharedArray });

let a = 3;
for (let i = 0; i < a; i += 1) {
  console.log("Executed in the parent thread ", i);
}
