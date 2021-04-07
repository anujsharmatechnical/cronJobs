//accesing current date and time
// var today = new Date();
// console.log(today);

const schedule = require("node-schedule");
// //at a particular date and time

// const someDate = new Date("2021-04-07T07:14:31.426Z");
// schedule.scheduleJob(someDate, () => {
//   console.log("job ran", new Date().toString());
// });

// at recurrent interval and giving name of m-job with the canceljob function
// schedule.scheduleJob("m-job", "*/2 * * * * *", () => {
//   console.log("i am run after 2 seconds");
//   schedule.cancelJob("m-job");
// });

//cancel with the name of variable

const mJob = schedule.scheduleJob("*/2 * * * * *", () => {
  console.log("i am runnng");
  // also use schedule.cancelJob(mJob)
  mJob.cancel();
});
