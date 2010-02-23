(function(){
	var precision = 1e-6;
	var identitymatrix =  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];

	var matrix = function(els){
		this.elements = new WebGLFloatArray(els || identitymatrix);
		return this;
	};
	
	matrix.prototype.I = matrix.prototype.identity = function(){
		this.elements = identitymatrix;
		return this;
	};
	
	
	matrix.prototype.e = function(i,j) {
		return this.elements[((i-1)*4)+(j-1)];
	};
	
	matrix.prototype.row = function(i){
		return [this.elements[i-1],this.elements[3+i],this.elements[7+i],this.elements[11+i]];
	};

	matrix.prototype.col = function(i){
		return [this.elements[i*4-4],this.elements[i*4-3],this.elements[i*4-2],this.elements[i*4-1]];
	};
	
	matrix.prototype.dimensions = function() {
		return {'rows':4,'cols':4};
	};
	
	matrix.prototype.rows = function() {
		return 4;
	};
	
	matrix.prototype.cols = function() {
		return 4;
	};
	
	matrix.prototype.eql = function(matrix) {
		var i = 16,e1 = this.elements,e2 = matrix.elements ;
					
		return  Math.abs(e1[0] - e2[0]) < precision &&
				Math.abs(e1[1] - e2[1]) < precision &&
				Math.abs(e1[2] - e2[2]) < precision &&
				Math.abs(e1[3] - e2[3]) < precision &&
				Math.abs(e1[4] - e2[4]) < precision &&
				Math.abs(e1[5] - e2[5]) < precision &&
				Math.abs(e1[6] - e2[6]) < precision &&
				Math.abs(e1[7] - e2[7]) < precision &&
				Math.abs(e1[8] - e2[8]) < precision &&
				Math.abs(e1[9] - e2[9]) < precision &&
				Math.abs(e1[10] - e2[10]) < precision &&
				Math.abs(e1[11] - e2[11]) < precision &&
				Math.abs(e1[12] - e2[12]) < precision &&
				Math.abs(e1[13] - e2[13]) < precision &&
				Math.abs(e1[14] - e2[14]) < precision &&
				Math.abs(e1[15] - e2[15]) < precision;
	};
	
	matrix.prototype.setElements = function(els){
		this.elements[0] = els[0];
		this.elements[1] = els[1];
		this.elements[2] = els[2];
		this.elements[3] = els[3];
		
		this.elements[4] = els[4];
		this.elements[5] = els[5];
		this.elements[6] = els[6];
		this.elements[7] = els[7];
		
		this.elements[8] = els[8];
		this.elements[9] = els[9];
		this.elements[10] = els[10];
		this.elements[11] = els[11];
		
		this.elements[12] = els[12];
		this.elements[13] = els[13];
		this.elements[14] = els[14];
		this.elements[15] = els[15];
		return this;
	};
	
	matrix.prototype.dup = function(){
		return (new matrix(this.elements));
	};
	
	matrix.prototype.map =  function(fn) {
		var els = [],i = 16;
		while (i--){
			els[i] = fn(this.elements[i],parseInt(i/4)+1,i%4+1);
		}
		return new matrix().setElements(els);
	}
	
	matrix.prototype.add = function(matrix){
		var els1 = this.elements,els2 = matrix.elements,i = 16;
		while(i--){
			this.elements[i] = els1[i]+els2[i];
		}
		return this;
	}
	
	matrix.prototype.substract =function(matrix){
		var els1 = this.elements,els2 = matrix.elements,i = 16;
		while(i--){
			this.elements[i] = els1[i]-els2[i];
		}
		return this;
	}
	
	matrix.prototype.multiply = matrix.prototype.x = function(matrix) {
		var m1 = this.elements,m2 = matrix.elements || matrix,
			m10 =  m1[0], m11 =  m1[4], m12 =  m1[8], m13 =  m1[12],
			m14 =  m1[1], m15 =  m1[5], m16 =  m1[9], m17 =  m1[13],
			m18 =  m1[2], m19 =  m1[6], m110 = m1[10],m111 = m1[14],
			m112 = m1[3], m113 = m1[7], m114 = m1[11],m115 = m1[15],
			
			m20 =  m2[0], m21 =  m2[4], m22 =  m2[8], m23 =  m2[12],
			m24 =  m2[1], m25 =  m2[5], m26 =  m2[9], m27 =  m2[13],
			m28 =  m2[2], m29 =  m2[6], m210 = m2[10],m211 = m2[14],
			m212 = m2[3],m213 = m2[7],m214 = m2[11],m215 = m2[15];
		
		

		this.elements[0] = m10 * m20 + m11 * m24 + m12 * m28 + m13 * m212;
		this.elements[1] = m14 * m20 + m15 * m24 + m16 * m28 + m17 * m212;
		this.elements[2] = 	m18 * m20 + m19 * m24 + m110 * m28 + m111 * m212;
		this.elements[3] = 	m112 * m20 + m113 * m24 + m114 * m28 + m115 * m212;
				
		this.elements[4] = 	m10 * m21 + m11 * m25 + m12 * m29 + m13 * m213;
		this.elements[5] = 	m14 * m21 + m15 * m25 + m16 * m29 + m17 * m213;
		this.elements[6] = 	m18 * m21 + m19 * m25 + m110 * m29 + m111 * m213;
		this.elements[7] = 	m112 * m21 + m113 * m25 + m114 * m29 + m115 * m213;			
			
		this.elements[8] = 	m10 * m22 + m11 * m26 + m12 * m210 + m13 * m214;
		this.elements[9] = 	m14 * m22 + m15 * m26 + m16 * m210 + m17 * m214;
		this.elements[10] = m18 * m22 + m19 * m26 + m110 * m210 + m111 * m214;
		this.elements[11] = m112 * m22 + m113 * m26 + m114 * m210 + m115 * m214;
			
		this.elements[12] = m10 * m23 + m11 * m27 + m12 * m211 + m13 * m215;
		this.elements[13] = m14 * m23 + m15 * m27 + m16 * m211 + m17 * m215;
		this.elements[14] = m18 * m23 + m19 * m27 + m110 * m211 + m111 * m215;
		this.elements[15] = m112 * m23 + m113 * m27 + m114 * m211 + m115 * m215;
		
		return this;
	};
	
	matrix.prototype.translate = function(vector) {
		var m1 = this.elements,v1 = vector.elements || vector,
			m10 =  m1[0], m11 =  m1[4], m12 =  m1[8], m13 =  m1[12],
			m14 =  m1[1], m15 =  m1[5], m16 =  m1[9], m17 =  m1[13],
			m18 =  m1[2], m19 =  m1[6], m110 = m1[10],m111 = m1[14],
			m112 = m1[3], m113 = m1[7], m114 = m1[11],m115 = m1[15],
			
			m23 = v1[0],m27 = v1[1],m211 = v1[2];
		
		

		this.elements[0] = m10;
		this.elements[1] = m14;
		this.elements[2] = 	m18;
		this.elements[3] = 	m112;
				
		this.elements[4] = 	m11;
		this.elements[5] = 	m15;
		this.elements[6] = 	m19;
		this.elements[7] = 	m113;			
			
		this.elements[8] = 	m12;
		this.elements[9] = 	m16;
		this.elements[10] = m110;
		this.elements[11] = m114;
			
		this.elements[12] = m10 * m23 + m11 * m27 + m12 * m211 + m13;
		this.elements[13] = m14 * m23 + m15 * m27 + m16 * m211 + m17;
		this.elements[14] = m18 * m23 + m19 * m27 + m110 * m211 + m111;
		this.elements[15] = m112 * m23 + m113 * m27 + m114 * m211 + m115;
		
		return this;
	};
	
	matrix.prototype.rotate = function(theta,vector)
	{
		var v = vector.elements ? vector.elements : vector,
			m1 = this.elements,
			v0 = v[0],v1 = v[1],v2 = v[2],
			mod = Math.sqrt(v0*v0+v1*v1+v2*v2),
			x = v0/mod, y = v1/mod, z = v2/mod,
			s = Math.sin(theta), c = Math.cos(theta), t = 1 - c,
			
			m10 =  m1[0], m11 =  m1[4], m12 =  m1[8], m13 =  m1[12],
			m14 =  m1[1], m15 =  m1[5], m16 =  m1[9], m17 =  m1[13],
			m18 =  m1[2], m19 =  m1[6], m110 = m1[10],m111 = m1[14],
			m112 = m1[3], m113 = m1[7], m114 = m1[11],m115 = m1[15],
			
			m20 =  t*x*x + c,   m21 =  t*x*y-s*z,   m22 =  t*x*z + s*y,
			m24 =  t*x*y + s*z, m25 =  t*y*y + c,   m26 =  t*y*z - s*x,
			m28 =  t*x*z - s*y, m29 =  t*y*z + s*x, m210 = t*z*z + c;
			
		this.elements[0] = m10 * m20 + m11 * m24 + m12 * m28;
		this.elements[1] = m14 * m20 + m15 * m24 + m16 * m28;
		this.elements[2] = m18 * m20 + m19 * m24 + m110 * m28;
		this.elements[3] = m112 * m20 + m113 * m24 + m114 * m28;
				
		this.elements[4] = m10 * m21 + m11 * m25 + m12 * m29;
		this.elements[5] = m14 * m21 + m15 * m25 + m16 * m29;
		this.elements[6] = m18 * m21 + m19 * m25 + m110 * m29;
		this.elements[7] = m112 * m21 + m113 * m25 + m114 * m29;		
				
		this.elements[8] = m10 * m22 + m11 * m26 + m12 * m210;
		this.elements[9] = m14 * m22 + m15 * m26 + m16 * m210;
		this.elements[10] = m18 * m22 + m19 * m26 + m110 * m210;
		this.elements[11] = m112 * m22 + m113 * m26 + m114 * m210;
				
		this.elements[12] = m13;
		this.elements[13] = m17;
		this.elements[14] = m111;
		this.elements[15] = m115;
		
		return this;
	}
	
	matrix.prototype.scale = function(vector){
		var s = vector.elements ? vector.elements : vector,
			m1 = this.elements,
			
			m10 =  m1[0], m11 =  m1[4], m12 =  m1[8], m13 =  m1[12],
			m14 =  m1[1], m15 =  m1[5], m16 =  m1[9], m17 =  m1[13],
			m18 =  m1[2], m19 =  m1[6], m110 = m1[10],m111 = m1[14],
			m112 = m1[3], m113 = m1[7], m114 = m1[11],m115 = m1[15],
			
			m20 = s[0], m25 = s[1], m210 = s[2];
			
		this.elements[0] = m10 * m20;
		this.elements[1] = m14 * m20;
		this.elements[2] = 	m18 * m20;
		this.elements[3] = 	m112 * m20;
				
		this.elements[4] = 	m11 * m25;
		this.elements[5] = 	m15 * m25;
		this.elements[6] = 	m19 * m25;
		this.elements[7] = 	m113 * m25;			
			
		this.elements[8] = 	m12 * m210;
		this.elements[9] = 	m16 * m210;
		this.elements[10] = m110 * m210;
		this.elements[11] = m114 * m210;
			
		this.elements[12] = m13;
		this.elements[13] = m17;
		this.elements[14] = m111;
		this.elements[15] = m115;
		
		return this;
	};

	
	matrix.prototype.transpose = function(){
		var e = this.elements,
		
		k = e[1];
		this.elements[1] = e[4];
		this.elements[4] = k;
		
		k = e[2];
		this.elements[2] = e[8];
		this.elements[8] = k;
		
		k = e[3];
		this.elements[3] = e[12];
		this.elements[12] = k;	
		
		k = e[6];
		this.elements[6] = e[9];
		this.elements[9] = k;
		
		k = e[7];		
		this.elements[7] = e[13];
		this.elements[13] = k;
		
		k = e[11];
		this.elements[11] = e[14];
		this.elements[14] = k;
		
		return this;
	};
	
	matrix.prototype.max = function(){
		var i = 16,e = this.elements,m = 0;
		while (i--){
			if (Math.abs(e[i]) > Math.abs(m)) { m = e[i];}
		}
		return m;
	};
	
	matrix.prototype.min = function(){
		var i = 16,e = this.elements,m = Infinity;
		while (i--){
			if (Math.abs(e[i]) < Math.abs(m)) { m = e[i];}
		}
		return m;
	};
	
	matrix.prototype.indexOf = function(value){
		var i = 16,j;
		while (i--){
			j = 15 - i;
			if (this.elements[j] == value) { return {'i': parseInt(j/4)+1, 'j': j%4+1};}
		}
		return null;
	};
	
	matrix.prototype.diagonal = function(){
		var els = this.elements;
		return [els[0],els[5],els[10],els[15]];
	}
	
	matrix.prototype.determinant = matrix.prototype.det = function() {
		var m1 = this.elements,
			m00 =  m1[0], m01 =  m1[4], m02 =  m1[8],  m03 =  m1[12],
			m10 =  m1[1], m11 =  m1[5], m12 =  m1[9],  m13 =  m1[13],
			m20 =  m1[2], m21 =  m1[6], m22 =  m1[10], m23 = m1[14],
			m30 =  m1[3], m31 =  m1[7], m32 =  m1[11], m33 = m1[15];
		
		return 	m03 * m12 * m21 * m30-m02 * m13 * m21 * m30-m03 * m11 * m22 * m30+m01 * m13 * m22 * m30+
				m02 * m11 * m23 * m30-m01 * m12 * m23 * m30-m03 * m12 * m20 * m31+m02 * m13 * m20 * m31+
				m03 * m10 * m22 * m31-m00 * m13 * m22 * m31-m02 * m10 * m23 * m31+m00 * m12 * m23 * m31+
				m03 * m11 * m20 * m32-m01 * m13 * m20 * m32-m03 * m10 * m21 * m32+m00 * m13 * m21 * m32+
				m01 * m10 * m23 * m32-m00 * m11 * m23 * m32-m02 * m11 * m20 * m33+m01 * m12 * m20 * m33+
				m02 * m10 * m21 * m33-m00 * m12 * m21 * m33-m01 * m10 * m22 * m33+m00 * m11 * m22 * m33;
	}
	
	matrix.prototype.isSingular = function() {
		return (this.determinant() === 0);
	}
	
	matrix.prototype.trace = matrix.prototype.tr = function(){
		var e = this.elements;
		return (e[0]+e[5]+e[10]+e[15])
	}
	
	matrix.prototype.inverse = function(){
		var	m1 = this.elements,d = this.determinant(),
			m00 =  m1[0], m01 =  m1[4], m02 =  m1[8],  m03 =  m1[12],
			m10 =  m1[1], m11 =  m1[5], m12 =  m1[9],  m13 =  m1[13],
			m20 =  m1[2], m21 =  m1[6], m22 =  m1[10], m23 = m1[14],
			m30 =  m1[3], m31 =  m1[7], m32 =  m1[11], m33 = m1[15];
			
		this.elements[0] = ( m12*m23*m31 - m13*m22*m31 + m13*m21*m32 - m11*m23*m32 - m12*m21*m33 + m11*m22*m33)/d;
		this.elements[1] = ( m13*m22*m30 - m12*m23*m30 - m13*m20*m32 + m10*m23*m32 + m12*m20*m33 - m10*m22*m33)/d;
		this.elements[2] = ( m11*m23*m30 - m13*m21*m30 + m13*m20*m31 - m10*m23*m31 - m11*m20*m33 + m10*m21*m33)/d;
		this.elements[3] = ( m12*m21*m30 - m11*m22*m30 - m12*m20*m31 + m10*m22*m31 + m11*m20*m32 - m10*m21*m32)/d;
		   
		this.elements[4] = ( m03*m22*m31 - m02*m23*m31 - m03*m21*m32 + m01*m23*m32 + m02*m21*m33 - m01*m22*m33)/d;
		this.elements[5] = ( m02*m23*m30 - m03*m22*m30 + m03*m20*m32 - m00*m23*m32 - m02*m20*m33 + m00*m22*m33)/d;
		this.elements[6] = ( m03*m21*m30 - m01*m23*m30 - m03*m20*m31 + m00*m23*m31 + m01*m20*m33 - m00*m21*m33)/d;
		this.elements[7] = ( m01*m22*m30 - m02*m21*m30 + m02*m20*m31 - m00*m22*m31 - m01*m20*m32 + m00*m21*m32)/d;
		   
		this.elements[8] = ( m02*m13*m31 - m03*m12*m31 + m03*m11*m32 - m01*m13*m32 - m02*m11*m33 + m01*m12*m33)/d;
		this.elements[9] = ( m03*m12*m30 - m02*m13*m30 - m03*m10*m32 + m00*m13*m32 + m02*m10*m33 - m00*m12*m33)/d;
		this.elements[10] = ( m01*m13*m30 - m03*m11*m30 + m03*m10*m31 - m00*m13*m31 - m01*m10*m33 + m00*m11*m33)/d;
		this.elements[11] = ( m02*m11*m30 - m01*m12*m30 - m02*m10*m31 + m00*m12*m31 + m01*m10*m32 - m00*m11*m32)/d;
			
		this.elements[12] = ( m03*m12*m21 - m02*m13*m21 - m03*m11*m22 + m01*m13*m22 + m02*m11*m23 - m01*m12*m23)/d;
		this.elements[13] = ( m02*m13*m20 - m03*m12*m20 + m03*m10*m22 - m00*m13*m22 - m02*m10*m23 + m00*m12*m23)/d;
		this.elements[14] = ( m03*m11*m20 - m01*m13*m20 - m03*m10*m21 + m00*m13*m21 + m01*m10*m23 - m00*m11*m23)/d;
		this.elements[15] = ( m01*m12*m20 - m02*m11*m20 + m02*m10*m21 - m00*m12*m21 - m01*m10*m22 + m00*m11*m22)/d;
		
		return this;
	}
	
	matrix.prototype.view = function(){
		var e = this.elements;
		return 	"[ " + e[0] + " , " + e[4] + " , " + e[8] + " , " + e[12] + " ] \n " +
				"[ " + e[1] + " , " + e[5] + " , " + e[9] + " , " + e[13] + " ] \n " +
				"[ " + e[2] + " , " + e[6] + " , " + e[10] + " , " + e[14] + " ] \n " +
				"[ " + e[3] + " , " + e[7] + " , " + e[11] + " , " + e[15] + " ]";
	};
	
	matrix.prototype.rand = function(){
		var i = 16;
		while (i--){
			this.elements[i] = Math.random()*1000;
		}
		return this;
	};
	
	matrix.I = function(){
		return (new matrix());
	}
	matrix.set = matrix.$ = function(){
		var elements = arguments[15] ? [arguments[0],arguments[1],arguments[2],arguments[3],
										arguments[4],arguments[5],arguments[6],arguments[7],
										arguments[8],arguments[9],arguments[10],arguments[11],
										arguments[12],arguments[13],arguments[14],arguments[15]] : arguments[0];
		return 	(new matrix(elements));
	}
	matrix.makeFrustum = function (left, right, bottom, top, znear, zfar){
	
		var X = 2*znear/(right-left),
			Y = 2*znear/(top-bottom),
			A = (right+left)/(right-left),
			B = (top+bottom)/(top-bottom),
			C = -(zfar+znear)/(zfar-znear),
			D = -2*zfar*znear/(zfar-znear),
			r = [];
		
		r[0] = 2*znear/(right-left);
		r[1] = 0;
		r[2] = 0;
		r[3] = 0;
		r[4] = 0;
		r[5] = 2*znear/(top-bottom);
		r[6] = 0;
		r[7] = 0;
		r[8] = (right+left)/(right-left);
		r[9] = (top+bottom)/(top-bottom);
		r[10] = -(zfar+znear)/(zfar-znear);
		r[11] = -1;
		r[12] = 0;
		r[13] = 0;
		r[14] = -2*zfar*znear/(zfar-znear);
		r[15] = 0;
		
		return matrix.set(r);
	}
	
	matrix.makePerspective = function (fovy, aspect, znear, zfar) {
	
		var ymax = znear * Math.tan(fovy * Math.PI / 360.0),
			ymin = -ymax,
			xmin = ymin * aspect,
			xmax = ymax * aspect;

		return matrix.makeFrustum(xmin, xmax, ymin, ymax, znear, zfar);
	};
	
	matrix.makeOrtho = function(left, right, bottom, top, znear, zfar) {

		var tX = -(right+left)/(right-left),
			tY = -(top+bottom)/(top-bottom),
			tZ = -(zfar+znear)/(zfar-znear),
			X = 2 / (right-left),
			Y = 2 / (top-bottom),
			Z = -2 / (zfar-znear),
			r = [];

		r[0] = 2 / (right-left);
		r[1] = 0;
		r[2] = 0;
		r[3] = 0;
		r[4] = 0;
		r[5] = 2 / (top-bottom);
		r[6] = 0;
		r[7] = 0;
		r[8] = 0;
		r[9] = 0;
		r[10] = -2 / (zfar-znear);
		r[11] = 0;
		r[12] = -(right+left)/(right-left);
		r[13] = -(top+bottom)/(top-bottom);
		r[14] = -(zfar+znear)/(zfar-znear);
		r[15] = 0;

		return matrix.set(r);
	};
	
	matrix.makeRotate = function(angle, axis){
		var normAxis = !!axis.elements ? axis.normalize : vector.set(axis).normalize(),
			x = normAxis[0], y = normAxis[1], z = normAxis[2],
			c = Math.cos(angle),
			c1 = 1-c,
			s = Math.sin(angle),
			r = [];
		
		r[0] = x*x*c1+c;
		r[1] = y*x*c1+z*s;
		r[2] = z*x*c1-y*s;
		r[3] = 0;
		r[4] = x*y*c1-z*s;
		r[5] = y*y*c1+c;
		r[6] = y*z*c1+x*s;
		r[7] = 0;
		r[8] = x*z*c1+y*s;
		r[9] = y*z*c1-x*s;
		r[10] = z*z*c1+c;
		r[11] = 0;
		r[12] = 0;
		r[13] = 0;
		r[14] = 0;
		r[15] = 1;

		return matrix.set(r);
	};
	
	matrix.makeScale = function(vector){
		var scale = vector.elements ? vector.elements : vector,
			r = [];
			
		r[0] = scale[0];
		r[1] = 0;
		r[2] = 0;
		r[3] = 0;
		r[4] = 0;
		r[5] = scale[1];
		r[6] = 0;
		r[7] = 0;
		r[8] = 0;
		r[9] = 0;
		r[10] = scale[2];
		r[11] = 0;
		r[12] = 0;
		r[13] = 0;
		r[14] = 0;
		r[15] = 1;

		return matrix.set(r);
	};
	
	matrix.makeTranslate = function(vector){
		var translate = vector.elements ? vector.elements : vector,
			r = [];
			
		r[0] = 1;
		r[1] = 0;
		r[2] = 0;
		r[3] = 0;
		r[4] = 0;
		r[5] = 1;
		r[6] = 0;
		r[7] = 0;
		r[8] = 0;
		r[9] = 0;
		r[10] = 1;
		r[11] = 0;
		r[12] = translate[0];
		r[13] = translate[1];
		r[14] = translate[2];
		r[15] = 1;

		return matrix.set(r);
	};
	
	
	window.m4x4 = matrix;
	
	var vector = function(){
		this.elements = new WebGLFloatArray([0,0,0]);
		return this;
	};
	
	vector.prototype.setElements = function(vector){
		this.elements[0] = vector[0];
		this.elements[1] = vector[1];
		this.elements[2] = vector[2];
		
		return this;
	};
	
	vector.prototype.add = function(vector){
		var a = this.elements,
			b = vector.elements;
			
		this.elements[0] = a[0] + b[0];	
		this.elements[1] = a[1] + b[1];	
		this.elements[2] = a[2] + b[2];
		
		return this;
	}
	
	vector.prototype.sub = function(vector){
		var a = this.elements,
			b = vector.elements;
			
		this.elements[0] = a[0] - b[0];	
		this.elements[1] = a[1] - b[1];	
		this.elements[2] = a[2] - b[2];
		
		return this;
	}
	
	
	vector.prototype.mul = function(vector){
		var a = this.elements,
			b = vector.elements,
			a0 = a[0],a1 = a[1],a2 = a[2],
			b0 = b[0],b1 = b[1],b2 = b[2];
		
		this.elements[0] = a1*b2 - a2*b1;
		this.elements[1] = a2*b0 - a0*b2;
		this.elements[2] = a0*b1 - a1*b0;
		
		return this;
	}
	
	vector.prototype.length = function(){
		var a = this.elements;
		
		return Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2]);
	};
	
	vector.prototype.dot = function(vector){
		var a = this.elements,
			b = vector.elements;
			
		return 	a[0] * b[0] +
				a[1] * b[1] +
				a[2] * b[2];
	};
		
	vector.prototype.normalize = function(){
		var a = this.elements,
			l = 1/Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2]);
			
		this.elements[0] = a[0]*l;
		this.elements[1] = a[1]*l;
		this.elements[2] = a[2]*l;
		
		return this;
	}
	
	vector.set =function(){
		var elements = arguments[2] ? [arguments[0],arguments[1],arguments[2]] : arguments[0];
		return 	(new matrix()).setElements(elements);
	}
	
	window.v3 = vector;
})();