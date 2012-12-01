/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.GameOff = function(opts)
{
	var self = this;
    var opts = opts || {};
    var level = opts.level || "DEFAULT";

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

	this.container = opts.container || document.body;
    this.control = new go.Control(this.document);

    this.renderer = new THREE.CanvasRenderer();
    this.renderer.setSize( this.width, this.height );
    this.renderer.setClearColorHex( 0xccdddd );
    //this.renderer.domElement.style.position = "relative";
    this.container.appendChild( this.renderer.domElement );
    this.manager = new bkcore.threejs.RenderManager(this.renderer);

    // init scene
    this.map = new go.Map(this.manager, {level: level} );
    this.map.loadBlocks();
    this.renderer.setClearColorHex( this.map.level.background || 0xdddddd );
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
}

go.GameOff.prototype.update = function()
{
	if(!this.active) return;
    this.map.processKeys(this.control.key);
    this.map.update()

	this.manager.renderCurrent();
}


