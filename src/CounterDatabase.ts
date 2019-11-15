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
      settings: "++name, value",
    });

    this.counters = this.table("counters");
    this.incrementEvents = this.table("incrementEvents")
    this.decrementEvents = this.table("decrementEvents")
    this.settings = this.table("settings")
  }
}

export default CounterDatabase;
