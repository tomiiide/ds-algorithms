function LinkedList(){
    let Node = function(element){
        this.element = element;
        this.next = null; 
    }

    let length = 0;
    let head = null;

    /**
     * Add a node to the end of the Linked list
     * @param {Node} element 
     */
    this.append = function(element){
        //create a node
        //if the node is the first one set head to the new node
        //else set next of the last node to the new node
        //update the length
        let node = new Node(element), current;

        if(head === null){
            head = node
        } else {
            current = head;

            while(current.next){
                current = current.next
            }

            current.next = node;
        }

        length++;

        return node;
    };

    /**§
     * 
     * @param {int} position 
     * @param {any} element 
     */
    this.insert = function(position,element){
        //check if -1 < position < length
        // if position is 0, set node.next to head and head to node
        // else set previous.next to node and node.next to current
        let current = head,
        previous = null,
        node = new Node(element);

        if(position > -1 && position < length){
            if(position === 0){
                node.next = current;
                head = node;
            }
            else{
                while(current){
                    previous = current;
                    current = current.next;
                }

                previous.next = node;
                node.next = current;
            }
            
            length++;
            return node;

        } else{
            return false;
        }
    };

    /**
     * Remove a node at (position)
     * @param {int} position 
     */
    this.removeAt  = function(position){
        //check if  -1 < position < length
        // if position is 0, remove the node and make head the 2nd element
        //else tranverse the list to find the node at position
        // remove the node and set next of the previous node to null
        // length--
        // return removed node

        let index = 0;
        let current = head
        let previous = null;

        if(position > -1 && position < length){
            if(position === 0){
                head = current.next;
            }
            else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }

            length--;
            return current;
        }
        return false;
    };

    /**
     * Remove an element
     * @param {any} element 
     */
    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    };

    /**
     * returns true if list is empty and false otherwise
     * @returns {bool}
     */
    this.isEmpty = function(){
        return length === 0;
    };

    /**
     * Get the size of the Linked list
     */
    this.size = function(){return length;};

    this.indexOf = function(element){
        //have an index variable store
        //traverse list, if element = current.element return index
        // return -1

        let index = 0, current = head;
        while(current){
            if(current.element === element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };

    this.toString = function(){
        let current = head;
        let output = ``;
        while(current){
            output +=`${this.indexOf(current.element)}> ${current.element} \n`;
            current = current.next;
        }
        return output;
    };

    this.getHead = function(){
        return head;
    };
}

function test(){
    //testing append()
    console.log("\n ------------- testing append() -------------");
    let favouriteAlbums = new LinkedList();
    favouriteAlbums.append("kendrick Lamar - Damn");
    favouriteAlbums.append("Kanye West and Kid Cudi - Kids See Ghosts");
    favouriteAlbums.append("Mura Masa - Mura Masa");
    console.log(favouriteAlbums.toString());
    
    //testing removeAt()
    console.log("\n ------------- testing removeAt() -------------");
    favouriteAlbums.removeAt(1);
    console.log(favouriteAlbums.toString());

    //testing insert()
    console.log(" \n --------- testing insert() ---------")
    favouriteAlbums.insert(0, "Kendrick Lamar - Good Kid, M.A.A.D City");
    favouriteAlbums.insert(2,"Burna Boy - Outside");
    console.log(favouriteAlbums.toString());

    //testing remove()
    console.log(" \n --------- testing remove() ---------")
    favouriteAlbums.remove("Burna Boy - Outside");
    console.log(favouriteAlbums.toString());

    //testing size()
    console.log(" \n --------- testing size() ---------")
    console.log(" Size => "+favouriteAlbums.size())
    
    console.log(" \n --------- testing getHead() ---------")
    console.log(favouriteAlbums.getHead())

}

test();