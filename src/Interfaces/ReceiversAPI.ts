import CounterDatabase, { IReceiver, IEvent } from "../CounterDatabase";
import LoggingAPI from "./LoggingAPI";

export default class ReceiversAPI {
  private db: CounterDatabase;
  private loggingApi: LoggingAPI;

  constructor(db: CounterDatabase, loggingApi: LoggingAPI) {
    this.db = db;
    this.loggingApi = loggingApi;
  };

  public fireEvent(event: IEvent) {
    this.getAllReceivers().then(receivers => {
      for (let receiver of receivers) {
        if (receiver.options['type'] === 'http') {
          // TODO
        }
      }
    });
  }

  public testReceiver(receiver: IReceiver) {
    if (receiver.options['type'] === 'http') {
      // TODO
    }
  }

  public getAllReceivers() {
    return this.db.receivers.toArray();
  }

  public getReceiverById(id: number): Promise<IReceiver> {
    return new Promise(resolve => {
      this.db.receivers.get(id).then(receiver => {
        if (receiver === undefined) {
          this.loggingApi.error("counter is undefined");
        } else {
          resolve(receiver);
        }
      });
    });
  }

  public putReceiver(receiver: IReceiver) {
    return this.db.receivers.put(receiver);
  }

  public deleteReceiver(receiverId: number) {
    return this.db.receivers.delete(receiverId);
  }
}