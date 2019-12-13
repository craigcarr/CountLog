import Dexie from 'dexie';

export interface ICounter {
  id?: number;
  name: string;
  color: string;
  value: number;
  delta: number;
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

export enum SettingName {
  isClickSoundEnabled = "isClickSoundEnabled",
  isDarkModeEnabled = "isDarkModeEnabled",
  isVibrationEnabled = "isVibrationEnabled",
}

export interface ISetting {
  name: SettingName;
  value: any;
}

export enum ReceiverType {
  https = "https",
}

export interface IHttpsReceiverOptions {
  url: string;
}

export interface IReceiver {
  id?: number;
  type: ReceiverType;
  options: IHttpsReceiverOptions;
}

export enum EventType {
  Increment = "increment",
  Decrement = "decrement",
  Mutate = "mutate",
  Uncategorized = "uncategorized", // For null-handling cases.
}

export default class CounterDatabase extends Dexie {
  public counters: Dexie.Table<ICounter, number>;
  public events: Dexie.Table<IEvent, number>;
  public settings: Dexie.Table<ISetting, number>;
  public displayValues: Dexie.Table<IDisplayValue, number>;
  public receivers: Dexie.Table<IReceiver, number>;

  constructor() {
    super("CounterDatabase");

    this.version(1).stores({
      counters: "++id, name, color, value, delta",
      events: "++id, counterId, type, timestamp, annotation, [counterId+type]",
      settings: "++name, value",
      displayValues: "++id, counterId, timestamp, value",
      receivers: "++id, type, options",
    });

    this.counters = this.table("counters");
    this.events = this.table("events")
    this.settings = this.table("settings")
    this.displayValues = this.table("displayValues");
    this.receivers = this.table("receivers");
  }
}
