import { PriorityQueue } from './queue';
//Dijkstra's algorithm only works on a weighted graph.
  
export class WeightedGraph {
    constructor() {
      this.adjList = {};
    }

    addVertex(vertex) {
      if (!this.adjList[vertex]) this.adjList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
      this.adjList[v1].push({ node: v2, weight });
      this.adjList[v2].push({ node: v1, weight });
    }

    dijkstraSearch(start, finish) {
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = []; //to return at end
      let smallest;

      //build up initial state
      for (let vertex in this.adjList) {
        if (vertex === start) {
          distances[vertex] = 0;
          nodes.enQueue(vertex, 0);
        } else {
          distances[vertex] = Infinity;
          nodes.enQueue(vertex, Infinity);
        }

        previous[vertex] = null;
      }

      // as long as there is something to visit
      while (nodes.values.length) {
        smallest = nodes.deQueue().val;

        if (smallest === finish) {
          //WE ARE DONE
          //BUILD UP PATH TO RETURN AT END
          while (previous[smallest]) {
            path.push(smallest);
            smallest = previous[smallest];
          }
          break;
        }

        if (smallest || distances[smallest] !== Infinity) {
          for (let neighbor in this.adjList[smallest]) {
            //find neighboring node
            let nextNode = this.adjList[smallest][neighbor];
            //calculate new distance to neighboring node
            let candidate = distances[smallest] + nextNode.weight;
            let nextNeighbor = nextNode.node;

            if (candidate < distances[nextNeighbor]) {
              //updating new smallest distance to neighbor
              distances[nextNeighbor] = candidate;
              //updating previous - How we got to neighbor
              previous[nextNeighbor] = smallest;
              //enQueue in priority queue with new priority
              nodes.enQueue(nextNeighbor, candidate);
            }
          }
        }
      }

      return path.concat(smallest).reverse();
    }
}
  
  
  
//EXAMPLES=====================================================================
  
//   var graph = new WeightedGraph();
//   graph.addVertex("A");
//   graph.addVertex("B");
//   graph.addVertex("C");
//   graph.addVertex("D");
//   graph.addVertex("E");
//   graph.addVertex("F");
  
//   graph.addEdge("A", "B", 4);
//   graph.addEdge("A", "C", 2);
//   graph.addEdge("B", "E", 3);
//   graph.addEdge("C", "D", 2);
//   graph.addEdge("C", "F", 4);
//   graph.addEdge("D", "E", 3);
//   graph.addEdge("D", "F", 1);
//   graph.addEdge("E", "F", 1);
  
//   console.log(graph.Dijkstra("A", "E"));