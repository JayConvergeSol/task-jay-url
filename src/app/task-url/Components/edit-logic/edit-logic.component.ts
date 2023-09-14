import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-logic',
  templateUrl: './edit-logic.component.html',
  styleUrls: ['./edit-logic.component.css']
})
export class EditLogicComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // get params from url 
    let urlParams = new URLSearchParams(window.location.search);
    let paramsPage= urlParams.get("page");
    if(paramsPage == 'condition' && urlParams.has("ArtifactID"))
    {
      this.router.navigateByUrl("edit-condition?"+urlParams);
    }else if(paramsPage == 'condition' && !urlParams.has("ArtifactID"))
    {
      this.router.navigateByUrl("new-condition?"+urlParams);
    }

    if (paramsPage == 'logic' && urlParams.has("ArtifactID"))
    {
      this.router.navigateByUrl("edit-logic?"+urlParams);
    }else if(paramsPage == 'logic' && !urlParams.has("ArtifactID"))
    {
      this.router.navigateByUrl("new-logic?"+urlParams);
    }
    
  }
}
