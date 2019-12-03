import log from "loglevel";

// TODO Possibly use https://github.com/kutuluk/loglevel-plugin-remote

export default class LoggingAPI {
  constructor() {
    log.enableAll();
  }

  public error(data: any) {
    log.error(data);
  }
}
