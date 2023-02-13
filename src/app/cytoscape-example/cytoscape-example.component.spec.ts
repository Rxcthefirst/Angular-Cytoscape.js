import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CytoscapeExampleComponent } from './cytoscape-example.component';

describe('CytoscapeExampleComponent', () => {
  let component: CytoscapeExampleComponent;
  let fixture: ComponentFixture<CytoscapeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CytoscapeExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CytoscapeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
