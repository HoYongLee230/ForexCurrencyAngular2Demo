import { Http } from '@angular/http';
import "rxjs/Rx";
import { CurrencyRate } from './currencyrate.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyListService {

    constructor( private http: Http ) { }

    getCurrencyData() {
        return this.http.get( '/currencylist' )
            .map( response => response.json() );
    }
}