import { InjectionToken } from "@angular/core";

export const App_Config_Token = new InjectionToken<AppConfig>("APP_CONFIG")

export interface AppConfig {
    bugUrl : string
}

export const AppConfiguration : AppConfig = {
    bugUrl : "http://localhost:3000/bugs"
}
