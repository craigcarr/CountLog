import CounterDatabase, { ISetting, SettingName } from "../CounterDatabase";
import LoggingAPI from "./LoggingAPI";
import { IPromise } from "q";

export default class SettingsAPI {
  private db: CounterDatabase;
  private loggingApi: LoggingAPI;

  constructor(db: CounterDatabase, loggingApi: LoggingAPI) {
    this.db = db;
    this.loggingApi = loggingApi;
  }

  public setDarkModeCssVariables(setting: ISetting) {
    if (setting.name === SettingName.isDarkModeEnabled) {
      if (setting.value === true) {
        document.documentElement.style.setProperty("--themeBackgroundColor", "#333333");
        document.documentElement.style.setProperty("--themeHeaderBackgroundColor", "#000000");
        document.documentElement.style.setProperty("--themeColor", "white");
      } else {
        document.documentElement.style.setProperty("--themeBackgroundColor", "white");
        document.documentElement.style.setProperty("--themeHeaderBackgroundColor", "#333333");
        document.documentElement.style.setProperty("--themeColor", "black");
      }
    }
  }

  public getAllSettings() {
    return this.db.settings.toArray();
  }

  public getSettingByName(name: string): IPromise<ISetting> {
    return new Promise(resolve => {
      this.db.settings.get({ name: name }).then(setting => {
        if (setting === undefined) {
          // Define default settings if they do not exist yet.
          let newSetting: ISetting;

          if (name === SettingName.isDarkModeEnabled) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
              newSetting = {
                name: SettingName.isDarkModeEnabled,
                value: true,
              };
            } else {
              newSetting = {
                name: SettingName.isDarkModeEnabled,
                value: false,
              };
            }
          } else if (name === SettingName.isClickSoundEnabled) {
            newSetting = {
              name: SettingName.isClickSoundEnabled,
              value: false,
            };
          } else { // (name === SettingName.isVibrationEnabled) {
            newSetting = {
              name: SettingName.isVibrationEnabled,
              value: false,
            };
          }

          this.putSetting(newSetting).then(x => {
            resolve(newSetting);
          });
        } else {
          resolve(setting);
        }
      });
    });
  }

  public putSetting(setting: ISetting) {
    this.setDarkModeCssVariables(setting);
    return this.db.settings.put(setting);
  }
}
