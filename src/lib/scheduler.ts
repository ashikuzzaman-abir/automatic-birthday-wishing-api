import scheduler from 'node-schedule'

export default class Scheduler {
  private static instance: Scheduler
  private constructor() {}

  public static getInstance(): Scheduler {
    if (!Scheduler.instance) {
      Scheduler.instance = new Scheduler()
    }
    return Scheduler.instance
  }

  public scheduleJob(
    rule: string | scheduler.RecurrenceRule | scheduler.RecurrenceSpecDateRange,
    callback: () => void
  ): scheduler.Job {
    return scheduler.scheduleJob(rule, callback)
  }
}