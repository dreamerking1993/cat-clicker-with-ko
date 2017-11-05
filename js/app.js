 var initialCats = [
        {
            clickCount : 0,
            name : 'Tabby',
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
    		nicknames: ["kaley","valey","kuhura-chor"]

        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            nicknames: ["bagh","thuloBiralo","jyanMara"]
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            nicknames: ["katar","xeruwa","maniMaruwa"]
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        	nicknames: ["chaya","parxai","sheetal"]
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            nicknames: ["alxi","nindralu","loddar"]
        }
    ]

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount); 
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
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
	var self = this;
	this.catList = ko.observableArray();
	initialCats.forEach(function(catItem) {
		//debugger
		self.catList.push(new Cat(catItem));
		//debugger
	});
	this.currentCat = ko.observable(this.catList()[0]);
/*
	this.currentCat = ko.observable( new Cat({
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https:/www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ["kaley","valey","kuhura-chor"]
	}) );
*/	

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