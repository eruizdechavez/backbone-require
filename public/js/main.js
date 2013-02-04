require.config({
	paths: {
		'jquery': 'lib/jquery-1.9.0.min',
		'underscore': 'lib/underscore-min',
		'backbone': 'lib/backbone',
		'backbone-raw': 'lib/backbone-min',
		'backbone-super': 'lib/backbone-super-min',
		'bootstrap': 'lib/bootstrap.min'
	},
	shim: {
		'backbone-raw': {
			deps: ['underscore', 'jquery', 'bootstrap'],
			exports: 'Backbone'
		},
		'backbone-super': ['backbone-raw'],
		'bootstrap': ['jquery']
	}
});

require(['components/Main', 'controllers/controllers'], function(Main, controllers) {
	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};

	var main = new Main();
	main.render('.container');

	controllers.front_controller.trigger('popup_controller.open', 'custom-popup', {
		body: 'Creating a PopUp by using an event'
	});

	controllers.popup_controller.open_popup('custom-popup', {
		body: 'Creating a PopUp by using popup_controller.open_popup method'
	});
});
