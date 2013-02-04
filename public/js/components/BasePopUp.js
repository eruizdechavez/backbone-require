define(['backbone', 'text!./templates/BasePopUp.html'], function(Backbone, template) {

	return Backbone.View.extend({
		className: 'modal hide fade',

		header: null,
		body: null,
		footer: null,
		template: '',

		initialize: function() {
			_.bindAll(this);
			this.template = this.options.template || _.template(template);

			this.header = this.options.header || null;
			this.body = this.options.body || '';
			this.footer = this.options.footer || null;
		},

		show: function() {
			this.render();

			// No header? Remove it!
			if (!this.header) {
				this.$('.modal-header').remove();
			}

			// No footer? Remove it!
			if (!this.footer) {
				this.$('.modal-footer').remove();
			}

			this.$el.appendTo('body').modal();

			return this;
		},

		render: function() {
			this.$el.html(this.template({
				header: this.header,
				body: this.body,
				footer: this.footer
			}));

			return this;
		}
	});
});
