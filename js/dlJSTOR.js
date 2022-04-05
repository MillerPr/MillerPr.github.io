// This two commands seems to work.
// While on a JSTOR page with multiple downloads,
// define the var, then run the for loopl

var all = document.getElementsByTagName('mfe-download-pharos-link');
for (let i = 0; i < all.length; i++) {
  all[i].click();
}


function dl(url, items) {
  // var url = "https://www-jstor-org.proxy.uchicago.edu/stable/10.5749/j.ctt1pwt6wq."
  // var items = 43;
  for (let i = 1; i < items+1; i++) {
    download_file(url + i, 'download_' + i +'.pdf?refreqid=excelsior%3Ac0e9ddf112377218af37f886ac8c5c6e&ab_segments=&origin=');
    // window.open(url+i);
    // console.log(url);
  };
};

function download(url, filename) {
  fetch(url).then(function (t) {
    return t.blob().then((b) => {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.setAttribute("download", filename);
      a.click();
    }
    );
  });
}

download("https://get.geojs.io/v1/ip/geo.json", "geoip.json")
download("data:text/html,Hello Developer!", "HelloDeveloper.txt");

/* Helper function */
function download_file(fileURL, fileName) {
  // for non-IE
  if (!window.ActiveXObject) {
    var save = document.createElement('a');
    save.href = fileURL;
    save.target = '_blank';
    var filename = fileURL.substring(fileURL.lastIndexOf('/') + 1);
    save.download = fileName || filename;
    if (navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
      document.location = save.href;
      // window event not working here
    } else {
      var evt = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': false
      });
      save.dispatchEvent(evt);
      (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }
  }

  // for IE < 11
  else if (!!window.ActiveXObject && document.execCommand) {
    var _window = window.open(fileURL, '_blank');
    _window.document.close();
    _window.document.execCommand('SaveAs', true, fileName || fileURL)
    _window.close();
  }
}
