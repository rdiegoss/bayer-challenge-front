import { Component, OnInit } from '@angular/core';
import { Farmer } from '../../model/farmer/farmer.component';
import { FarmerSearchProvider } from '../../farmer-search-abstract-provider/farmer-search-abstract-provider.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private readonly labelTo = 'Destinatário';
  private readonly labelDoc = 'Doc #';
  private readonly labelAddress = 'Endereço';
  private farmers: Farmer[] = [];
  private errorMsg = '';

  constructor(public myFarmerSearchProvider:FarmerSearchProvider) { }
  
  mySelectedFarmer = ($event) => {
    $event.subscribe( response => {
      if (!response.data.length) {
        this.errorMsg = 'Name or Doc not found.'
      } else {
        response.data.map( x => { x['address'] = `${x['address.street']} ${x['address.address']}}`});
        this.errorMsg = '';
        this.farmers = response.data;
      }
      
    })
  }

}
