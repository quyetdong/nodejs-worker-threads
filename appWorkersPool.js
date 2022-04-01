const { StaticPool } = require("node-worker-threads-pool");

//Create a static worker pool with 4 workers
const pool = new StaticPool({
  size: 4,
  task: "./worker.js",
});

let nums = [40, 33, 21, 15];

//Get a worker from the pool and execute the task
nums.forEach((num) => {
  pool.exec({ num: num }).then((result) => {
    console.log(`${result.num}th Fibonacci Number: ${result.fib}`);
  });
});

let a = 3;
for (let i = 0; i < a; i += 1) {
  console.log("Executed in the parent thread ", i);
}
