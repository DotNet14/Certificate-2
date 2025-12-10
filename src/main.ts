import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Trade } from './app/trade/trade';

bootstrapApplication(Trade, appConfig)
  .catch((err) => console.error(err));
