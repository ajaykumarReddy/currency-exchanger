import { bootstrapApplication } from '@angular/platform-browser';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';

// import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(withJsonpSupport())],
}).catch((err) => console.log(err));

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
