var React = require('react');
var Thumbnail = require("./thumbnail");

module.exports = React.createClass({
  render: function() {
      //return <div> Hello world </div>
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return <Thumbnail {...thumbnailProps}  />
    });

    var d = function() {
  	return <Dialogs />
    }

    return <div>
  	  {list}
  	  {list}
    </div>
  }
});
