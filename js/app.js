var Cat = function() {
	this.clickCount = ko.observable(0); 
	this.name = ko.observable('Tabby');
	//this.title = ko.observable('infant');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	//this.imgAttribution = ko.observable('https:/www.flickr.com/photos/big...');
	this.nickNames = ko.observableArray([
		"kaley","valey","kuhura-chor"
		]);
	this.title = ko.computed(function(){
		//debugger;
		var title;
		var clicks = this.clickCount();
		if (clicks <= 10) {
			//debugger;
			title='Newborn';
		}
		if (clicks > 10 && clicks <= 20) {
			title='Infant';
		}
		if (clicks > 20 && clicks <= 30) {
			title='Teen';
		}
		if (clicks > 30) {
			title='Ninja';
		}
		return title;
	},this);	

}



var ViewModel = function() {
	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);//since incrementCounter in in the currentCat binding context in html, this refers to currentCat()
	};

	//OR TRY FOLLOWING METHOD
	/*
	self = this;
	self.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	*/	

}


ko.applyBindings(new ViewModel());