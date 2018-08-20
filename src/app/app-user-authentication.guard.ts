import { CanActivate, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { isGeneratedFile } from "@angular/compiler/src/aot/util";
import { Injectable } from "@angular/core";

@Injectable()
export class MyAuthGuard implements CanActivate {

    canActivate(activatedRoute : ActivatedRouteSnapshot , state: RouterStateSnapshot) : boolean {
        console.log("URL: " , activatedRoute.url[0].path)
        if(activatedRoute.url[0] != null && activatedRoute.url[0].path === 'loadMenus') {
            return false;
        } else {
            return true;
        }
    }
}