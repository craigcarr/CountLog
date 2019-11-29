import log from "loglevel";

// TODO Possibly use https://github.com/kutuluk/loglevel-plugin-remote

class LoggingAPI {
  constructor() {
    log.enableAll();
  }

  public error(data: any) {
    log.error(data);
  }
}

export default LoggingAPI;
