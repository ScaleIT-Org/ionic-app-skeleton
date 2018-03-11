import {Injectable} from '@angular/core';

/*
  Generated class for the EnvironmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnvironmentProvider {
  private _isLocal: boolean = true;

  getUrl() {
    if (this.isLocal) {
      return "/assets/data/";
    }
    return "http://example.com";
  }

  get isLocal(): boolean {
    return this._isLocal;
  }
}
