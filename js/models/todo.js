var app = app || {};

// Todo Model with 'title' and 'completed' attributes

app.Todo = Backbone.Model.extend({

	// Default attributes to ensure that each todo created has 'title' and 'completed keys'
	defaults: {
		title: '',
		completed: false
	},

	// Toggle the 'completed' state of this todo item
	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
});