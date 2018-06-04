import { TestBed, async, ComponentFixture, inject, tick, fakeAsync, flush } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from "@angular/core";

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { Routes, ActivatedRoute, Router, Params } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from './app.component';
import { CustomMaterialModule } from "./shared/modules/custom-material/custom-material.module";
import { routes } from './app.routing';
import { Location } from '@angular/common';
import { ActivatedRouteStub } from './mocks/activated-route-stub';
import { Subject } from 'rxjs';

import { SelectMenuTestHelper } from "./shared/test/select-menu-test.helper";


xdescribe('AppComponent', () => {

  let location: Location;
  let router: Router;

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let params: Subject<Params>;

  let activatedRoute: any;

  let de: DebugElement;
  let el: HTMLElement;


  let options: HTMLElement[];
  let selectMenu: SelectMenuTestHelper;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
        RouterTestingModule.withRoutes(routes)
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    }).compileComponents().then( () => {

      router = TestBed.get(Router);
      location = TestBed.get(Location);

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;

    });
  }));

  beforeEach(() => {


    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    activatedRoute.testParamMap = {params: 'tokenUDE'};

  });

  beforeEach(() => {
    selectMenu = new SelectMenuTestHelper(fixture);
    // component.countries = [
    //   { code: 'COL', name: 'Colombia' },
    //   { code: 'BRA', name: 'Brazil' }
    // ];
});

beforeEach(fakeAsync(() => {
  selectMenu.triggerMenu();
  options = selectMenu.getOptions();
}));

afterEach(() => {
  selectMenu.cleanup();
});


  it('should create the app', async( inject([HttpClient, HttpTestingController], ( http: HttpClient, backend: HttpTestingController ) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })));

  /**
   * Probar la navegacion por rutas
   */
  it(`should navigate to "/"`, fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));


  /**
   * Verifica que llegue un tokenUDE por POST
   */
it(`should receive 'tokenUDE'`, fakeAsync ( ( ) => {

  activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
  activatedRoute.testQueryParamMap =  { 'tokenUDE': 'tokenUDE1234' };

  //component.ngOnInit();

  //fixture.detectChanges();
  //params.next({ 'tokenUDE': 'tokenUDE12345' } )
  tick();

  expect(component.tokenUDE).toBe('tokenUDE1234');

} ));





/**
 * Valida el campo pais
 */
it(`form should be invalid`, async( () => {

  // component.dataPayForm.controls['country'].setValue('');

  // expect(component.dataPayForm.valid).toBeFalsy();

}));



// describe('Select Menu changes', () => {
  // let options: HTMLElement[];
  // let selectMenu: SelectMenuTestHelper;

  // beforeEach(() => {
  //     selectMenu = new SelectMenuTestHelper(fixture);
  //     component.countries = [
  //         { code: 'COL', name: 'Colombia' }
  //     ];
  // });

  // beforeEach(fakeAsync(() => {
  //     selectMenu.triggerMenu();
  //     options = selectMenu.getOptions();
  // }));

  // afterEach(() => {
  //     selectMenu.cleanup();
  // });

  it('should disable user check boxes if user security option inherit is selected', fakeAsync(() => {

    fixture.detectChanges();

    console.log(options );

      options.forEach((option: HTMLElement) => {
          selectMenu.selectOption(option);

          const checked = fixture.debugElement.query(By.css('.mat-select')).nativeElement;

          //console.log(option.innerText);

          // if (option.innerText.trim() ===  ) {
          //     expect(checked.disabled).toEqual(true);
          // }

          // if (option.innerText.trim() === 'Colombia') {
          //     expect(checked.disabled).toEqual(true);
          // } else {
          //     expect(checked.disabled).toEqual(false);
          // }


      });
  }));
// });



  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to apis!');
  // }));


});
