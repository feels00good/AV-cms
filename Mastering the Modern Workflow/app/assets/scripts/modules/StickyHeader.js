import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.page-section');
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }
      },
      offset: "5%"
    })
  }
}

export default StickyHeader;