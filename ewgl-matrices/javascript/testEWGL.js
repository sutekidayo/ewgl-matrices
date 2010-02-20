TestEWGL = {};

TestEWGL.multiply = function(count){
	var m1 = m4x4.I().rand(),
		m2 = m4x4.I().rand(),
		m3 = m4x4.I().rand(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.x(m2);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

TestEWGL.inverse = function(count){
	var m1 = m4x4.I().rand(),
		m2 = m4x4.I().rand(),
		m3 = m4x4.I().rand(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.inverse();
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

TestEWGL.duplicate = function(count){
	var m1 = m4x4.I().rand(),
		m2 = m4x4.I().rand(),
		m3 = m4x4.I().rand(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m2 = m1.dup();
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

TestEWGL.transpose = function(count){
	var m1 = m4x4.I().rand(),
		m2 = m4x4.I().rand(),
		m3 = m4x4.I().rand(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.transpose();
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

TestEWGL.equal = function(count){
	var m1 = m4x4.I().rand(),
		m2 = m1.dup(),
		m3 = m1.dup(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.eql(m2);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

TestEWGL.determinant = function(count){
	var m1 = m4x4.I().rand(),
		m2 = m4x4.I().rand(),
		m3 = m4x4.I().rand(),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.determinant();
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

TestEWGL.translate = function(count){
	var m1 = m4x4.I().rand(),
		m2 = m4x4.I().rand(),
		m3 = m4x4.I().rand(),
		v1 = v3.set([1,4,9]),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.translate(v1);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

TestEWGL.rotate = function(count){
	var m1 = m4x4.I().rand(),
		m2 = m4x4.I().rand(),
		m3 = m4x4.I().rand(),
		v1 = v3.set([1,4,9]),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.rotate(90,v1);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

TestEWGL.setelements = function(count){
	var m1 = m4x4.I().rand(),
		m2 = m4x4.I().rand(),
		m3 = m4x4.I().rand(),
		v1 = v3.set([1,4,9]),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.setElements(m2.elements);
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}