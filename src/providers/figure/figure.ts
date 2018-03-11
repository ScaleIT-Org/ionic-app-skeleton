import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {EnvironmentProvider} from "../environment/environment";
import {Observable} from "rxjs/Observable";

/*
  Generated class for the FigureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FigureProvider {

  private url: string;

  // constructor parameters are automatically set as class attributes
  // if a visibility parameter (here: private) is provided
  constructor(private http: HttpClient, env: EnvironmentProvider) {
    // Use environment provider to get local/non-local profile
    if (env.isLocal) {
      this.url = env.getUrl() + "figures.json"; // fetch from json file
    } else {
      this.url = env.getUrl() + "figures"; // fetch from server (which also returns json)
    }
  }

  // Reactive programming: Provide an observable for the figures
  getFigures(): Observable<Figure[]> {
    return this.http.get<Figure[]>(this.url);
  }
}

export class Figure {
  name: string;
  type: string;
}
