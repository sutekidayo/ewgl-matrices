(function(){
/*****************************************************************
 *
 *	The shader object
 *
 *****************************************************************/
 
	function shader(gl,shaderdescription){
		var vsshader = getcompiledshader(gl,shaderdescription.vs,"vertex"),
			fsshader = getcompiledshader(gl,shaderdescription.fs,"fragment"),
			shaderprogram = gl.createProgram(),
			i,j,
			attrresult,
			uniresult;
			
		gl.attachShader(shaderprogram, vsshader);
		gl.attachShader(shaderprogram, fsshader);
		gl.linkProgram(shaderprogram);
		
		if (!gl.getProgramParameter(shaderprogram, gl.LINK_STATUS)){
			alert("Could not initialise shaders");
		}
		this.shaderprogram = shaderprogram;
		gl.useProgram(shaderprogram);
		
		if (shaderdescription.attributes != undefined) {
			i = shaderdescription.attributes.length;
			while (i--) {
				j = shaderdescription.attributes[i];
				attrresult[j] = getshaderattributes(gl,shaderProgram,j);
			}
		}
		
		if (shaderdescription.uniforms != undefined){
			i = shaderdescription.uniforms.length;
			while (i--) {
				j = shaderdescription.uniforms[i];
				uniresult[j] = getuniformmatrices(gl,shaderProgram,j);
			}
		}
		
		this["attributes"] = attrresult;
		this["uniforms"] = uniresult;
		
		return this;
	}
	
	var types = {	"vertex" : 35633,
					"fragment" : 35632};
	
	getcompiledshader = function(gl,shaderid,type){
		var shaderel = document.getElementById(shaderid),
			text = shaderel ? getShaderText(shaderel) : shaderid,
			shader = gl.createShader(types[type]);
			
		gl.shaderSource(shader, text);
		
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
		{
			alert(gl.getShaderInfoLog(shader));
			return null;
		}
		return shader;
	}
	
	function getShaderText(el, id)
	{
		var str = "";
		var k = el.firstChild;
		while (k)
		{
			if (k.nodeType == 3)
			{
				str += k.textContent;
			}
			k = k.nextSibling;
		}
		return str;
	}
	
	function getshaderattributes(gl,shaderProgram,attributename)
	{    
		var Attribute = gl.getAttribLocation(shaderProgram, attributename);
		//console.log(Attribute,attributename);
		gl.enableVertexAttribArray(Attribute);
		return Attribute;
	}

	function getuniformmatrices(gl,shaderProgram,uniformname)
	{
		return gl.getUniformLocation(shaderProgram, uniformname);
	}