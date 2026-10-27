function register(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var gender = document.getElementById("gender").value;
  var college = document.getElementById("college").value;
  var dept = document.getElementById("dept").value;
  var year = document.getElementById("year").value;
  var eventName = document.getElementById("event").value;
  var msg = document.getElementById("msg");

  var errors = "";
  if (name.length < 3) errors += "Name must be at least 3 letters\n";
  if (email.indexOf("@") == -1) errors += "Enter a valid email\n";
  if (phone.length != 10 || isNaN(phone)) errors += "Phone must be 10 digits\n";
  if (gender == "") errors += "Select gender\n";
  if (college == "") errors += "Enter college name\n";
  if (dept == "") errors += "Enter department\n";
  if (year == "") errors += "Select year\n";
  if (eventName == "") errors += "Select an event\n";

  if (errors != "") {
    msg.style.color = "red";
    msg.innerText = errors;
    return;
  }

  msg.style.color = "green";
  msg.innerText = "Registered!\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + phone + "\n" +
    "Gender: " + gender + "\n" +
    "College: " + college + "\n" +
    "Department: " + dept + "\n" +
    "Year: " + year + "\n" +
    "Event: " + eventName;
}

function clearMessage() {
  document.getElementById("msg").innerText = "";
}