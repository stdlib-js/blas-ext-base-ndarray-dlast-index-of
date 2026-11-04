/** @license Apache-2.0 */

'use strict';

/**
* Return the last index of a search element in a one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-dlast-index-of
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var dlastIndexOf = require( '@stdlib/blas-ext-base-ndarray-dlast-index-of' );
*
* var x = new Float64Vector( [ 1.0, 2.0, 4.0, 2.0 ] );
*
* var searchElement = scalar2ndarray( 2.0, {
*     'dtype': 'float64'
* });
*
* var fromIndex = scalar2ndarray( 3, {
*     'dtype': 'generic'
* });
*
* var v = dlastIndexOf( [ x, searchElement, fromIndex ] );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
