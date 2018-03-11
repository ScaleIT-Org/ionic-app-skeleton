# Ionic App Skeleton Demo
## Components
A new component can be [generated](https://ionicframework.com/docs/cli/generate/) via
```sh
ionic generate component <name> --no-module
```
Generating a new module is not necessary, mostly they can be included in existing ones.
That's why `--no-module` is provided here.

To add your newly created component to your existing module, you have to add it to the ```@NgModule``` as follows:
```typescript
@NgModule({
  declarations: [
    MyGeneratedComponent
  ],
  imports: [
    // you need to use IonicModule.forRoot() method to 'provide' ionic directives to your components
    IonicModule.forRoot(MyGeneratedComponent)
  ],
  <...>
})
``` 
`IonicModule.forRoot(<component>)` is important, otherwise you won't be able to use the tag declarations in other modules.

## Draggable elements
Angular2-Draggable is used to enable draggable elements.

It is installed via 
```sh
 npm install angular2-draggable --save
```

To enable it for any DOM element add the attribute ```ngDraggable``` to the HTML tag declaration.

### Example

```html
<button ion-button ngDraggable>
    My Draggable button
</button>
```

## Providers (Services)
Providers can be used to provide data, such as Objects fetched from a REST API as JSON.
Used like this they provide a good form of abstraction to the HTTP calls, 
so it is also possible to fetch locally saved JSON data for testing purposes.

### Example:
```typescript
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
```

Use the figure provider in your component:
```typescript
export class HomePage {

  hoomans: string[];
  ais: string[];

  constructor(private figureProvider: FigureProvider) {
    // use an observer so attributes get updated when data is available,
    // otherwise the attributes would be undefined on start
    let figureObserver = this.figureProvider.getFigures();
    
    figureObserver
      .subscribe(data => {
        this.hoomans = data
          .filter(x => x.type === 'Human') // get all humans
          .map(x => x.name); // get only the name string;
      });
    figureObserver
      .subscribe(data => {
        this.ais = data
          .filter(x => x.type === 'AI') // get all AIs
          .map(x => x.name);
      });
  }
}
```
