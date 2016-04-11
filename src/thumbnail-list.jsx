var Thumbnail = require("thumbnail");

var ThumbnailList = React.createClass({
  render: function() {
      //return <div> Hello world </div>
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return <Thumbnail {...thumbnailProps}  />
    });

    var d = function() {
  	return <Dialogs />
    }

    return <div>
      {d}
  	{list}
  	{list}
    </div>
  }
});
