import CounterDatabase, { ICounter, IEvent, EventType } from "../CounterDatabase";

class CountersAPI {
  private static db: CounterDatabase;

  public static _initialize(db: CounterDatabase) {
    this.db = db;
  };

  public static getAllCounters() {
    return this.db.counters.toArray();
  }

  public static getEventsForCounter(counterId: number, type: EventType | undefined) {
    if (type === undefined) {
      return this.db.events
        .where('counterId')
        .equals(counterId)
        .toArray();
    } else {
      return this.db.events
        .where(['counterId', 'type'])
        .equals([counterId, type])
        .toArray();
    }
  }

  public static getCounterById(id: number) {
    return this.db.counters.get(id);
  }

  public static deleteCounter(counterId: number) {
    this.db.events.where('counterId').equals(counterId).toArray().then(events => {
      for (let event of events) {
        if (event.id === undefined) {
          // TODO Do something
        } else {
          this.db.events.delete(event.id)
        }
      }
    });

    return this.db.counters.delete(counterId);
  }

  public static insertCounter(counter: ICounter) {
    this.db.counters.put(counter).then(counterId => {
      let mutateEvent: IEvent = {
        counterId: counterId,
        type: EventType.Mutate,
        timestamp: Date.now().toString(),
        annotation: '',
      }

      this.db.events.put(mutateEvent);
    });
  }

  public static incrementCounter(counterId: number, callback: any) {
    this.db.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        // TODO Do something
      } else {
        let incrementEvent: IEvent = {
          counterId: counterId,
          type: EventType.Increment,
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
        let decrementEvent: IEvent = {
          counterId: counterId,
          type: EventType.Decrement,
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
