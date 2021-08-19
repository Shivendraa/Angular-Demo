import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({ //component instance
  selector: 'todo-app',
  templateUrl: './app.component.html'
})

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
export class AppComponent { //Observable or event stream...
  // x = 500; //publish event...
  // products = 1000;

  model = new Model();

  getName() {
    return this.model.user;
  }

  getItems(){
    return this.model.items
    .filter(item => !item.done)
  }

  addItem(item){
    if(item != ''){
      this.model.items.push(new TodoItem(item,false));
    }
  }
}
