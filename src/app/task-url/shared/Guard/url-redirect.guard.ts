import { Injectable } from '@angular/core';
import { CanActivateFn,CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
 export class urlRedirectGuard implements CanActivate  {
  constructor(private router: Router) { }

  canActivate(){
    // get params from url 
    let urlParams = new URLSearchParams(window.location.search);
    let paramsPage= urlParams.get("page");
    console.log("1");
    
    if(paramsPage == 'condition' && urlParams.has("ArtifactID"))
    {
      this.router.navigateByUrl("edit-condition?"+urlParams);
      console.log("2");
      return false;
    }else if(paramsPage == 'condition' && !urlParams.has("ArtifactID"))
    {
      this.router.navigateByUrl("new-condition?"+urlParams);
      console.log("3");
      return false;
    }

    if (paramsPage == 'logic' && urlParams.has("ArtifactID"))
    {
      this.router.navigateByUrl("edit-logic?"+urlParams);
      console.log("4");
      return false;
    }else if(paramsPage == 'logic' && !urlParams.has("ArtifactID"))
    {
      this.router.navigateByUrl("new-logic?"+urlParams);
      console.log("5");
      return false;
    }
    console.log("6");
    return false;
  }
  
};
