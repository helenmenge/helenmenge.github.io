let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name", 
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   }


   function printNames(node1){
       console.log(node1.name+":"+node1.value);
       if(node1.children && node1.children.length>0){
        console.log("Inside IF ", node1.name);
        node1.children.forEach(function(child){
               console.log(`Inside forEach parent ${node1.name}  child ${child.name}`)
               printNames(child);
           })
       }
   }
   printNames(node1)

function printNamesWithLoop(node1){
    console.log(node1.name+":"+node1.value);
    if(node1.children && node1.children.length>0){
     console.log("Inside IF ", node1.name);
     node1.children.forEach(function(child){
            console.log(`Inside forEach parent ${node1.name}  child ${child.name}`)
            console.log(child.name+":"+child.value);
            if(child.children && child.children.length>0){
                child.children.forEach(function(grandChild){
                    console.log(grandChild.name+":"+grandChild.value);
                });
            }
            printNames(child);
        })
    }
}