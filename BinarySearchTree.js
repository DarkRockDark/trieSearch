class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        if (this.root === null) {
            this.root = new Node(data);
            console.log('root made ' + data);
        } else {
            this.insertRecurse(this.root, data);
            console.log(`attached ${data} to ${this.root.data}`);
        }
    }

    insertRecurse(node, data) {
        if (data < node.data) {
            console.log(data + ' is < ' + node.data);
            if (node.left === null) {
                node.left = new Node(data);
            } else {
                this.insertRecurse(node.left, data);
            }
        } else if (data > node.data) {
            console.log(data + ' is < ' + node.data);
            if (node.right === null) {
                node.right = new Node(data);
            } else {
                this.insertRecurse(node.right, data);
            }
        }
    }

    remove(data) {
        //update root with 
        this.root = this.removeNode(this.root, data);
    }

    // Method to remove node with a
    // given data
    // it recur over the tree to find the
    // data and removes it
    removeNode(node, key) {

        // if the root is null then tree is
        // empty
        if (node === null)
            return null;

        // if data to be delete is less than
        // roots data then move to left subtree
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        // if data to be delete is greater than
        // roots data then move to right subtree
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        // if data is similar to the root's data
        // then delete this node
        else {
            // deleting node with no children
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // deleting node with one children
            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children
            // minimum node of the right subtree
            // is stored in aux
            let aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode() {
        return node.left === null
            ? node
            : this.findMinNode(node.left);
    }

    getRootNode() {
        return this.root;
    }

    inorder(node) {
        if (node != null) {
            this.inorder(node.left);
            // console.log(node.left);
            console.log(node.data);
            this.inorder(node.right);
            // console.log(node.right);
        }
    }
    preorder(node) {
        if (node != null) {
            console.log(node.left);
            this.preorder(node.data);
            this.preorder(node.right);
        }
    }
    postorder(node) {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.data);
            console.log(node.right);
        }}
    search(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }
    
}

let BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

BST.inorder(BST.getRootNode());