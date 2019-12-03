const clonedeep = require( 'lodash.clonedeep' );

const o_nav = clonedeep( require( '../../objects/o-nav/o-nav.prototype' ) );
const o_select_nav = clonedeep( require( '../../objects/o-select-nav/o-select-nav.prototype' ) );

o_nav.o_nav_classes = 'lrv-u-flex lrv-u-justify-content-center';
o_nav.o_nav_list_classes += ' lrv-u-flex lrv-a-space-children-horizontal lrv-u-align-items-center lrv-u-a-unstyle-list';
o_nav.o_nav_list_item_classes = 'lrv-u-text-transform-uppercase lrv-u-font-family-primary lrv-u-color-white lrv-u-font-size-18';

o_select_nav.o_select_nav_classes += ' lrv-u-display-inline-block';
o_select_nav.c_button.c_button_text = 'Year 2019';
o_select_nav.c_button.c_button_classes += ' lrv-u-color-white lrv-u-text-transform-uppercase lrv-u-font-size-20 lrv-u-border-a-1 lrv-u-border-radius-5 lrv-u-padding-lr-1 lrv-u-padding-tb-025 lrv-u-line-height-small';

module.exports = {
	profile_header_classes: '',
	profile_header_top_classes: '',
	profile_header_title_classes: 'lrv-u-font-family-primary lrv-u-font-size-50@desktop lrv-u-font-size-24 lrv-u-text-transform-uppercase lrv-u-font-weight-bold lrv-u-margin-b-050',
	profile_header_title_text: 'Top 200 Collectors',
	profile_header_sponsor_classes: 'lrv-u-font-weight-light',
	profile_header_sponsor_text: 'Sponsored By',
	profile_header_nav_outer_classes: 'lrv-u-background-color-grey lrv-u-padding-tb-050 lrv-u-border-t-1 lrv-u-border-color-white',
	o_nav: o_nav,
	profile_header_o_select_nav_classes: '',
	o_select_nav: o_select_nav
};