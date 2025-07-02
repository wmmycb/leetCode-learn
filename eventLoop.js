(function () {
	var result = new Array();
	for (var i = 0; i < 5; i++) {
		result[i] = function (num) {
			return function () {
				return num;
			};
		};
	}
})()(function () {
	var result = new Array();
	for (let i = 0; i < 5; i++) {
		result[i] = (function () {
			return i;
		})(i);
	}
	return result;
})()(function () {
	var result = new Array();
	for (var i = 0; i < 5; i++) {
		result[i] = (function () {
			return i;
		})(i);
	}
	return result;
})();

var a = "window";

var test = {
	a: "test",
	getAFunc: function () {
		var self = this;
		return function () {
			return self.a;
		};
	},
};

var test = {
	a: "test",
	getAFunc: function () {
		return function () {
			return this.a;
		};
	},
};
console.log(test.getAFunc()());

var test = {
	a: "test",
	getAFunc: function () {
		return () => {
			return this.a;
		};
	},
};
console.log(test.getAFunc()());

var test = {
	a: "test",
	getAFunc: () => {
		return () => this.a;
	},
};
console.log(test.getAFunc()());
