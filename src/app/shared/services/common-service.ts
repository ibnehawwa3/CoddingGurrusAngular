import { Injectable } from '@angular/core';
import { HttpService } from './http-service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ApiResponse } from '../interfaces/response';
import { AppRoutes } from '../routes/AppRoutes';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiEndPoints } from '../routes/ApiEndpoints';
import { ResponseStatus } from '../enum/enums';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  apiEndPoints = ApiEndPoints;
  appRoutes = AppRoutes;
  constructor(public routerService: Router, public spinnerService: NgxSpinnerService, public httpService: HttpService, public translate: TranslateService
    , public toasterService: ToastrService) {

  }

  Update<T>(apiUrl: string, id: any, data: any, navigateUrl?: string | null,): ApiResponse<T> {
    this.spinnerService.show();
    this.httpService.put<ApiResponse<T>>(apiUrl, data).subscribe(response => {
      if (response.data) {
        if (response.status == ResponseStatus.Success) {
          this.translate.get('DataUpdatedSuccess').subscribe((translatedValue: string) => {
            this.toasterService.success("", translatedValue);
          });
          this.routerService.navigate([navigateUrl]);
        }
        return response;
      }
      else {
        this.translate.get('DataUpdatedFailed').subscribe((translatedValue: string) => {
          this.toasterService.error("", translatedValue);
        });
        return response;
      }
    });
    this.spinnerService.hide();
    return {} as ApiResponse<T>;
  }

  Delete<T>(apiUrl: string, id: any, navigateUrl?: string | null,): Promise<ApiResponse<T>> {
      this.spinnerService.show();


  return new Promise<ApiResponse<T>>((resolve, reject) => {
      this.httpService.delete<ApiResponse<T>>(apiUrl, id)
          .subscribe(response => {


                  this.spinnerService.hide();
                  this.translate.get('DataDeletedSuccess').subscribe((translatedValue: string) => {
                      this.toasterService.success("", translatedValue);
                  });

              resolve(response);
          }, error => {
              this.spinnerService.hide();
              this.translate.get('DataDeletedFailed').subscribe((translatedValue: string) => {
                  this.toasterService.error("", translatedValue);
              });
              reject(error);
          });
  });
  }

  setUserInformation(userName: string, themeType: string, IsSuperUser: boolean) {
    localStorage.setItem('userName', userName)
    localStorage.setItem('themeType', themeType)
    localStorage.setItem('isSuperUser', IsSuperUser.toString())
  }

  getUserName() {
    return localStorage.getItem('userName')
  }

  getThemeType() {
    return localStorage.getItem('themeType')
  }

  getToken() {
    return localStorage.getItem('token')
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  isloggedOut() {
    return localStorage.removeItem('token')
  }

  storeToken(tokenValue: string) {
    this.isloggedOut();
    localStorage.setItem('token', tokenValue)

  }

  //setCurrentUser(currentUser: IUser) {
  //    this.subject.next(currentUser);
  //    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  //}


  setLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public Add<T>(apiUrl: string, data: any, navigateUrl?: string | null, navigateParams?: any, messageKey?: string | null, saveMsg = false, pageUrl = ""): ApiResponse<T> {
    this.spinnerService.show();
   this.httpService.post<ApiResponse<T>>(apiUrl, data).subscribe(response => {
      if (response.data) {

        if (response.status == ResponseStatus.Success) {
          this.translate.get('DataSaved').subscribe((translatedValue: string) => {
            this.toasterService.success("", translatedValue);
          });
          this.spinnerService.hide();
          this.routerService.navigate([navigateUrl]);
        }
        return response;
      }
      else {
        this.spinnerService.hide();
        this.translate.get('DataSavedFailed').subscribe((translatedValue: string) => {
          this.toasterService.error("", translatedValue);
        });
        return response
      }
    });
    return {} as ApiResponse<T>;
   }

   public Navigate(route: string) {
    this.routerService.navigateByUrl(route);
  }

  //public getById<T>(apiUrl: string, id: number): Promise<ApiResponse<T>> {
  //    this.spinnerService.show();
  //    //return new Promise<ApiResponse<T>>((resolve, reject) => {
  //    //    this.httpService.getById<ApiResponse<T>>(apiUrl, id)
  //    //        .subscribe(response => {
  //    //            this.spinnerService.hide();
  //    //            resolve(response);
  //    //        }, error => {
  //    //            this.spinnerService.hide();
  //    //            reject(error);
  //    //        });
  //    //});
  //}


  //public Get<T>(apiUrl: string, showLoader?: boolean | undefined, token?: string | undefined): Promise<ApiResponseArray<T>> {
  //    this.spinnerService.show();

  //    //return new Promise<ApiResponseArray<T>>((resolve, reject) => {
  //    //    this.httpService.get<ApiResponseArray<T>>(apiUrl)
  //    //        .subscribe(response => {

  //    //            this.spinnerService.hide();
  //    //            resolve(response);
  //    //        }, error => {
  //    //            this.spinnerService.hide();
  //    //            reject(error);
  //    //        });
  //    //});
  //}
}
