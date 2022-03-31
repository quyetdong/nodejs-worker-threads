const { parentPort, workerData } = require("worker_threads");

// return result to the main thread (parent thread) by post message to the parent
parentPort.postMessage({ num: workerData, fib: getFib(workerData) });

function getFib(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return getFib(num - 1) + getFib(num - 2);
  }
}
