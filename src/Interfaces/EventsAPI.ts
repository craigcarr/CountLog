import CounterDatabase, { IEvent, EventType } from "../CounterDatabase";
import LoggingAPI from "./LoggingAPI";
import ReceiversAPI from "./ReceiversAPI";

export default class EventsAPI {
  private db: CounterDatabase;
  private receiversApi: ReceiversAPI;
  private loggingApi: LoggingAPI;

  constructor(db: CounterDatabase, receiversApi: ReceiversAPI, loggingApi: LoggingAPI) {
    this.db = db;
    this.receiversApi = receiversApi;
    this.loggingApi = loggingApi;
  };

  public putEvent(event: IEvent) {
    this.receiversApi.fireEvent(event);
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
