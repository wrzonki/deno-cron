//deno run https://deno.land/x/crone/test.ts

import { Cron } from "https://deno.land/x/crone/cron.ts";

let cron = new Cron();
cron.start();

//job 1
cron.add("* * * * *", () => {
  console.log("test1");
});

//job 2
cron.add("2 * * * *", () => {
  console.log("test2");
});

//job 3
cron.add("20 * * * *", () => {
  console.log("test3");
});

console.table(cron.cronJobs);
