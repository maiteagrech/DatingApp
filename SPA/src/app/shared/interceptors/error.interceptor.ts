import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { NavigationExtras, Router } from "@angular/router";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                var validation404Response = error.error.errors;
                const modelTestErrors = [];
                for (const key in validation404Response) {
                  if (validation404Response[key]) {
                    modelTestErrors.push(validation404Response[key]);
                  }
                }
                throw modelTestErrors.flat();
              } else {
                console.log(error.statusText, error.status);
              }
              break;
            case 401:
              console.log(error.statusText, error.status);
              break;
            case 404:
              this.router.navigateByUrl("/authentication/404");
              break;
            case 500:
              const navigationExtras: NavigationExtras = {state: {error: error.error}};
              this.router.navigateByUrl("/authentication/500", navigationExtras);
              break;
            default: 
              console.error('Something unexpected went wrong');
              console.log(error);
              break;
          }
        }
        return throwError(error);
      })
    );
  }
}
