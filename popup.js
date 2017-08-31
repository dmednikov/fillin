

function click(membershipNumberAndPostalCodeString) {

  chrome.tabs.executeScript(null,
    {
      code: "var membershipNumberAndPostalCode = '" + membershipNumberAndPostalCodeString + "';"
    });
  chrome.tabs.executeScript(null,
      {
        file: "/fillin_values.js"
      });

  //window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('button');

  for (var i = 0; i < buttons.length; i++) {
    let button_id = buttons[i].id;
    let content = document.getElementById("c_" + button_id).innerHTML;

    buttons[i].addEventListener('click', function () {
      click(content);
    });
  }
});