let output = document.getElementById("output");

function postToGoogle() {
  var field1 = $("#name-2").val();
  var field2 = $("#email-2").val();
  var field4 = $("#message-2").val();

  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeqkc9SPIHkGAcyaq4h11HMxTsIoK8ZVGJHv5hT8kGQCwtEvQ/formResponse",

    //add your google form generated numbers below which are also the 'names' of your inputs
    data: {
      "entry.1443594820": field1,
      "entry.1183644175": field2,
      "entry.1074720692": field4,
    },
    type: "POST",
    dataType: "xml",
    success: function (d) {
      $("#contact").trigger("reset");
    },
    error: function (x, y, z) {
      $("#contact").trigger("reset");
    },
  });

  return false;
}

function success() {
  output.innerHTML = "Form submitted successfully!";

  document.getElementById("name-2").value = "";
  document.getElementById("email-2").value = "";
  document.getElementById("message-2").value = "";
  return false;
}
