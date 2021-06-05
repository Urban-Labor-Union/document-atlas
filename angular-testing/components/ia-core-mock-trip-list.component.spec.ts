import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IaCoreMockTripListComponent } from './ia-core-mock-trip-list.component';

fdescribe('IaCoreMockTripListComponent', () => {
  let component: IaCoreMockTripListComponent;
  let fixture: ComponentFixture<IaCoreMockTripListComponent>;

  // beforeAll(() => {}) // <- initializer which is run only once - hold properties common to all test cases

  beforeEach(async () => {
    await TestBed.configureTestingModule({ // <- prerequisites for this component to work standalone
      imports: [RouterTestingModule],
      declarations: [IaCoreMockTripListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreMockTripListComponent); // TestBed as a module is created on line 13 | TestBed component instance is created on line 21
    component = fixture.componentInstance; // line 7 is defined here - analogous to new IaCoreMockTripListComponent()
    component.tripList = [{}]; // <- when an initial value for a function is required
    fixture.detectChanges(); // <- execute a CD cycle
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // <- refer docs
  });

  it('should empty trip list on foo()', () => {
    component.foo();
    expect(component.tripList).toEqual([null, undefined]); // <- toEqual performs deep comparison
    expect(component.bar).toHaveBeenCalled(); // <- only the function signature must be written here
  });

  // afterEach(() => {}) // <- refer docs
});
