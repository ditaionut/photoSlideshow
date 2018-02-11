function CImage () {
    this.name;
    this.div;
    this.path;
}

CImage.prototype.init = function (name, path) {
    this.name = name;
    this.path = path;
    this.div = $('<img class="imageDiv" id="slide_' + this.name + '" src="' + this.path + '/' + this.name + '.jpg"></img>');
};

CImage.prototype.showSlide = function() {
    this.div.show();
};

CImage.prototype.hideSlide = function() {
    this.div.hide();
};

function CImgSlider() {
    this.images; 
    this.div;
    this.nextButton;
    this.prevButton;
    this.currentIndex;
}

CImgSlider.prototype.init = function(inputObject) {
    var self = this;
    this.images = [];
    this.div = $('#sliderParent');

    this.nextButton = $('<button id = "next" value = ">"></button>');
    this.div.append(this.nextButton);
    
    this.prevButton = $('<button id = "prev" value = "<"></button>');
    this.div.append(this.prevButton);

    inputObject.collection.forEach(function(element) {
        let image = new CImage();
        image.init(element.name, inputObject.path);
        self.images.push(image);
        self.div.append(image.div);
    });
    
    this.currentIndex = 0;
    this.nextButton.on('click', function() {
        self.next(this.currentIndex);
    });

    this.prevButton.on('click', function(){
        self.prev(this.currentIndex);
    });
}

CImgSlider.prototype.next = function(index) {
    this.images[index].hide();
    if (index < images.length - 1) {
        this.images[index + 1].show();
        this.currentIndex = index + 1;
    } else {
        this.images[0].show();
        this.currentIndex = 0;
    }
};

CImageSlider.prototype.prev = function(index){
    this.images[index].hide();
    if (index > 0){
        this.images[index - 1].show();
        this.currentIndex = index - 1;
    } else {
        this.images[this.images.length - 1].show();
        this.currentIndex = this.images.length - 1; 
    }
};

var slider = new CImgSlider();
slider.init(imageCollection);
