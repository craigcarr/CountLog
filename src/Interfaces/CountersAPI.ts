import CounterDatabase, { ICounter, IEvent, EventType, IDisplayValue } from "../CounterDatabase";
import LoggingAPI from "./LoggingAPI";

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

  public static getDisplayValuesForCounter(counterId: number) {
    return this.db.displayValues.where('counterId').equals(counterId).toArray();
  }

  public static getCounterById(id: number) {
    return this.db.counters.get(id);
  }

  public static deleteCounter(counterId: number) {
    this.db.events.where('counterId').equals(counterId).toArray().then(events => {
      for (let event of events) {
        if (event.id === undefined) {
          LoggingAPI.error('event.id is undefined')
        } else {
          this.db.events.delete(event.id)
        }
      }
    });

    this.db.displayValues.where('counterId').equals(counterId).toArray().then(displayValues => {
      for (let displayValue of displayValues) {
        if (displayValue.id === undefined) {
          LoggingAPI.error('displayValue.id is undefined')
        } else {
          this.db.displayValues.delete(displayValue.id)
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

      let displayValue: IDisplayValue = {
        counterId: counterId,
        timestamp: Date.now().toString(),
        value: counter.value,
      }

      this.db.displayValues.put(displayValue);
    });
  }

  public static incrementCounter(counterId: number, callback: any) {
    this.db.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        LoggingAPI.error('counter is undefined')
      } else {
        let incrementEvent: IEvent = {
          counterId: counterId,
          type: EventType.Increment,
          timestamp: Date.now().toString(),
          annotation: '',
        };

        this.db.events.put(incrementEvent).then(() => {
          let displayValue: IDisplayValue = {
            counterId: counterId,
            timestamp: Date.now().toString(),
            value: counter.value + 1,
          }

          this.db.displayValues.put(displayValue);

          this.db.counters.update(counterId, { value: counter.value + 1 }).then(() => {
            callback()
          });
        });
      }
    });
  }

  public static decrementCounter(counterId: number, callback: any) {
    this.db.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        LoggingAPI.error('counter is undefined')
      } else {
        let decrementEvent: IEvent = {
          counterId: counterId,
          type: EventType.Decrement,
          timestamp: Date.now().toString(),
          annotation: '',
        }

        this.db.events.put(decrementEvent).then(() => {
          let displayValue: IDisplayValue = {
            counterId: counterId,
            timestamp: Date.now().toString(),
            value: counter.value - 1,
          }

          this.db.displayValues.put(displayValue);

          this.db.counters.update(counterId, { value: counter.value - 1 }).then(() => {
            callback()
          });
        });
      }
    });
  }
}

export default CountersAPI;
