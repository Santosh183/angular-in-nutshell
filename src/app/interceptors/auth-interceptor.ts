import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    console.log(req.url);
    const authToken = 'Dummy Token';
    const newReq = req.clone({
        headers: req.headers.append('X-Authentication-Token', authToken), // adding auth header on each request. 
    });
    return next(newReq);
}
