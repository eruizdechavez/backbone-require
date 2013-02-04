define(['backbone', 'controllers/controllers', 'text!./templates/Main.html'], function(Backbone, controllers, template) {
	return Backbone.View.extend({
		className: 'row',
		template: null,
		controller: null,

		events: {
			'click .btn' : 'click_handler',
		},

		initialize: function() {
			this.template = this.options.template || _.template(template);
			this.controller = this.options.controller || controllers.front_controller;
		},

		render: function(selector) {
			this.$el.html(this.template()).appendTo(selector || 'body');
			return this;
		},

		click_handler: function(event) {
			var button = event.currentTarget;
			var type = button.attributes['data-popup-type'].value;

			var options = {
				header: null,
				body: null,
				footer: null
			}

			switch(type) {
				case 'base-popup':
					options.header = 'Base PopUp';
					options.body = 'This is a basic PopUp';
					options.footer = 'Some buttons here...';
					break

				case 'popup':
					options.body = 'This is a nice PopUp';
					options.footer = 'Some buttons here...';
					break

				case 'custom-popup':
					options.body = 'This is an even better PopUp';
					break
			}

			this.controller.trigger('popup_controller.open', type, options);
		}
	});
});