

let Node = {
  value: null,
  next:null,
}

let LinkedList = {
    head:null,
    size:0,
    add: function(value) {

    let mNode = Object.create(Node);
    mNode.value=value;

    var current;

    if(this.head ==null) {

        this.head = mNode;
    }
    else
    {
        current = this.head;

        while (current.next) {
            current = current.next;
        }
 
        current.next = mNode;

    }

    this.size++;

    },

    print: function() {

        var curr = this.head;
        var str = "LinkedList{";
        while (curr) {
            if(curr.next) {
                str += curr.value + ", ";
            }
            else
            {
                str += curr.value ;
            }
            
            curr = curr.next;
        }

        str +=  "} ";

        console.log(str);

    },
    remove: function(value) {
        let i =0;
        var current = this.head;
        var prev = null;
        while (current != null) {
    
            if (current.value === value) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
             
            }
            prev = current;
            current = current.next;
        }

    }
}

let linkedlist = Object.create(LinkedList);

//output testing

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(2);
linkedlist.print();




