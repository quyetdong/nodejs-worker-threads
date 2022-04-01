const { parentPort } = require("worker_threads");

// listen to the message event, then execute the calculation
parentPort.on('message', data => {
  // return result to the main thread (parent thread) by post message to the parent
  console.log('worker ', data)
  data.nums.forEach(element => {
    console.log('each ', element)
    parentPort.postMessage({ num: element, fib: getFib(element)})
  });
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
