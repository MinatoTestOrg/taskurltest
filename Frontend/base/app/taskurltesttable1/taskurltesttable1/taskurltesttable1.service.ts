import { Injectable,inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from '@baseapp/base.service';
import { Taskurltesttable1Base} from './taskurltesttable1.base.model';
import { Taskurltesttable1ApiConstants } from './taskurltesttable1.api-constants';


@Injectable({
  providedIn: 'root'
})
export class Taskurltesttable1Service {

public baseService = inject(BaseService);

  
	  getProtoTypingData(): Observable<any> {
	      const subject:Observable<Taskurltesttable1Base> = new Observable(observer => {
	        const data =  require('base/assets/sample-data/taskurltesttable1.json');
	        observer.next(data as Taskurltesttable1Base);
	      });
	      return subject;
	  }
	 
		getProtoTypingDataById(...args: any): Observable<any> {
	    const params = args[0];
	    const key = Object.keys(params);
	    let foundData: boolean = false;
	    let data: any = {};
	    const subject: Observable<Taskurltesttable1Base> = new Observable(observer => {
	      const response = require('base/assets/sample-data/taskurltesttable1.json');
	      response.map((o: any) => {
	        foundData = key.every((d: string) => {
	          return o[d] == params[d];
	        })
	        if (foundData) {
	          data = o;
	        }
	      })
	      observer.next(data as Taskurltesttable1Base);
	    });
	    return subject;
	  }

    getById(...args: any):Observable<any>{
        const serviceOpts = Taskurltesttable1ApiConstants.getById;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.get(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    create(...args: any):Observable<any>{
        const serviceOpts = Taskurltesttable1ApiConstants.create;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.post(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    update(...args: any):Observable<any>{
        const serviceOpts = Taskurltesttable1ApiConstants.update;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.put(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    autoSuggestService(...args: any):Observable<any>{
        const serviceOpts = Taskurltesttable1ApiConstants.autoSuggestService;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.get(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    getDatatableData(...args: any):Observable<any>{
        const serviceOpts = Taskurltesttable1ApiConstants.getDatatableData;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.post(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
    delete(...args: any):Observable<any>{
        const serviceOpts = Taskurltesttable1ApiConstants.delete;
        const params= args[0];
        
        const subject = new Observable(observer => {
          this.baseService.delete(serviceOpts,params).subscribe((response: any) => {
            observer.next(response);
          },
          (err:any) => {
            observer.error(err);
          });
        });
    
        return subject;
    }
}
