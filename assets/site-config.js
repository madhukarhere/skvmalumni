// SKVM site-wide config. Edit values here; pages read them at load.
(function () {
  var config = {
    // Master switch for the Alumni Network launch popup.
    //   true  → popup loads on pages that include the loader
    //   false → popup is completely inert
    popupEnabled: false,
  };

  // URL overrides for one-off testing without editing this file:
  //   ?popup=1   → force-enable  (e.g. https://.../index.html?popup=1)
  //   ?popup=0   → force-disable
  try {
    var q = new URLSearchParams(window.location.search).get('popup');
    if (q === '1' || q === 'true')  config.popupEnabled = true;
    if (q === '0' || q === 'false') config.popupEnabled = false;
  } catch (e) {}

  window.SKVM_CONFIG = config;
})();
