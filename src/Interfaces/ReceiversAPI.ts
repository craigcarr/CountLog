import CounterDatabase, { IReceiver, IEvent } from "../CounterDatabase";
import LoggingAPI from "./LoggingAPI";
import axios from 'axios';

export default class ReceiversAPI {
  private db: CounterDatabase;
  private loggingApi: LoggingAPI;

  constructor(db: CounterDatabase, loggingApi: LoggingAPI) {
    this.db = db;
    this.loggingApi = loggingApi;
  }

  public fireEvent(event: IEvent) {
    this.getAllReceivers().then(receivers => {
      for (let receiver of receivers) {
        if (receiver.options['type'] === 'http') {
          const body = JSON.stringify({
            type: event.type,
            timestamp: event.timestamp,
            annotation: event.annotation,
          });

          const instance = axios.create();
          instance.defaults.timeout = 1000;

          instance.post(receiver.options['url'], body).then(response => {
            // We don't care about any 200-level response we will get.
          }).catch(error => {
            this.loggingApi.error(error);
          });
        }
      }
    });
  }

  public testReceiver(receiver: IReceiver): Promise<boolean> {
    if (receiver.options['type'] === 'http') {
      const body = JSON.stringify({
        type: 'test',
        timestamp: 0,
        annotation: 'test',
      });

      return new Promise(resolve => {
        const instance = axios.create();
        instance.defaults.timeout = 1000;

        instance.post(receiver.options['url'], body).then(response => {
          resolve(true);
        }).catch(error => {
          resolve(false);
        });
      });
    }

    return new Promise(resolve => {
      resolve(false);
    });
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
