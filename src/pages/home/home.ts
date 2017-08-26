import { Component } from '@angular/core';
import { GithubProvider } from '../../providers/github/github'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  infoUser: any =[]
  constructor(private _github: GithubProvider) {

  }
  funcionDojo(){
    console.log("dojo ionic")
    this._github.buscarUsuario('DanielPelaezP').then((data)=>{
    this.infoUser=data
    console.log(this.infoUser)  
    })

  }

}
