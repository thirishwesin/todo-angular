export class Init {
    load() {
      if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
        console.log('No Todos Found... Creating...');
        let todos = [
          {
            id:'0',
            title:'Nice..',
            text: 'To Buy Toys..'
          }, 
          
        ];
  
        localStorage.setItem('todos', JSON.stringify(todos));
        return 
      }
    }
  }