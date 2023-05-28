import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CytoscapeExplorerComponent } from './cytoscape-explorer/cytoscape-explorer.component';
import { CytoscapeGraphComponent } from './cytoscape-graph/cytoscape-graph.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphFilterComponent } from './graph-filter/graph-filter.component';
import { GraphVisualizationComponent } from './graph-visualization/graph-visualization.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { GraphService } from './graph.service';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'graph', component: CytoscapeExplorerComponent },
  {path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CytoscapeExplorerComponent,
    CytoscapeGraphComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    GraphFilterComponent,
    GraphVisualizationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
