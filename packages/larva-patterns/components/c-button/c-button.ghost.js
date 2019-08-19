const path = require( 'path' );
const clone = require( '@penskemediacorp/larva' ).clone;
const c_button = clone( path.resolve( __dirname, './c-button.prototype' ) );

c_button.c_button_classes += "pmc-a-unstyle-button pmc-u-cursor-pointer pmc-u-border-a-3 pmc-u-border-radius-5 pmc-u-color-brand-primary pmc-u-padding-tb-050 pmc-u-padding-lr-1 pmc-u-color-grey-dark:hover pmc-u-font-weight-bold pmc-u-display-inline-block";
c_button.c_button_type_attr = "";
c_button.c_button_url = "#";

module.exports = c_button;