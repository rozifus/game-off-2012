 /*
 * HexGL
 * @author Thibaut 'BKcore' Despoulain <http://bkcore.com>
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License. 
 *          To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

'use strict';
'v1.0.1';

var go = go || {};


go.GameOff = function(opts)
{
	var self = this;
    var opts = opts || {};

	this.document = opts.document || document;

	this.a = window.location.href;

	this.active = true;

	this.width = opts.width == undefined ? window.innerWidth : opts.width;
	this.height = opts.height == undefined ? window.innerHeight : opts.height;

	this.half = opts.half == undefined ? false : opts.half;

	if(this.half)
	{
		this.width /= 2;
		this.height /=2;
	}

	this.settings = null;
	this.renderer = null;
	this.lib = null;
	this.materials = {};
	this.components = {};

	this.container = opts.container || document.body;

	this.gameplay = null;
    this.mode = "map";

    this.control = new go.Control(this.document);

    // init manager
    this.renderer = new THREE.CanvasRenderer();
    console.log(this.width, this.height);
    this.renderer.setSize( this.width, this.height );
    //this.renderer.domElement.style.position = "relative";
    this.container.appendChild( this.renderer.domElement );
    this.manager = new bkcore.threejs.RenderManager(this.renderer);

    // init scene
    this.map = new go.Map(this.manager);
    this.map.loadBlocks();

}


go.GameOff.prototype.start = function()
{
this.manager.setCurrent("map");

	var self = this;

	function raf()
	{
		requestAnimationFrame( raf );
        self.update();
	};
    raf();

	//if(this.a[15] == "o")

	//this.initGameplay();
}

go.GameOff.prototype.update = function()
{
	if(!this.active) return;
    this.map.processKeys(this.control.key);

	this.manager.renderCurrent();
}

go.GameOff.prototype.init = function()
{

}

go.GameOff.prototype.initRenderer = function() {
   
};

