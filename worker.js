const { parentPort, workerData } = require("worker_threads");

// listen to the message event, then execute the calculation
parentPort.on('message', data => {
  // return result to the main thread (parent thread) by post message to the parent
  parentPort.postMessage({ num: data.num, fib: getFib(data.num)})
});

function getFib(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return getFib(num - 1) + getFib(num - 2);
  }
}
