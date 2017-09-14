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

exports.isEmpty = isEmpty;
