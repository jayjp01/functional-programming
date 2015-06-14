/**
 * Compose function
 */
function compose(g, f){
 return function(x){
  return g(f(x));
 }
}

/**
 * Curry function
 */
var curry = function(fn){
	return function(){
		if(fn.length > arguments.length){
			var slice = Array.prototype.slice;
			var args = slice.apply(arguments);
			return function(){
				return fn.apply(null, args.concat(slice.apply(arguments)));
			};
		}else
		  return fn.apply(null, arguments);
	};
}

/**
 * logging composable function
 */
function log(x){
 console.log('logging: ', x);
 return x;
}

/**
 * Reverse String
 */
function reverse(s){
 return s.split('').reverse().join('');
}

/**
 * Capitalize first letter
 */
function properNoun(s){
 return s.charAt(0).toUpperCase() + s.slice(1);
}

var revCap = compose(reverse, properNoun);
console.log(revCap("samar"));

/**
 * Get property of object
 */
var get = curry(function(property, object) {
	return object[property];
});

/**
 * Map using curry
 */
var cmap = curry(function(fn, arr){
	return arr.map(fn);
});

var articles = [
  {
    title: 'Everything Sucks',
    url: 'http://do.wn/sucks.html',
    author: {
      name: 'Debbie Downer',
      email: 'debbie@do.wn'
    }
  },
  {
    title: 'If You Please',
    url: 'http://www.geocities.com/milq',
    author: {
      name: 'Caspar Milquetoast',
      email: 'hello@me.com'
    }
  }
];

var names = cmap(
  compose(get('name'), get('author'))
);

console.log(names(articles));