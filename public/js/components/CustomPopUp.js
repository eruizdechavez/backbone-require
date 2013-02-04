define(['./PopUp'], function(PopUp) {
	return PopUp.extend({
		initialize: function() {
			this.options.footer = this.options.footer || '<button class="btn" data-dismiss="modal">Close</button>';
			this._super();
		}
	});
});
