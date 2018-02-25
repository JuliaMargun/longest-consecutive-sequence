module.exports = function longestConsecutiveLength(array) {

  array.sort((a,b) => a - b);
  var count = 1;
  var maxCount = 1;
  var number = array.length - 1;

  if (array.length == 0)
  	return 0;

  for (var i = number - 1; i >= 0; --i) {

  	if (array[i] == array[i + 1] - 1) {
  		++count;
  	}

  	else if (array[i] != array[i + 1]) { 
  		if (count > maxCount)
  			maxCount = count;
		count = 1;
  	}

  }

  if (count > maxCount)
  		maxCount = count;

  return maxCount;
}
