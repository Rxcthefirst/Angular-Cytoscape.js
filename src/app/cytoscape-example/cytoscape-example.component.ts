import { Component, OnInit } from '@angular/core';
import * as cytoscape from 'cytoscape';
import * as dagre from 'cytoscape-dagre'


@Component({
  selector: 'app-cytoscape-example',
  template: `
    <div id="cy"></div>
  `,
  styleUrls: ['./cytoscape-example.component.css']
})
export class CytoscapeExampleComponent implements OnInit {

  elements = [
    {
      "data": {
          "id": "Mortgage Loan",
          "name": "Mortgage Loan",
          "definition": "A mortgage loan is ...",
          "semanticType": "Subject Area",
          "visibility": 1,
          "label": "Mortgage Loan",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
  {
      "data": {
          "id": "Loan",
          "name": "Loan",
          "definition": "...",
          "semanticType": "Entity",
          "visibility": 2,
          "label": "Loan",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
  {
      "data": {
          "id": "Financial Instrument",
          "name": "Financial Instrument",
          "definition": "A Financial Instrument ...",
          "semanticType": "Entity",
          "visibility": 2,
          "label": "Financial Instrument",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
{
      "data": {
          "id": "Adjustable Rate Mortgage",
          "name": "Adjustable Rate Mortgage",
          "definition": "A mortgage loan ...",
          "semanticType": "Entity",
          "visibility": 2,
          "label": "Adjustable Rate Mortgage",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },{
      "data": {
          "id": "Fixed Rate Mortgage",
          "name": "Fixed Rate Mortgage",
          "definition": "A mortgage loan ...",
          "semanticType": "Entity",
          "visibility": 2,
          "label": "Fixed Rate Mortgage",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
  {
      "data": {
          "id": "Reverse Mortgage",
          "name": "Reverse Mortgage",
          "definition": "...",
          "semanticType": "Entity",
          "visibility": 2,
          "label": "Reverse Mortgage",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
  {
      "data": {
          "id": "Loan State",
          "name": "Loan State",
          "definition": "...",
          "semanticType": "Phase",
          "visibility": 2,
          "label": "Loan State",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
  {
      "data": {
          "id": "Borrower",
          "name": "Borrower",
          "definition": "...",
          "semanticType": "Role",
          "visibility": 2,
          "label": "Borrower",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
  {
      "data": {
          "id": "Real Property",
          "name": "Real Property",
          "definition": "...",
          "semanticType": "Role",
          "visibility": 2,
          "label": "Real Property",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
  {
      "data": {
          "id": "Party Group",
          "name": "Party Group",
          "definition": "...",
          "semanticType": "Entity",
          "visibility": 2,
          "label": "Party Group",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
  {
      "data": {
          "id": "Loan Seller",
          "name": "Loan Seller",
          "definition": "...",
          "semanticType": "Role",
          "visibility": 2,
          "label": "Loan Seller",
          "color": "red",
          "size": 30,
          "custom_property": "value"
      }
  },
  {
        "data": {
            "id": "edge1",
            "source": "Mortgage Loan",
            "target": "Financial Instrument",
            "label": "hasGeneral",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge2",
            "source": "Mortgage Loan",
            "target": "Loan",
            "label": "referencedBySubjectArea",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge3",
            "source": "Mortgage Loan",
            "target": "Adjustable Rate Mortgage",
            "label": "hasSpecific",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge4",
            "source": "Mortgage Loan",
            "target": "Fixed Rate Mortgage",
            "label": "hasSpecific",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge5",
            "source": "Mortgage Loan",
            "target": "Reverse Mortgage",
            "label": "hasSpecific",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge6",
            "source": "Mortgage Loan",
            "target": "Loan State",
            "label": "hasFacet",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge7",
            "source": "Mortgage Loan",
            "target": "Borrower",
            "label": "has debtor",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge8",
            "source": "Mortgage Loan",
            "target": "Real Property",
            "label": "is collateralized by",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge9",
            "source": "Mortgage Loan",
            "target": "Party Group",
            "label": "has responsible group",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge10",
            "source": "Mortgage Loan",
            "target": "Loan Seller",
            "label": "is sold by",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    },
    {
        "data": {
            "id": "edge11",
            "source": "Mortgage Loan",
            "target": "Loan Seller",
            "label": "also has a",
            "color": "blue",
            "width": 2,
            "custom_property": "value"
        }
    }
  ]


  constructor() {}

  ngOnInit() {
    const cy = cytoscape({
      container: document.getElementById('cy'),
      elements: this.elements,
      boxSelectionEnabled: true,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#000000',
            'label': 'data(label)',
            'font-size': '25rem',
          }
        },
        {
          selector: 'edge',
          style: {
            'curve-style': 'bezier',
            'label': 'data(label)',
            'width': 2,
            'line-color': '#9dbaea',
            'target-arrow-fill': 'filled',
            'target-arrow-color': '#000000',
            'target-arrow-shape': 'triangle',
            'font-size': '18rem',
            'text-rotation': 'autorotate'
          }
        }
      ],

    });

    let options = {
      name: 'cose',
      nodeDimensionsIncludeLabels: true,    
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
      padding: 30,
    
      // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      boundingBox: undefined,
    
      // Excludes the label when calculating node bounding boxes for the layout algorithm
      //nodeDimensionsIncludeLabels: false,
    
      // Randomize the initial positions of the nodes (true) or use existing positions (false)
      randomize: false,
    
      // Extra spacing between components in non-compound graphs
      componentSpacing: 40,
    
      // Node repulsion (non overlapping) multiplier
      //nodeRepulsion: function( node ){ return 2048; },
    
      // Node repulsion (overlapping) multiplier
      nodeOverlap: 4,

      cytoscapeEdgehandles: 1,
    
      // Ideal edge (non nested) length
      idealEdgeLength: function( edge: cytoscape.EdgeCollection ){ return 32; },
    
      // Divisor to compute edge forces
      //edgeElasticity: function( edge ){ return 32; },
    
      // Nesting factor (multiplier) to compute ideal edge length for nested edges
      nestingFactor: 1.2,
    
      // Gravity force (constant)
      gravity: 0,
    
      // Maximum number of iterations to perform
      numIter: 1000,
    
      // Initial temperature (maximum node displacement)
      initialTemp: 1000,
    
      // Cooling factor (how the temperature is reduced between consecutive iterations
      coolingFactor: 0.99,
    
      // Lower temperature threshold (below this point the layout will end)
      minTemp: 1.0

      
    };
    const layout = cy.elements().layout(options);

    layout.run();
  }

}
