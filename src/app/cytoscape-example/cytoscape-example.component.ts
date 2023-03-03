import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as cytoscape from 'cytoscape';
import * as cxtmenu from 'cytoscape-cxtmenu';
import { elements } from '../models/elements'

cytoscape.use(cxtmenu);


@Component({
  selector: 'app-cytoscape-example',
  templateUrl: './cytoscape-example.component.html',
  styleUrls: ['./cytoscape-example.component.css']
})
export class CytoscapeExampleComponent implements AfterViewInit {
  @ViewChild('cy') graphContainer?: ElementRef

  export() {}

  searchQuery = '';
  searchResults: any[] = [];

  cy: any;

  elements = elements


  constructor() {}

  ngAfterViewInit() {
    this.cy = cytoscape({
      container: document.getElementById('cy'),
      elements: this.elements,
      boxSelectionEnabled: true,
      style: [
        {
          selector: 'node',
          style: {
            //'background-color': '#000',
            'label': 'data(label)',
            'font-size': '20rem',
            'text-outline-color': '#000',
            'width': '75rem',
            'height': '75rem',
            //'width': 'mapData(score, 0, .006769776522008331, 50, 60)',
            //'height': 'mapData(score, 0, .006769776522008331, 50, 60)',
            'content': 'data(name)',
            'text-valign': 'center',
            'text-halign': 'center',
            'text-outline-width': '1.5rem',
            'color': '#fff',
            'overlay-padding': '6rem',
            'z-index': 10,
            'border-width': '3rem'
          }
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'label': 'data(label)',
            'width': 2,
            //'line-color': '#9dbaea',
            'target-arrow-fill': 'filled',
            //'target-arrow-color': '#000000',
            'target-arrow-shape': 'triangle',
            'font-size': '12rem',
            'text-rotation': 'autorotate'
          }
        }
      ],
      
      minZoom: 0.5,
      maxZoom:0.75,
      

    });

    let options = {
      name: 'cose',
      // Called on `layoutready`
      ready: function(){},
    
      // Called on `layoutstop`
      stop: function(){},
    
      // Whether to animate while running the layout
      // true : Animate continuously as the layout is running
      // false : Just show the end result
      // 'end' : Animate with the end result, from the initial positions to the end positions
      animate: true,
    
      // Easing of the animation for animate:'end'
      animationEasing: undefined,
    
      // The duration of the animation for animate:'end'
      animationDuration: undefined,
    
      // A function that determines whether the node should be animated
      // All nodes animated by default on animate enabled
      // Non-animated nodes are positioned immediately when the layout starts
      //animateFilter: function ( node, i ){ return true; },
    
    
      // The layout animates only after this many milliseconds for animate:true
      // (prevents flashing on fast runs)
      animationThreshold: 250,
    
      // Number of iterations between consecutive screen positions update
      refresh: 20,
    
      // Whether to fit the network view after when done
      fit: true,
    
      // Padding on fit
      padding: 50,
    
      // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      boundingBox: undefined,
    
      // Excludes the label when calculating node bounding boxes for the layout algorithm
      nodeDimensionsIncludeLabels: true,
    
      // Randomize the initial positions of the nodes (true) or use existing positions (false)
      randomize: false,
    
      // Extra spacing between components in non-compound graphs
      componentSpacing: 40,
    
      // Node repulsion (non overlapping) multiplier
      nodeRepulsion: function( node: any ){ return 2048; },
    
      // Node repulsion (overlapping) multiplier
      nodeOverlap: 7,

      cytoscapeEdgehandles: 1,
    
      // Ideal edge (non nested) length
      idealEdgeLength: function( edge: any ){ return 32; },
    
      // Divisor to compute edge forces
      edgeElasticity: function( edge: any ){ return 32; },
    
      // Nesting factor (multiplier) to compute ideal edge length for nested edges
      nestingFactor: 1.2,
    
      // Gravity force (constant)
      gravity: 1,
    
      // Maximum number of iterations to perform
      numIter: 1000,
    
      // Initial temperature (maximum node displacement)
      initialTemp: 1000,
    
      // Cooling factor (how the temperature is reduced between consecutive iterations
      coolingFactor: 0.99,
    
      // Lower temperature threshold (below this point the layout will end)
      minTemp: 1.0

      
    };
    const layout = this.cy.elements().layout(options);

    layout.run();

    this.cy.cxtmenu({
        selector: 'node',
        commands: [
          {
            content: 'Edit',
            select: function(ele: any){
              // do something when "Edit" is clicked
            }
          },
          {
            content: 'Delete',
            select: function(ele: any){
                // do something when "Delete is clicked"
                ele.remove();
            }
          }
        ]
      });


    //selection styling
    this.cy.on('select', 'node', function(e: any){
        var node = e.target;
        node.style('background-color', 'blue');
        node.style('border-color', 'black');
        node.style('border-width', '10px');
        e.neigh
      });
      
    this.cy.on('unselect', 'node', function(e: any){
        var node = e.target;
        node.removeStyle('background-color');
        node.removeStyle('border-color');
        node.removeStyle('border-width');
      });
    
    //TODO: finish debugging drop down

    //right click drop down menu 
    this.cy.on('cxttap', 'node', function(e: any){
        var node = e.target;
        node.select();
      });
    
    
      
  }
  expandSelectedNode() {
    // Get the selected node
    const selectedNode = this.cy.$(':selected');
  
    // Get the immediate neighbors of the selected node
    const neighbors = selectedNode.neighborhood();
  
    // Add the neighbor nodes to the graph
    this.cy.add(neighbors);
  
    // Lay out the graph to show the new nodes
    this.cy.layout({ name: 'cose' }).run();
  }
  searchNodes() {
    const query = this.searchQuery.trim().toLowerCase();
    if (query) {
      this.searchResults = this.cy.nodes().filter((node: { id: () => string; }) => node.id().toLowerCase().includes(query));
    } else {
      this.searchResults = [];
    }
  }

  selectNode() {
    if (this.searchResults.length > 0) {
      const node = this.searchResults[0];
      node.select();
      this.cy.animate({
        center: { eles: node },
        duration: 1000
      });
    }
  }
  
  
}
