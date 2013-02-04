define(['./BasePopUp'], function(BasePopUp) {
	return BasePopUp.extend({
		initialize: function() {
			this.options.header = this.options.header || 'Default PopUp Title';
			this._super();
		}
	});
});
