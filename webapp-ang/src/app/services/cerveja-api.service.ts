import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CervejaApiService {

  constructor(
    private http: HttpClient
  ) { }

  getCervejas() {
    console.log('BUSCOU CERVEJAS');

    return this.http.get('https://api.punkapi.com/v2/beers')
      .map(cervejas => {
        console.log('cervejas encontradas:', cervejas);
        return cervejas;

      });
  }

}
