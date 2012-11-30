/*
 * Gitium Chronoblockatics 
 * @author Ryan Miller (rozifus) <http://www.github.com/rozifus/> 
 * @license This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/.
 */

var go = go || {};

go.Control = function(domElement)
{
	var self = this;

	this.key = {
        push: false,
        pull: false,
        ghost: false,
        camera: false,

		up: false,
		down: false,
		left: false,
		right: false,
	};

	function onKeyDown(event) 
	{
		switch(event.keyCode) 
		{
            case 65: /*A*/self.key.push = true; break;
			case 83: /*S*/self.key.pull = true; break;
			case 68: /*D*/self.key.ghost = true; break;
			case 70: /*F*/self.key.camera = true; break;

			case 38: /*up*/	self.key.up = true; break;
			case 40: /*down*/self.key.down = true; break;
			case 37: /*left*/self.key.left = true; break;
			case 39: /*right*/self.key.right = true; break;

		}
	};

	function onKeyUp(event) 
	{
		switch(event.keyCode) 
		{
            case 65: /*A*/self.key.push = false; break;
			case 83: /*S*/self.key.pull = false; break;
			case 68: /*D*/self.key.ghost = false; break;
			case 70: /*F*/self.key.camera = false; break;

			case 38: /*up*/	self.key.up = false; break;
			case 40: /*down*/self.key.down = false; break;
			case 37: /*left*/self.key.left = false; break;
			case 39: /*right*/self.key.right = false; break;

		}
	};

	domElement.addEventListener('keydown', onKeyDown, false);
	domElement.addEventListener('keyup', onKeyUp, false);
};

