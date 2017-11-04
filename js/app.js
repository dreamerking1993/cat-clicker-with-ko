var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount); 
	this.name = ko.observable(data.name);
	//this.title = ko.observable('infant');
	this.imgSrc = ko.observable(data.imgSrc);
	//this.imgAttribution = ko.observable('https:/www.flickr.com/photos/big...');
	this.nickNames = ko.observableArray(data.nicknames);
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
	this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https:/www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ["kaley","valey","kuhura-chor"]
	}) );

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