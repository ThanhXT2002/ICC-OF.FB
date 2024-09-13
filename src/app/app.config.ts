import { provideClientHydration } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(
      BrowserAnimationsModule,
    )
  ]
};
