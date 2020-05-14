# Deno crontab

## Simple cron for deno server.


### Example:


```ts
import { Cron } from "https://github.com/wrzonki/deno-cron/blob/master/cron.ts";

let cron = new Cron();
cron.start();

//job 1
cron.add("* * * * *", () => {
  console.log("aaa");
});

//job 2
cron.add("* * * * *", () => {
  console.log("bbbb");
});

console.table(cron.cronJobs);
```

### TODO:
- Timezones