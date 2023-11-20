import { Injectable,inject } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AppGlobalService } from '@baseapp/app-global.service';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AppHomeBaseService {

  public appGlobalService = inject(AppGlobalService);
 
  

  config : any = [ {
  "expanded" : false,
  "folder" : true,
  "data" : {
    "properties" : { }
  },
  "children" : [ {
    "data" : {
      "id" : "c7e71b91-fb9b-41b3-a6f2-b149e8d61b5d",
      "sysGen" : false,
      "defaultField" : false,
      "properties" : {
        "tileType" : "type_1"
      },
      "new" : false
    },
    "children" : [ {
      "data" : {
        "id" : "d912c962-5d6c-424b-82f5-16948420e319",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 1",
          "data" : "homeTile1",
          "field" : "homeTile",
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 1",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "d2b8c517-b2d0-4455-a42b-ddf11c878332",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 2",
          "data" : "homeTile2",
          "field" : "homeTile",
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 2",
      "type" : "homeTile",
      "selected" : false
    }, {
      "data" : {
        "id" : "642bbba7-1d51-4e13-a1ee-f8682a8b6ba4",
        "sysGen" : false,
        "defaultField" : false,
        "properties" : {
          "label" : "Tile 3",
          "data" : "homeTile3",
          "field" : "homeTile",
          "class" : "home-tile"
        },
        "new" : false
      },
      "expanded" : false,
      "folder" : false,
      "key" : "homeTile",
      "title" : "Tile 3",
      "type" : "homeTile",
      "selected" : false
    } ],
    "expanded" : false,
    "folder" : true,
    "key" : "homePage",
    "title" : "Home Page",
    "type" : "homePage",
    "selected" : false
  } ],
  "title" : "Page",
  "type" : "page",
  "key" : "page",
  "selected" : false
} ];
  
 currentUserRoles = (this.appGlobalService.getCurrentUserData()).userRoles;
 checkAccess: any = (o: string) => this.currentUserRoles.includes(o);

  public getLandingPageData() {
    let accessibleData: any = {
      children: []
    };
    const data: any = (this.config.find((t: { type: string; }) => t.type === "page"))?.children[0];
    if (!environment.prototype) {
      data.children?.filter((tileProps: any) => {
        const tile = tileProps.data?.properties;
        if (tile.accessControl && tile.accessControl.length > 0) {
          if (tile.accessControl.some(this.checkAccess))
            accessibleData.children.push(tileProps);
        }
        else {
          accessibleData.children.push(tileProps);
        }
      })
      accessibleData = { ...data, ...accessibleData };
    }
    else {

      accessibleData = data;
    }
    return accessibleData;
  }
}