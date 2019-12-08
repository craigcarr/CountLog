import CounterDatabase, { ISettings } from "../CounterDatabase";

export default class SettingsAPI {
  private db: CounterDatabase;

  constructor(db: CounterDatabase) {
      this.db = db;
  }

  public getAllSettings() {
    return this.db.settings.toArray();
  }

  public getSettingValue(name: string) {
    return this.db.settings.get({ name: name });
  }

  public putSetting(setting: ISettings) {
    return this.db.settings.put(setting);
  }
}
