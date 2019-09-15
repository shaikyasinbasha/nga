
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyboardComponent } from './keyboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

describe('Component: KeyboardComponent', () => {

    let component: KeyboardComponent;
    let fixture: ComponentFixture<KeyboardComponent>;
    let store: MockStore<{ dispValue: string }>;
    const initialState = { dispValue: 'Text' };
  
    beforeEach(() => {
  
      TestBed.configureTestingModule({
        declarations: [KeyboardComponent],
        providers: [
          provideMockStore({ initialState })
        ],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      });
  
      // create component and test fixture
      fixture = TestBed.createComponent(KeyboardComponent);
  
      // get test component from the fixture
      component = fixture.componentInstance;
    });

    it('should create the keyboard', () => {
        expect(component).toBeTruthy();
    });

    it(`should 12 buttons'`, () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('button')[0].textContent).toContain('1');
        expect(compiled.querySelectorAll('button')[9].textContent).toContain('#');
    });

    it(`should button click event'`, () => {
        fixture.detectChanges();

        const button = fixture.debugElement.query(By.css('button'));
        button.triggerEventHandler('click', '1');
        fixture.detectChanges();   
        expect(component.keyPressHandler).toHaveBeenCalled();   
    });

    it(`should back button click event'`, () => {
        fixture.detectChanges();

        const button = fixture.debugElement.queryAll(By.css('button'))[11];
        button.triggerEventHandler('click', 'BACK');
        fixture.detectChanges();  
        expect(component.keyBackHandler).toHaveBeenCalled();     
    });
  });