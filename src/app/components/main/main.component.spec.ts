import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from "@angular/core";

import { MainComponent } from './main.component';
import { CustomMaterialModule } from "../../shared/modules/custom-material/custom-material.module";

import { SelectMenuTestHelper } from "../../shared/test/select-menu-test.helper";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let de: DebugElement;
  let el: HTMLElement;

  let options: HTMLElement[];
  let selectMenu: SelectMenuTestHelper;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
      ]
    })
    .compileComponents().then( () => {

      fixture = TestBed.createComponent(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;

    } )
    
    ;
  }));

  beforeEach(() => {

    selectMenu = new SelectMenuTestHelper(fixture);

    fixture.detectChanges();
  });

  beforeEach(fakeAsync(() => {
    selectMenu.triggerMenu();
    options = selectMenu.getOptions();
  }));

  afterEach(() => {
    selectMenu.cleanup();
  });


  /** 
   * Unit Test Load main.component 
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  /**
   * Valida el campo Country
   */
  it('Validate country selection', fakeAsync ( () => {

    fixture.detectChanges();

    //options.f

  } ) )

});
