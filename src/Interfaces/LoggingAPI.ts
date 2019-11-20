import log from "loglevel";

// TODO Possibly use https://github.com/kutuluk/loglevel-plugin-remote

class LoggingAPI {
  public static _initialize() {
    log.enableAll()
  };

  public static error(data: any) {
    log.error(data)
  }
}

export default LoggingAPI;
