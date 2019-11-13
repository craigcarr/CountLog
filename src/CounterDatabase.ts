import Dexie from 'dexie';

export interface ICounter {
  id?: number;
  name: string;
  color: string;
  value: number;
}

export interface IIncrementEvent {
  id?: number;
  counterId: number;
  timestamp: string;
  annotation: string;
}

export interface IDecrementEvent {
  id?: number;
  counterId: number;
  timestamp: string;
  annotation: string;
}

export interface ISettings {
  id?: number;
  name: string;
  value: any;
}

class CounterDatabase extends Dexie {
  counters: Dexie.Table<ICounter, number>;
  incrementEvents: Dexie.Table<IIncrementEvent, number>;
  decrementEvents: Dexie.Table<IDecrementEvent, number>;
  settings: Dexie.Table<ISettings, number>;

  constructor() {
    super("CounterDatabase");

    this.version(1).stores({
      counters: "++id, name, color, value",
      incrementEvents: "++id, counterId, timestamp, annotation",
      decrementEvents: "++id, counterId, timestamp, annotation",
      settings: "++id, name, value",
    });

    this.counters = this.table("counters");
    this.incrementEvents = this.table("incrementEvents")
    this.decrementEvents = this.table("decrementEvents")
    this.settings = this.table("settings")
  }

  public insertCounter(counter: ICounter) {
    this.counters.put(counter).then((key) => {
      console.log(key);
    });
  }

  public getAllCounters() {
    return this.counters.toArray();
  }

  public incrementCounter(counterId: number, callback: any) {
    this.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        console.error('counter is undefined')
      } else {
        let incrementEvent = {
          counterId: counterId,
          timestamp: Date.now().toString(),
          annotation: '',
        }

        this.incrementEvents.put(incrementEvent).then(() => {
          this.counters.update(counterId, { value: counter.value + 1 }).then(
            callback()
          );
        });
      }
    });
  }

  public decrementCounter(counterId: number, callback: any) {
    this.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        console.error('counter is undefined')
      } else {
        let decrementEvent = {
          counterId: counterId,
          timestamp: Date.now().toString(),
          annotation: '',
        }

        this.decrementEvents.put(decrementEvent).then(() => {
          this.counters.update(counterId, { value: counter.value - 1 }).then(
            callback()
          );
        });
      }
    });
  }
}

export default CounterDatabase;
