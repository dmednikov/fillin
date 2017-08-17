

function click(membershipNumberAndPostalCodeString) {

  chrome.tabs.executeScript(null,
    {
      code: "var membershipNumberAndPostalCode = '" + membershipNumberAndPostalCodeString + "';"
    });
  chrome.tabs.executeScript(null,
      {
        file: "/fillin_values.js"
      });

  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');

  for (var i = 1; i <= buttons.length; i++) {
    let content = document.getElementById("c_"+i).placeholder;
    buttons[i-1].addEventListener('click', function () {
      click(content);
    });
  }
});