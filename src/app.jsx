var ThumbnailList = require('thumbnail-list')
var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    imageUrl: 'https://c5.staticflickr.com/2/1464/25640686684_d494736db0.jpg',
    header: 'Learn React',
    description: 'React is a fantasstic new library for making fast, dynamic pages. React is fast and stuff',
    number: 32
  },{
    title: 'See Tutorials',
    imageUrl: 'http://www.ebsqart.com/Art/Scratchboard-Art/Scratchboard/687393/650/650/Bird-Thumbnail.jpg',
    header: 'Learn Gulp',
    description: 'Gulpity gulp',
    number: 16
  }]
};

// ask react to render this class
var element = React.createElement(ThumbnailList, options);

// we will tell it where to place the rendered element in the DOM
ReactDOM.render(element, document.querySelector('.target'))
