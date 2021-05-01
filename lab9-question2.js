class Node {

    constructor (value, next=null) {
        this.value=value;
        this.next=next;
    }


   }
   
   class LinkedList{

    constructor() {
       this.head = null;
       this.size = 0;
    }


    add(value) {
   
        let mNode = new Node(value);
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
    }

    print() {
       
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

}


remove(value) { 
   
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
   
   let linkedlist = new LinkedList();
   
   linkedlist.add(1);
   linkedlist.add(2);
   linkedlist.add(3);
   linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
   linkedlist.remove(3);
   linkedlist.print(); //in the console, you should see: LinkedList{1,3}
   