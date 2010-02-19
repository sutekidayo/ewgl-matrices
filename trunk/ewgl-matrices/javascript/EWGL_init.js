(function(){
	var EWGL = function(){
		return EWGL.init.apply(this,arguments);
	}
	
	EWGL.init(canvasid,shaders,options){
		
		var gl = initGL(canvasid),
			canvas = document.getElementById(elementid),
			shaderslength = shaders.length,
			shadersoutput,
			clearcolor;
		
		if (!EWGL.shaders){
			console.log("You need the shader library to use WEBGL");
			return null;
		}
		
		while (shaderslength--){
			j = shaders[shaderslength];
			shader = EWGL.shader(gl,j); //j.vs,j.fs,j.attributes,j.uniforms);
			shadersoutput[j.name] = shader;
		}
		if (!!options){
			if (!!options.clearcolor) {
				var c = clearcolor = options.clearcolor;
				gl.clearColor(c[0],c[1],c[2],c[3]);
			} else {
				clearcolor = null;
			}
			
			if (!!options.cleardepth) {
				cleardepth = options.cleardepth;
				gl.clearDepth(options.cleardepth);
				gl.enable(gl.DEPTH_TEST);
				gl.depthFunc(gl.LEQUAL);
			} else {
				cleardepth = null;
			}
		}
		
		return new WebglObject(gl,shadersoutput,canvas,clearcolor,cleardepth);
	};		
		
	function initGL(canvasid){
	
		var gl,
			canvas = document.getElementById(elementid),
			names = ["webkit-3d","moz-webgl","experimental-webgl","webgl"],
			i = names.length;
			
		while (i--){
			try{
				gl = canvas.getContext(names[i]);
			}
			catch(e){}
		}
		
		if (!gl)
		{
			alert("Could not initialise WebGL, sorry :-(");
		}	
		return gl;
	}
	
	
	/*********************************************************/
	/*********************************************************/
	/*********************************************************/
	/*********************************************************/
	/*********************************************************/
	/*********************************************************/
	
	var WebglObject= function(gl,shaders,canvas,clearcolor,cleardepth){
		this.gl = gl;
		this.shaders = shaders;
		this.activeshader = undefined;
		this.canvas = canvas;
		this.clearcolor = clearcolor;
		this.cleardepth = cleardepth;
		this.perspective = null;
		
		
		if (!EWGL.node){
			this.scene = EWGL.node("rootnode");
		} else {
			this.scene = null;
			console.log("you can't make use of the scene if you don't have EWGL.node");
		}
							
							
		this.setperspective = function(fovy, aspect, znear, zfar) {
			this.perspective = EWGL.matrix.perspective(fovy, aspect, znear, zfar);
			return this;
		}
		this.addshader = function(shader,active){
			var shader = EWGL.shader(gl,j);
			if (!this.shaders[j.name]){
				this.shaders[j.name] = shader;
			}
			if (!!active){
				this.activeshader = shader;
			}
			return this;
		}
		return this;
	}
	
	EWGL.extend = function(object){
		for( name in object){
			WebglObject.prototype[name] = object[name];
		}
	}
	
	window.EWGL = EWGL;
		
})();
