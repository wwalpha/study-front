const isEmpty = function (uri, filename) {
  const link = document.createElement('a');

  if (typeof link.download === 'string') {
    // Firefox requires the link to be in the body
    document.body.appendChild(link);
    link.download = filename;
    link.href = uri;
    link.click();
    // remove the link when done
    document.body.removeChild(link);
  } else {
    location.replace(uri);
  }
};

const strFormat = function (args) {
  const str = this;
  const regexp = new RegExp("{-?[0-9]+}", "g");
  return str.replace(regexp, function(item) {
    var intVal = parseInt(item.substring(1, item.length - 1));
    var replace;
    if (intVal >= 0) {
      replace = args[intVal];
    } else if (intVal === -1) {
      replace = '{';
    } else if (intVal === -2) {
      replace = '}';
    } else {
      replace = '';
    }
    return replace;
  });
};

exports.isEmpty = isEmpty;
exports.strFormat = strFormat;
