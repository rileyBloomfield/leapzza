App = Ember.Application.create();

App.Router.map(function() {
    this.route('pizza');
    this.route('all', {path: '*path'});
});

//Merge Leap
Leap.loop({ enableGestures: true }, function(frame) {
    var alpha = 0.6;
	var hand = frame.hands[0];
	if(!hand)
		return;
    Ex.set('CURSOR.trueLeft', alpha * Ex.get('CURSOR.trueLeft') + (1 - alpha) * hand.fingers[1].dipPosition[0]);
    Ex.set('CURSOR.trueTop', alpha * Ex.get('CURSOR.trueTop') + (1 - alpha) * hand.fingers[1].dipPosition[1]);
    Ex.set('CURSOR.pinch', alpha * Ex.get('CURSOR.pinch') + (1 - alpha) * hand.pinchStrength);
});
