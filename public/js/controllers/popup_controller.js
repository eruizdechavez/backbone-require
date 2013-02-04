define(['backbone', './front_controller', 'components/BasePopUp', 'components/PopUp', 'components/CustomPopUp'], function(Backbone, fc, BasePopUp, PopUp, CustomPopUp) {
	var types_map = {
		'base-popup': BasePopUp,
		'popup': PopUp,
		'custom-popup': CustomPopUp
	};

	var module = _.extend({
		open_popup: function(type, options) {
			var popup = new types_map[type](options);
			popup.show();
		}
	}, Backbone.Events);

	module.listenTo(fc, 'popup_controller.open', function(type, options) {
		module.open_popup(type, options);
	});

	return module;
});
