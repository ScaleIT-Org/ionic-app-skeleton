# Ionic App Skeleton Demo
## Components
A new component can be [generated](https://ionicframework.com/docs/cli/generate/) via
```sh
ionic generate component <name> --no-module
```
Generating a new module is not necessary, mostly they can be included in existing ones.
That's why ```--no-module``` here.

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
