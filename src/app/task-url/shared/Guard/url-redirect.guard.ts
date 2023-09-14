import { Injectable } from '@angular/core';
import { CanActivateFn,CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
 export class urlRedirectGuard implements CanActivate  {
  shouldContinue = true;

  constructor(private router: Router) {}
 
  canActivate(){
    
    let urlParams = new URLSearchParams(window.location.search);
    let paramsPage= urlParams.get("page");
    
    let allParamas = "?"+location.href.split('?')[1];

    if(this.shouldContinue){
      if(paramsPage == 'condition' && urlParams.has("ArtifactID"))
        {
          this.router.navigateByUrl("edit-condition"+allParamas);
          this.shouldContinue= false
          return true;
        }else if(paramsPage == 'condition' && !urlParams.has("ArtifactID"))
        {
          this.router.navigateByUrl("new-condition"+allParamas);
          this.shouldContinue= false
          return true;
        }
    
        if (paramsPage == 'logic' && urlParams.has("ArtifactID"))
        {
          this.router.navigateByUrl("edit-logic"+allParamas)
          this.shouldContinue= false
          return true;
        }else if(paramsPage == 'logic' && !urlParams.has("ArtifactID"))
        {
          this.router.navigateByUrl("new-logic"+allParamas);
          this.shouldContinue= false
          return true;
        }
        return true;
      }
      return true;
    }
    
};
