App.ApplicationView = Em.View.extend({
    didInsertElement: function() {
        Ex.set('CURSOR.element', this.$('#cursor'));
    }
});

App.PizzaView = Em.View.extend({
    didInsertElement: function() {
        var image = new Image(),
            $canvas = this.$('#canvas'),
            src = Ex.PIZZA.get('canvasData');

        if(src) {
            image.onload = function() {
                $canvas.getContext('2D').drawImage(image, 0, 0);
            };
            image.src = src;
        }
    }
});