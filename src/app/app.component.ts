import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BrewerieService } from './services/brewerie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brewerieForm : any= FormGroup
  brewerieList : any = [];
  title = 'Brewerie Project';

  constructor(
    public _brewerieService : BrewerieService,
    public _formBuilder : FormBuilder
  ){}
  ngOnInit(){
    this.brewerieForm = this._formBuilder.group({
      search : ['']
    })
    this.getBrewerieList();
  }

  getBrewerieList(){
    this._brewerieService.breweriesList().subscribe(res=>{
      this.brewerieList = res;
    })
  }

  filterBrewerie(event : any){
    if(event.target.value == ''){
      this.getBrewerieList()
    }else{
      this.brewerieList = [];
      this._brewerieService.searchBreweriesList(event.target.value).subscribe(res=>{
        this.brewerieList = res
      })
    }
  }
}
