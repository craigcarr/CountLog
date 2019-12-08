import CounterDatabase, { ISetting } from "../CounterDatabase";

export default class SettingsAPI {
  private db: CounterDatabase;

  constructor(db: CounterDatabase) {
      this.db = db;
  }

  public setDarkModeCssVariables(setting: ISetting) {
    if (setting.name === 'isDarkModeEnabled') {
      if (setting.value === true) {
        document.documentElement.style.setProperty("--themeBackgroundColor", "#555555");
        document.documentElement.style.setProperty("--themeColor", "white");
      } else {
        document.documentElement.style.setProperty("--themeBackgroundColor", "white");
        document.documentElement.style.setProperty("--themeColor", "black");
      }
    }
  }

  public getAllSettings() {
    return this.db.settings.toArray();
  }

  // TODO This name is not correct, as you don't only receive the value.
  public getSettingValue(name: string) {
    return this.db.settings.get({ name: name });
  }

  public putSetting(setting: ISetting) {
    this.setDarkModeCssVariables(setting);
    return this.db.settings.put(setting);
  }
}
