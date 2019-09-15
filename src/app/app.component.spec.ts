import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from "@angular/platform-browser";

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  /* it('should onNavHandleEvent', async(() => {
    spyOn(component, 'onNavHandleEvent');
  
    let navs = fixture.debugElement.nativeElement.querySelector('nav');
    navs.click();
  
    fixture.whenStable().then(() => {
      expect(component.onNavHandleEvent).toHaveBeenCalled();
    });
  }));

  it('should handleMenuClick', async(() => {
    spyOn(component, 'handleMenuClick');
  
    let items = fixture.debugElement.nativeElement.querySelector('.itemmenu');
    items.click();
  
    fixture.whenStable().then(() => {
      expect(component.handleMenuClick).toHaveBeenCalled();
    });
  })); */
  
});
