ko.bindingHandlers.ScrollToView = {
	init: function (element, valueAccessor) {
		// Initially set the element to be instantly visible/hidden depending on the value
		//var value = valueAccessor();
		//$(element).hide();
		//scrollToEntry(element, valueAccessor);
	},
	update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
		// Whenever the value subsequently changes, slowly fade the element in or out
		//var value = valueAccessor();
		var item = ko.utils.unwrapObservable(valueAccessor());
		var entry = $(element);
		// find the entry in the array that changed
		var scrollable = entry.parent();
		var scrollTop = scrollable.scrollTop() + entry.offset().top - scrollable.offset().top;
		scrollable.scrollTop(scrollTop);
	}

};

