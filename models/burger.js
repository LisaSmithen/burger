var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(valOfCol, valOfOtherCol, cb) {
		orm.insertOne("burgers", valOfCol, valOfOtherCol, function(res) {
			cb(res);
		});
	},
	updateOne: function(columnInput, condition, cb) {
		orm.updateOne("burgers", columnInput, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;
