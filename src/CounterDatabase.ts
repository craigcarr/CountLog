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
  type: EventType;
  timestamp: string;
  annotation: string;
}

export interface IDisplayValue {
  id?: number;
  counterId: number;
  timestamp: string;
  value: number;
}

export interface ISettings {
  name: string;
  value: any;
}

export enum EventType {
  Increment = "increment",
  Decrement = "decrement",
  Mutate = "mutate",
  Uncategorized = "uncategorized", // For null-handling cases.
}

class CounterDatabase extends Dexie {
  counters: Dexie.Table<ICounter, number>;
  events: Dexie.Table<IEvent, number>;
  settings: Dexie.Table<ISettings, number>;
  displayValues: Dexie.Table<IDisplayValue, number>;

  constructor() {
    super("CounterDatabase");

    this.version(1).stores({
      counters: "++id, name, color, value",
      events: "++id, counterId, type, timestamp, annotation, [counterId+type]",
      settings: "++name, value",
      displayValues: "++id, counterId, timestamp, value",
    });

    this.counters = this.table("counters");
    this.events = this.table("events")
    this.settings = this.table("settings")
    this.displayValues = this.table("displayValues");
  }
}

export default CounterDatabase;
