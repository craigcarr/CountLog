export interface ILogMessage {
  id: number;
  message: string;
  timestamp: string;
}

export default class LoggingAPI {
  private logMessages: ILogMessage[];
  private currentId: number;

  constructor() {
    this.logMessages = [];
    this.currentId = 0;
  }

  public error(data: any) {
    console.error(data)

    let message: ILogMessage = {
      id: this.currentId,
      message: String(data),
      timestamp: (new Date()).toLocaleString(),
    }

    this.currentId += 1;
    this.logMessages.push(message);
  }

  public getLogMessages() {
    return this.logMessages;
  }
}
