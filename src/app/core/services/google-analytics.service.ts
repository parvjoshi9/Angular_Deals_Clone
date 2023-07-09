import { Injectable } from '@angular/core';
declare const gtag: any;
const GOOGLE_ANALYTICS_ID = 'UA-80363801-4';
@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  gtag: any;
  constructor() {
    if (typeof gtag !== 'undefined') {
      this.gtag = gtag;
    }
  }SELECTED

  public sendPageView(url: string) {
    if (!this.gtag) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    this.gtag('config', GOOGLE_ANALYTICS_ID, { page_path: url });
  }
}
