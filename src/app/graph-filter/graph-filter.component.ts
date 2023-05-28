import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-graph-filter',
  templateUrl: './graph-filter.component.html',
  styleUrls: ['./graph-filter.component.css']
})
export class GraphFilterComponent {
  
@Input('activeTab') activeTab = 'tab1';

openTab(tabName: string) {
  this.activeTab = tabName;
}

}
