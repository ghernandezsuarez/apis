import { TestBed, async, ComponentFixture, inject, tick, fakeAsync } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from "@angular/core";
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


describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let params: Subject<Params>;

  let activatedRoute: any;

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
        CustomMaterialModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    }).compileComponents().then( () => {

      router = TestBed.get(Router);
      location = TestBed.get(Location);

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;



      // router.initialNavigation();

    });
  }));

  beforeEach(() => {


    activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
    activatedRoute.testParamMap = {params: 'tokenUDE'};

  })






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

it(`should receive 'tokenUDE'`, fakeAsync ( ( ) => {

  activatedRoute = fixture.debugElement.injector.get(ActivatedRoute) as any;
  activatedRoute.testQueryParamMap =  { 'tokenUDE': 'tokenUDE1234' };

  //component.ngOnInit();

  //fixture.detectChanges();
  //params.next({ 'tokenUDE': 'tokenUDE12345' } )
  tick();

  console.log(component.title);
  console.log(activatedRoute.testParamMap);


  expect(component.tokenUDE).toBe('tokenUDE1234');


} ));








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
