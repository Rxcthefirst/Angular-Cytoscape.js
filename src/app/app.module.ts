import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CytoscapeExampleComponent } from './cytoscape-example/cytoscape-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CytoscapeExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
