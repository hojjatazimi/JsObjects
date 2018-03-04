/**
 * @author Charlie Calvert
 */

require.config({
	paths : {
		'testMe' : './public/testMe',
		'jquery' : './public/JavaScripts/jquery-2.1.0',
		'pubSub' : './public/JavaScripts/PubSubOn',
		'clientMongo' : "./public/JavaScripts/ClientMongo",
		'jasmine' : 'Library/jasmine',
		'jasmine-html' : 'Library/jasmine-html',
		'boot' : 'Library/boot',
		// 'jasmine-jquery' : 'Library/jasmine-jquery'
	},
	shim : {
		'jasmine' : {
			exports : 'jasmine'
		},
		'jasmine-html' : {
			deps : ['jasmine'],
			exports : 'jasmine'
		},
		'boot' : {
			deps : ['jasmine', 'jasmine-html'],
			exports : 'jasmine'
		}
	}
});

require(['jquery', 'boot'], function(j, b, c) {
	'use strict';
	// Load the specs
	require(["TestMeSpec", "ClientSpec"], function() {
		console.log("Main called.");
		// Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
		window.onload();
	});
});
