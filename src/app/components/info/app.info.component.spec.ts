import { AppInfoComponent } from "./app.info.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Component: AppInfoComponent', () => {

    let component: AppInfoComponent;
    let fixture: ComponentFixture<AppInfoComponent>;
  
    beforeEach(() => {
  
      TestBed.configureTestingModule({
        declarations: [AppInfoComponent]
      });
  
      // create component and test fixture
      fixture = TestBed.createComponent(AppInfoComponent);
  
      // get test component from the fixture
      component = fixture.componentInstance;
    });

    it('should create the appinfo', () => {
        expect(component).toBeTruthy();
    });

    it(`should have as title 'Angular – CSS – ngrx'`, () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain('Angular – CSS – ngrx');
    });
  });