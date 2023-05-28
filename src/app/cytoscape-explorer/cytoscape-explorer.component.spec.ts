import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CytoscapeExplorerComponent } from './cytoscape-explorer.component';

describe('CytoscapeExplorerComponent', () => {
  let component: CytoscapeExplorerComponent;
  let fixture: ComponentFixture<CytoscapeExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CytoscapeExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CytoscapeExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
