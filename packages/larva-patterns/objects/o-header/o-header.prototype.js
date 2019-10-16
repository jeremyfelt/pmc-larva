const clonedeep = require( 'lodash.clonedeep' );

const c_heading_prototype = require( '../../components/c-heading/c-heading.prototype' );
const c_heading = clonedeep( c_heading_prototype );

const c_button_prototype = require( '../../components/c-button/c-button.prototype' );
const c_button = clonedeep( c_button_prototype );

c_button.c_button_classes = 'c-button--plain lrv-u-font-size-12 lrv-u-text-transform-uppercase lrv-a-icon-after lrv-a-icon-arrow-right lrv-u-margin-l-auto';
c_button.c_button_text = 'Link';
c_button.c_button_url = '#';

module.exports = {
	o_heading_classes: 'lrv-u-flex lrv-u-align-items-center lrv-u-padding-a-1',
	c_heading: c_heading,
	c_button: c_button
};
