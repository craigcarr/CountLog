import CounterDatabase, { ICounter, EventType } from "../CounterDatabase";

class CountersAPI {
  private static db: CounterDatabase;

  public static _initialize(db: CounterDatabase) {
    this.db = db;
  };

  public static getAllCounters() {
    return this.db.counters.toArray();
  }

  public static getEventsForCounter(counterId: number, type: EventType) {
    return this.db.events
      .where(['counterId', 'type'])
      .equals([counterId, type])
      .toArray();
  }

  public static getCounterById(id: number) {
    return this.db.counters.get(id);
  }

  public static deleteCounter(counterId: number) {
    this.db.events.where('type').equals('increment').toArray().then(events => {
      events.forEach(event => {
        if (event['counterId'] === counterId) {
          if (event['id'] === undefined) {
            // TODO Do something
          } else {
            this.db.events.delete(event['id']);
          }
        }
      });
    });

    this.db.events.where('type').equals('decrement').toArray().then(events => {
      events.forEach(event => {
        if (event['counterId'] === counterId) {
          if (event['id'] === undefined) {
            // TODO Do something
          } else {
            this.db.events.delete(event['id']);
          }
        }
      });
    });

    return this.db.counters.delete(counterId);
  }

  public static insertCounter(counter: ICounter) {
    this.db.counters.put(counter);
  }

  public static incrementCounter(counterId: number, callback: any) {
    this.db.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        // TODO Do something
      } else {
        let incrementEvent = {
          counterId: counterId,
          type: 'increment',
          timestamp: Date.now().toString(),
          annotation: '',
        };

        this.db.events.put(incrementEvent).then(() => {
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
        // TODO Do something
      } else {
        let decrementEvent = {
          counterId: counterId,
          type: 'decrement',
          timestamp: Date.now().toString(),
          annotation: '',
        }

        this.db.events.put(decrementEvent).then(() => {
          this.db.counters.update(counterId, { value: counter.value - 1 }).then(
            callback()
          );
        });
      }
    });
  }
}

export default CountersAPI;
