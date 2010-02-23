
if (MJS_FLOAT_ARRAY_TYPE == Array) {
    function randMatrix() {
	return [Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
		Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
		Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
		Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000];
    }
} else {
    function randMatrix() {
	return new MJS_FLOAT_ARRAY_TYPE([Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
					 Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
					 Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000,
					 Math.random()*1000, Math.random()*1000, Math.random()*1000, Math.random()*1000]);
    }
}


Testmjs = {};

Testmjs.multiply = function(count){
	var m1 = randMatrix(),
		m2 = randMatrix(),
		m3 = randMatrix(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		M4x4.mul(m1, m2, m3);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testmjs.multiply1 = function(count){
	var m1 = randMatrix(),
		m2 = randMatrix(),
		m3 = randMatrix(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		M4x4.mul1(m1, m2, m3);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testmjs.inverse = function(count){
	var m1 = randMatrix(),
		m2 = randMatrix(),
		m3 = randMatrix(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		M4x4.inverseOrthonormal(m1,m1);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testmjs.duplicate = function(count){
	var m1 = randMatrix(),
		m2 = randMatrix(),
		m3 = randMatrix(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		M4x4.clone(m1,m2);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testmjs.transpose = function(count){
	var m1 = randMatrix(),
		m2 = randMatrix(),
		m3 = randMatrix(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		M4x4.transpose(m1,m1);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testmjs.translate = function(count){
	var m1 = randMatrix(),
		m2 = randMatrix(),
		m3 = randMatrix(),
		v1 = V3.$([1,2,3]),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		M4x4.translate(v1,m1,m1);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testmjs.rotate = function(count){
	var m1 = randMatrix(),
		m2 = randMatrix(),
		m3 = randMatrix(),
		v1 = V3.$([1,2,3]),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		M4x4.rotate(90,v1,m1,m1);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}
Testmjs.setelements = function(count){
	var m1 = randMatrix(),
		m2 = randMatrix(),
		m3 = randMatrix(),
		v1 = V3.$([1,2,3]),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1 = M4x4.$(m2[0],m2[1],m2[2],m2[3],m2[4],m2[5],m2[6],m2[7],
					m2[8],m2[9],m2[10],m2[11],m2[12],m2[13],m2[14],m2[15]);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}
Testmjs.realLifeTest = function(count){
	var m1 = randMatrix(),
		m2 = randMatrix(),
		m3 = randMatrix(),
		vector1 = V3.$([1,2,3]),
		vector2 = V3.$([1,2,3]),
		vector3 = V3.$([-4,-2,-1]),
		vector4 = V3.$([-4,-2,-1]),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1 = M4x4.I;
		M4x4.translate(vector1,m1,m2)
		M4x4.rotate(Math.PI/2,vector2,m2,m1);
		M4x4.translate(vector3,m1,m2)
		M4x4.rotate(Math.PI/3,vector4,m2,m1);
		M4x4.translate(vector1,m1,m2)
		M4x4.rotate(Math.PI/2,vector2,m2,m1);
		M4x4.translate(vector3,m1,m2)
		M4x4.rotate(Math.PI/3,vector4,m2,m1);
		m1.elements;
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}
