import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request', req.method, req.url);
  console.log('authInterceptor');

  const headers = req.headers
    .set('Content-Type', 'application/json')
    .set('apikey', environment.API_KEY);

  req = req.clone({
    headers,
  });

  return next(req).pipe(tap((resp) => console.log('response', resp)));
};
