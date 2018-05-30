import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DebugElement } from "@angular/core";


import { AppComponent } from './app.component';
import { CustomMaterialModule } from "./shared/modules/custom-material/custom-material.module";


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CustomMaterialModule
      ]
    }).compileComponents().then( () => {

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;

    });
  }));

it(`should receive 'ApiRequestRequestPaymentModel'`, async ( ( request ) => {


} ));




  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
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
