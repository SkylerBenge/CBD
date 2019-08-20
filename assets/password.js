// Load in Google Fonts and Icons
var fonts = window.fonts || [];
if(fonts.length && !window.isLTie9){
  WebFontConfig = {
    google: {families: fonts},
    custom: {
       families: ['custom-icons'],
       urls: ["{{ 'custom-icons.scss' | asset_url }}"]
    },
    classes: false,
    fontinactive: function(familyName, fvd) {
      console.log("Error: font '" + familyName + "' was not loaded.");
    },
    timeout: 3000
  };
  WebFont.load(WebFontConfig);
}
// Quick fix to align buttons and inputs
var signupHeight = $('.customer-signup-button').outerHeight();
$('.signup-input').css('height',signupHeight);
$('.password-input').css('height',signupHeight);