import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import * as cytoscape from 'cytoscape';
import * as cxtmenu from 'cytoscape-cxtmenu';
import { elements, FriendOf } from '../models/elements';
import * as fcose from 'cytoscape-fcose';
import { BehaviorSubject } from 'rxjs';
import { GraphService } from '../graph.service';
import { Person } from '../models/elements';

cytoscape.use(cxtmenu);
cytoscape.use(fcose);


@Component({
  selector: 'app-graph-visualization',
  templateUrl: './graph-visualization.component.html',
  styleUrls: ['./graph-visualization.component.css']
})
export class GraphVisualizationComponent implements OnInit, OnDestroy {
  @ViewChild('cy') graphContainer?: ElementRef

  export() {} // What is this for?

  searchQuery = ''; // Search query to find information in the graph rendering?
  searchResults: any[] = []; // 

  cy: any; // Cytoscape object
  private layoutState$ = new BehaviorSubject<string>(null); // ?? 

  elements = [] // Elements in the cytoscape graph

  constructor(private graphService: GraphService) {}

  ngOnInit() {

    // get date from server - test function to call for data on init
    this.graphService.getData().subscribe((data: Person[]) => {
      data.forEach(person => {
        this.cy.add({
          data: {
            id: person.id,
            name: person.name,
            firstName: person.firstName,
            lastName: person.lastName,
            email: person.email,
          }
        });
        person.friends.forEach(friend => {
          const friendNode ={
            id: friend.id,
            name: friend.name,
            firstName: friend.firstName,
            lasttName: friend.lastName,
            email: friend.email,
          }
          this.cy.add({ data: friendNode });
          const friendEdge = {
            id: `${person.id}-${friend.id}`,
            source: person.id,
            target: friend.id,
            label: "is friend of"
          }
          this.cy.add({ data: friendEdge });
        })
      });

      let options = {
        name: 'fcose',
        nodeRepulsion: node => 45000,
        // Ideal edge (non nested) length
        idealEdgeLength: edge => 250,
        // Divisor to compute edge forces
        edgeElasticity: edge => 0.45,
        //defaultOptions
      };
      const layout = this.cy.elements().layout(options);
  
      layout.run();
      }
      );

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

    var defaultOptions = {

      // 'draft', 'default' or 'proof' 
      // - "draft" only applies spectral layout 
      // - "default" improves the quality with incremental layout (fast cooling rate)
      // - "proof" improves the quality with incremental layout (slow cooling rate) 
      quality: "default",
      // Use random node positions at beginning of layout
      // if this is set to false, then quality option must be "proof"
      randomize: false, 
      // Whether or not to animate the layout
      animate: true, 
      // Duration of animation in ms, if enabled
      animationDuration: 1000, 
      // Easing of animation, if enabled
      animationEasing: undefined, 
      // Fit the viewport to the repositioned nodes
      fit: true, 
      // Padding around layout
      padding: 30,
      // Whether to include labels in node dimensions. Valid in "proof" quality
      nodeDimensionsIncludeLabels: false,
      // Whether or not simple nodes (non-compound nodes) are of uniform dimensions
      uniformNodeDimensions: false,
      // Whether to pack disconnected components - cytoscape-layout-utilities extension should be registered and initialized
      packComponents: true,
      // Layout step - all, transformed, enforced, cose - for debug purpose only
      step: "all",
      
      /* spectral layout options */
      
      // False for random, true for greedy sampling
      samplingType: true,
      // Sample size to construct distance matrix
      sampleSize: 25,
      // Separation amount between nodes
      nodeSeparation: 75,
      // Power iteration tolerance
      piTol: 0.0000001,
      
      /* incremental layout options */
      
      // Node repulsion (non overlapping) multiplier
      nodeRepulsion: node => 4500,
      // Ideal edge (non nested) length
      idealEdgeLength: edge => 150000,
      // Divisor to compute edge forces
      edgeElasticity: edge => 0.45,
      // Nesting factor (multiplier) to compute ideal edge length for nested edges
      nestingFactor: 0.1,
      // Maximum number of iterations to perform - this is a suggested value and might be adjusted by the algorithm as required
      numIter: 2500,
      // For enabling tiling
      tile: true,
      // The comparison function to be used while sorting nodes during tiling operation.
      // Takes the ids of 2 nodes that will be compared as a parameter and the default tiling operation is performed when this option is not set.
      // It works similar to ``compareFunction`` parameter of ``Array.prototype.sort()``
      // If node1 is less then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a negative value
      // If node1 is greater then node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return a positive value
      // If node1 is equal to node2 by some ordering criterion ``tilingCompareBy(nodeId1, nodeId2)`` must return 0
      tilingCompareBy: undefined, 
      // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
      tilingPaddingVertical: 10,
      // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
      tilingPaddingHorizontal: 10,
      // Gravity force (constant)
      gravity: 0.25,
      // Gravity range (constant) for compounds
      gravityRangeCompound: 1.5,
      // Gravity force (constant) for compounds
      gravityCompound: 1.0,
      // Gravity range (constant)
      gravityRange: 3.8, 
      // Initial cooling factor for incremental layout  
      initialEnergyOnIncremental: 0.3,
    
      /* constraint options */
    
      // Fix desired nodes to predefined positions
      // [{nodeId: 'n1', position: {x: 100, y: 200}}, {...}]
      fixedNodeConstraint: undefined,
      // Align desired nodes in vertical/horizontal direction
      // {vertical: [['n1', 'n2'], [...]], horizontal: [['n2', 'n4'], [...]]}
      alignmentConstraint: undefined,
      // Place two nodes relatively in vertical/horizontal direction
      // [{top: 'n1', bottom: 'n2', gap: 100}, {left: 'n3', right: 'n4', gap: 75}, {...}]
      relativePlacementConstraint: undefined,
    
      /* layout event callbacks */
      ready: () => {}, // on layoutready
      stop: () => {} // on layoutstop
    };
    

    /*let options = {
      name: 'fcose',
      nodeRepulsion: node => 45000,
      // Ideal edge (non nested) length
      idealEdgeLength: edge => 250,
      // Divisor to compute edge forces
      edgeElasticity: edge => 0.45,
      //defaultOptions
    };
    const layout = this.cy.elements().layout(options);

    layout.run();*/

    this.cy.cxtmenu({
        selector: 'node',
        commands: [
          {
            content: 'Edit',
            select: function(ele: any){
              // do something when "Edit" is clicked
                ele.select();
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
    /*this.cy.on('cxttap', 'node', function(e: any){
        var node = e.target;
        node.select();
      });*/
    

    
      // Restore the layout state if it exists
    const savedLayoutState = this.layoutState$.value;
    if (savedLayoutState) {
      this.cy.json(savedLayoutState);
    }
    
      
  }

  ngOnDestroy(): void {
    const currentLayoutState = JSON.stringify(this.cy.json());
    this.layoutState$.next(currentLayoutState);
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
