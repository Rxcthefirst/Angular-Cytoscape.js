export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }

  export interface Person {
    id: string;
    name: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    friends?: Person[];
  }
  
  export interface FriendOf {
    yearsOfFriendship: number;
    friend: Person
  }
  
  export const elements = [
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