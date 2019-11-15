import CounterDatabase, { ISettings } from "../CounterDatabase";

class SettingsAPI {
  private static db: CounterDatabase;

  public static _initialize(db: CounterDatabase) {
      this.db = db;
  };

  public static getAllSettings() {
    return this.db.settings.toArray();
  }

  public static getSettingValue(name: string) {
    return this.db.settings.get({ name: name });
  }

  public static putSetting(setting: ISettings) {
    return this.db.settings.put(setting);
  }
}

export default SettingsAPI;
