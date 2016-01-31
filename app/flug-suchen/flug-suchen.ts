import {Component} from 'angular2/core';
import {IFlug} from '../flug';
import {FlugService} from '../services/flug-service';

@Component({
    selector: 'flug-suchen', 
    templateUrl: 'app/flug-suchen/flug-suchen.html',
    // providers: [FlugService]
})
export class FlugSuchen { 
    
    constructor(
        private flugService: FlugService) {
    }
    
    von = "Graz";
    nach = "Hamburg";
    selectedFlug: IFlug;
    fluege: Array<IFlug> = [];

    search() {
        
      this.flugService
          .find(this.von, this.nach)
          .subscribe( 
              (fluege) => {
                this.fluege = fluege;
              },
              (err) => {
                console.debug(<any>err);   
              });
    }
    
    select(flug: IFlug) {
        this.selectedFlug = flug;
    }

}
