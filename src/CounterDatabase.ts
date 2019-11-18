import Dexie from 'dexie';

export interface ICounter {
  id?: number;
  name: string;
  color: string;
  value: number;
}

export interface IEvent {
  id?: number;
  counterId: number;
  type: string;
  timestamp: string;
  annotation: string;
}

export interface ISettings {
  name: string;
  value: any;
}

export enum EventType {
  Increment = "increment",
  Decrement = "decrement",
}

class CounterDatabase extends Dexie {
  counters: Dexie.Table<ICounter, number>;
  events: Dexie.Table<IEvent, number>;
  settings: Dexie.Table<ISettings, number>;

  constructor() {
    super("CounterDatabase");

    this.version(1).stores({
      counters: "++id, name, color, value",
      events: "++id, counterId, type, timestamp, annotation, [counterId+type]",
      settings: "++name, value",
    });

    this.counters = this.table("counters");
    this.events = this.table("events")
    this.settings = this.table("settings")
  }
}

export default CounterDatabase;
