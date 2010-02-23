Testsylvester = {};

Testsylvester.multiply = function(count){
	var m1 = Matrix.Random(4,4),
		m2 = Matrix.Random(4,4),
		m3 = Matrix.Random(4,4),
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

Testsylvester.inverse = function(count){
	var m1 = Matrix.Random(4,4),
		m2 = Matrix.Random(4,4),
		m3 = Matrix.Random(4,4),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.inv();
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testsylvester.duplicate = function(count){
	var m1 = Matrix.Random(4,4),
		m2 = Matrix.Random(4,4),
		m3 = Matrix.Random(4,4),
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

Testsylvester.transpose = function(count){
	var m1 = Matrix.Random(4,4),
		m2 = Matrix.Random(4,4),
		m3 = Matrix.Random(4,4),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m2 = m1.transpose();
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testsylvester.equal = function(count){
	var m1 = Matrix.Random(4,4),
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

Testsylvester.determinant = function(count){
	var m1 = Matrix.Random(4,4),
		m2 = Matrix.Random(4,4),
		m3 = Matrix.Random(4,4),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.det();
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testsylvester.translate = function(count){
	var m1 = Matrix.Random(4,4),
		m2 = Matrix.Random(4,4),
		m3 = Matrix.Random(4,4),
		v1 = $V([1,2,3]);
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.x(Matrix.Translation(v1).ensure4x4());
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}


Testsylvester.rotate = function(count){
	var m1 = Matrix.Random(4,4),
		m2 = Matrix.Random(4,4),
		m3 = Matrix.Random(4,4),
		v1 = $V([1,2,3]);
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1.x(Matrix.Rotation(90,v1).ensure4x4());
	 
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}

Testsylvester.setelements = function(count){
	var m1 = Matrix.Random(4,4),
		m2 = Matrix.Random(4,4),
		m3 = Matrix.Random(4,4),
		v1 = $V([1,2,3]),
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

Testsylvester.realLifeTest = function(count){
	var m1 = Matrix.Random(4,4),
		m2 = Matrix.Random(4,4),
		m3 = Matrix.Random(4,4),
		vector1 = $V([1,2,3]),
		vector2 = $V([1,2,3]),
		vector3 = $V([-4,-2,-1]),
		vector4 = $V([-4,-2,-1]),
		t0 = Date.now();
	for (var i = 0; i < count; ++i) {
		m1 = Matrix.I(4,4);
		m1.x(Matrix.Translation(vector1).ensure4x4()).x(Matrix.Rotation(90,vector2).ensure4x4());
		m1.x(Matrix.Translation(vector3).ensure4x4()).x(Matrix.Rotation(90,vector4).ensure4x4());
		m1.x(Matrix.Translation(vector1).ensure4x4()).x(Matrix.Rotation(90,vector2).ensure4x4());
		m1.x(Matrix.Translation(vector3).ensure4x4()).x(Matrix.Rotation(90,vector4).ensure4x4());
		m1.flatten();
		
		tmp = m3;
		m3 = m2;
		m2 = m1;
		m1 = tmp;
    }
	var t1 = Date.now();
	return t1-t0;
}