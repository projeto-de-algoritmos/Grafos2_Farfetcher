import { Queue } from './queue';

export class Graph {
    constructor() {
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v);
    }

    bfs(startingNode, finalNode) {
        let visited = {};
        let searchResult = []

        const queue = new Queue();

        visited[startingNode] = true;
        queue.enQueue(startingNode);

        while (!queue.isEmpty() && searchResult[searchResult.length - 1] != finalNode) {
            let firstQueueElement = queue.deQueue();

            searchResult.push(firstQueueElement)

            const neighbors = this.AdjList.get(firstQueueElement);

            neighbors?.forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.enQueue(neighbor);
                }
            })
        }

        return searchResult;
    }
}
