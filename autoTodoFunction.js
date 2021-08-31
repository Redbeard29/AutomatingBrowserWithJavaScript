//Creating a record of functions used to interact with the application at this URL:
//https://todomvc.com/examples/vanillajs/


var autoTodo = new function() {
    
    this.clickItem = function(item){
        item.click();
    }

    this.toggleAll = function(){
        document.querySelector('#toggle-all').click();
    }

    this.selectGivenItem = function(idx){
        document.querySelector("ul.todo-list > li:nth-child(" + idx + ") input.toggle").click();
    }

    this.deleteGivenItem = function(idx){
        document.querySelector('ul.todo-list > li:nth-child(" + idx + ") button.destroy').click();     
    }

    this.clearCompleted = function(){
        document.querySelector('button.clear-completed').click();
    }

    this.filterAll = function(){
        location.hash = '/';
    }

    this.filterCompleted = function(){
        location.hash = '/completed';
    }

    this.filterActive = function(){
        location.hash = '/active';
    }

    this.createTodo = function(name){
        document.querySelector('input.new-todo').value = name;
        document.querySelector('input.new-todo').dispatchEvent(new Event('change', {'bubbles': true}));
    }

    this.amendTodo = function(idx, newVal){
        document.querySelector('ul.todo-list > li:nth-child(' + idx + ') > div > label').dispatchEvent(new Event('dblclick', {
            'bubbles': true
        }));
        document.querySelector('ul.todo-list > li:nth-child(' + idx + ') .edit').value = newVal;
        document.querySelector('ul.todo-list > li:nth-child(' + idx + ') .edit').dispatchEvent(new Event('blur'));
    }

}