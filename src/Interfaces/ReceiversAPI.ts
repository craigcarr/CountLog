import CounterDatabase, { IReceiver, IEvent, ReceiverType } from "../CounterDatabase";
import LoggingAPI from "./LoggingAPI";
import axios from 'axios';

export default class ReceiversAPI {
  private db: CounterDatabase;
  private loggingApi: LoggingAPI;

  constructor(db: CounterDatabase, loggingApi: LoggingAPI) {
    this.db = db;
    this.loggingApi = loggingApi;
  }

  private transformHttpUrl(url: string) {
    if (!url.startsWith('https://')) {
      return 'https://' + url;
    } else {
      return url;
    }
  }

  public fireEvent(event: IEvent) {
    this.getAllReceivers().then(receivers => {
      for (let receiver of receivers) {
        if (receiver.type === ReceiverType.https) {
          const body = JSON.stringify({
            counterId: event.counterId,
            type: event.type,
            timestamp: event.timestamp,
            annotation: event.annotation,
          });

          const instance = axios.create();
          instance.defaults.timeout = 1000;

          instance.post(this.transformHttpUrl(receiver.options.url), body).then(response => {
            // We don't care about any 200-level response we will get.
          }).catch(error => {
            this.loggingApi.error(error);
          });
        }
      }
    });
  }

  public testReceiver(receiver: IReceiver): Promise<boolean> {
    if (receiver.type === ReceiverType.https) {
      const body = JSON.stringify({
        counterId: -1,
        type: 'test',
        timestamp: 0,
        annotation: 'test',
      });

      return new Promise(resolve => {
        const instance = axios.create();
        instance.defaults.timeout = 1000;

        instance.post(this.transformHttpUrl(receiver.options.url), body).then(response => {
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
