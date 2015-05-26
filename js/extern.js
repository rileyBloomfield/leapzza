var Ex = Em.Object.create({
    PIZZA: Em.Object.extend({
        canvasData: null
    }).create(),

    CURSOR: Em.Object.extend({
        element: null,

        pinch: 0,
        onPinch: function() {
            var pinching = this.get('pinch') > 0.7;
            this.set('pinching', pinching);
            if(!pinching) { return; }
        }.observes('pinch'),

        pinching: false,
        onPinching: function() {
            var $ele = this.get('element'), ele = $ele[0];
            $ele.hide();
            var pinched = document.elementFromPoint(this.get('left') + $ele.width() / 2, this.get('top') + $ele.height() / 2), $pinched = $(pinched);
            $ele.show();

            if(this.get('pinching')) {
                if($pinched) { $pinched.trigger('click'); }
            }
            else {
                if(!pinched || pinched.id != 'myCanvas') { return; }
                var ctx = pinched.getContext("2d");
                var offset = $pinched.offset();
                ctx.drawImage(ele, this.get('left') - offset.left, this.get('top') - offset.top, 80, $ele.height() / $ele.width() * 80);
            }
        }.observes('pinching'),

        trueLeft: 0,
        trueTop: 0,

        left: function() { return (this.get('trueLeft') + 250) * (window.innerWidth / 450); }.property('trueLeft'),
        top: function() { return window.innerHeight - (this.get('trueTop') - 50) * (window.innerHeight / 250); }.property('trueTop'),

        src: 'images/Sauce.png',

        synchronize: function() {
            var ele = this.get('element');
            if(!ele) { return; }

            ele[0].src = this.get('src');
            ele.css( {left: this.get('left'), top: this.get('top')} );
        }.observes('element', 'src', 'top', 'left')
    }).create(),

    TOPPINGS: [
        Em.Object.create({
            topping_id: 'pepperoni',
            group_id: 'meat',
            image: 'images/bPepperoni.png'
        }),
        Em.Object.create({
            topping_id: 'anchovie',
            group_id: 'meat',
            image: 'images/bAnchovie.png'
        }),
        Em.Object.create({
            topping_id: 'bacon',
            group_id: 'meat',
            image: 'images/bBacon.png'
        }),
        Em.Object.create({
            topping_id: 'cheese',
            group_id: 'meat',
            image: 'images/bCheese.png'
        }),
        Em.Object.create({
            topping_id: 'meatballs',
            group_id: 'meat',
            image: 'images/bMeatballs.png'
        }),
        Em.Object.create({
            topping_id: 'mushroom',
            group_id: 'meat',
            image: 'images/bMushroom.png'
        }),
        Em.Object.create({
            topping_id: 'onion',
            group_id: 'meat',
            image: 'images/bOnion.png'
        }),
        Em.Object.create({
            topping_id: 'sauce',
            group_id: 'meat',
            image: 'images/bSauce.png'
        }),
        Em.Object.create({
            topping_id: 'sauce',
            group_id: 'meat',
            image: 'images/bRedpepper.png'
        })
    ]
});