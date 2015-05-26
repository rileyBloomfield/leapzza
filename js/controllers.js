App.IndexController = Em.Controller.extend({
    
});

App.PizzaController = Em.ObjectController.extend({
    queryParams: ['group_id', 'topping_id'],

    group_id: 'meat',
    topping_id: 'sauce',

    CURSOR: Ex.CURSOR,

    filteredToppings: function() {
        var group_id = this.get('group_id');
        return Ex.TOPPINGS.filter(
            function(item) { return item.get('group_id') == group_id; },
            this
        );
    }.property('group_id'),

    actions: {
        chooseTopping: function(src) {
            src = src.slice(8,src.length);
            src = 'images/'+src;
            console.log(src);
            this.set('CURSOR.src', src);
        }
    }
});