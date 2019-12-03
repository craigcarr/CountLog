import CounterDatabase, { IEvent, EventType } from "../CounterDatabase";
import LoggingAPI from "./LoggingAPI";

export default class EventsAPI {
  private db: CounterDatabase;
  private loggingApi: LoggingAPI;

  constructor(db: CounterDatabase, loggingApi: LoggingAPI) {
    this.db = db;
    this.loggingApi = loggingApi;
  };

  public putEvent(event: IEvent) {
    return this.db.events.put(event);
  }

  public getEventById(eventId: number): Promise<IEvent> {
    return new Promise(resolve => {
      this.db.events.get(eventId).then(event => {
        if (event === undefined) {
          this.loggingApi.error('event is undefined');
        } else {
          resolve(event);
        }
      })
    });
  }

  public getEventsForCounter(counterId: number, type: EventType | undefined) {
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
}
