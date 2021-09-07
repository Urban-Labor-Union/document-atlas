# Tesing Components with a dependency

Add providers array in `TestBed.configureTestingModule`
e.g. 
```ts
beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [LoginComponent],
    providers: [
      { provide: AuthService, useValue: authServiceStub },
      { provide: Router, useValue: routerSpy }
    ]
  })
    .compileComponents();
});
```

Where authServiceStub and routerSpy are dummy services to emulate the services which will contain its state and methods 
e.g.
```ts
const authServiceStub: Partial<AuthService> = {
  login: () => of(true)
};
```

And router requires following stub if you are using Jest
```ts
const routerSpy = {
  navigateByUrl: (): void => { }
}
  
const spy = jest.spyOn(routerSpy, 'navigateByUrl');
```

And then inside the it block use the following code to test navigate method of router

```ts
expect(spy).toHaveBeenCalledWith('/', { replaceUrl: true })
```
