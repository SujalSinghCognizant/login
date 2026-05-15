import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token="kjenjvevvsjknsncsccnjcscsncscsnjvevjveveve";
  const modified=req.clone({
    setHeaders:{
      authorisation:`Bearer ${token}`
    }
  })
  return next(modified);
};
