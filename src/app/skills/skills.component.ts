import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  arrSkills:{name:string;value:string;}[]= [{name:"Node",value:"70%"},{name:"mongodb",value:"50%"},{name:"Mysql",value:"60%"}]
  arryFocas:string[]=["Backend","DataBase","Frontend"]

}
