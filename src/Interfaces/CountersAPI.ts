import CounterDatabase, { ICounter, IEvent, EventType, IDisplayValue } from "../CounterDatabase";
import LoggingAPI from "./LoggingAPI";
import EventsAPI from "./EventsAPI";

export default class CountersAPI {
  private db: CounterDatabase;
  private eventsApi: EventsAPI;
  private loggingApi: LoggingAPI;

  constructor(db: CounterDatabase, eventsApi: EventsAPI, loggingApi: LoggingAPI) {
    this.db = db;
    this.eventsApi = eventsApi;
    this.loggingApi = loggingApi;
  }

  public getAllCounters() {
    return this.db.counters.toArray();
  }

  public getCounterById(id: number): Promise<ICounter> {
    return new Promise(resolve => {
      this.db.counters.get(id).then(counter => {
        if (counter === undefined) {
          this.loggingApi.error("counter is undefined");
        } else {
          resolve(counter);
        }
      });
    });
  }

  public putCounter(counter: ICounter) {
    this.db.counters.put(counter).then(counterId => {
      let mutateEvent: IEvent = {
        counterId: counterId,
        type: EventType.Mutate,
        timestamp: Date.now().toString(),
        annotation: '',
      }

      this.eventsApi.putEvent(mutateEvent);

      let displayValue: IDisplayValue = {
        counterId: counterId,
        timestamp: Date.now().toString(),
        value: counter.value,
      }

      this.db.displayValues.put(displayValue);
    });
  }

  public deleteCounter(counterId: number) {
    this.db.events.where('counterId').equals(counterId).toArray().then(events => {
      for (let event of events) {
        if (event.id === undefined) {
          this.loggingApi.error('event.id is undefined')
        } else {
          this.db.events.delete(event.id)
        }
      }
    });

    this.db.displayValues.where('counterId').equals(counterId).toArray().then(displayValues => {
      for (let displayValue of displayValues) {
        if (displayValue.id === undefined) {
          this.loggingApi.error('displayValue.id is undefined')
        } else {
          this.db.displayValues.delete(displayValue.id)
        }
      }
    });

    return this.db.counters.delete(counterId);
  }

  public incrementCounter(counterId: number, callback: any) {
    this.db.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        this.loggingApi.error('counter is undefined')
      } else {
        let incrementEvent: IEvent = {
          counterId: counterId,
          type: EventType.Increment,
          timestamp: Date.now().toString(),
          annotation: '',
        };

        this.eventsApi.putEvent(incrementEvent).then(() => {
          let displayValue: IDisplayValue = {
            counterId: counterId,
            timestamp: Date.now().toString(),
            value: counter.value + counter.delta,
          }

          this.db.displayValues.put(displayValue);

          this.db.counters.update(counterId, { value: counter.value + counter.delta }).then(() => {
            callback()
          });
        });
      }
    });
  }

  public decrementCounter(counterId: number, callback: any) {
    this.db.counters.get(counterId).then(counter => {
      if (counter === undefined) {
        this.loggingApi.error('counter is undefined');
      } else {
        let decrementEvent: IEvent = {
          counterId: counterId,
          type: EventType.Decrement,
          timestamp: Date.now().toString(),
          annotation: '',
        }

        this.eventsApi.putEvent(decrementEvent).then(() => {
          let displayValue: IDisplayValue = {
            counterId: counterId,
            timestamp: Date.now().toString(),
            value: counter.value - counter.delta,
          }

          this.db.displayValues.put(displayValue);

          this.db.counters.update(counterId, { value: counter.value - counter.delta }).then(() => {
            callback()
          });
        });
      }
    });
  }

  // TODO Maybe this should get its own interface/context.
  public getDisplayValuesForCounter(counterId: number) {
    return this.db.displayValues.where('counterId').equals(counterId).toArray();
  }
}
