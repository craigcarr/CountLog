import CounterDatabase, { ICounter } from "../CounterDatabase";

class CountersAPI {
  private static db: CounterDatabase;

  public static _initialize(db: CounterDatabase) {
      this.db = db;
  };

  public static getAllCounters() {
    return this.db.counters.toArray();
  }

  public static getCounterById(id: number) {
    return this.db.counters.get(id);
  }

  public static deleteCounter(counterId: number) {
    // TODO Delete associated events.
    return this.db.counters.delete(counterId);
  }

  public static insertCounter(counter: ICounter) {
    this.db.counters.put(counter);
  }

  public static incrementCounter(counterId: number, callback: any) {
    this.db.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        console.error('counter is undefined')
      } else {
        let incrementEvent = {
          counterId: counterId,
          timestamp: Date.now().toString(),
          annotation: '',
        }

        this.db.incrementEvents.put(incrementEvent).then(() => {
          this.db.counters.update(counterId, { value: counter.value + 1 }).then(
            callback()
          );
        });
      }
    });
  }

  public static decrementCounter(counterId: number, callback: any) {
    this.db.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        console.error('counter is undefined')
      } else {
        let decrementEvent = {
          counterId: counterId,
          timestamp: Date.now().toString(),
          annotation: '',
        }

        this.db.decrementEvents.put(decrementEvent).then(() => {
          this.db.counters.update(counterId, { value: counter.value - 1 }).then(
            callback()
          );
        });
      }
    });
  }
}

export default CountersAPI;
