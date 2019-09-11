
//     var b = firebase.database().ref("messages");
//         $("#submitContact").submit(function(a) { $(this), console.log("Submit to Firebase");
//         var c = $("#name").val(),
//             d = $("#destination").val(),
//             x = $("#timeField").val(),
//             y = $("#frequencyField").val(),
//             f = { name: c, destination: d, timeField: x, frequencyField: y};
//         return b.push(f).then(function(a) { 
//             $(".sucess").css("display", "block"), 
//             $(".sucess-none").css("display", "none") }), !1 })   
// });

// $(document).ready(function() {
//     if ($('#newTrain').length > 0 ) {
//         contactScript('forcontact');
//     }
// });


$(document).ready(function() {
  console.log("train file has loaded")

console.log(firebase);
var firebaseConfig = { 
      apiKey: "AIzaSyCbkpARF1NLMvfj_wywe9qbfZfEJ8vTMYA",
	    authDomain: "train-time-1f9c9.firebaseapp.com",
        databaseURL: "https://train-time-1f9c9.firebaseio.com",
        projectId: "train-time-1f9c9",
        storageBucket: "",
        messagingSenderId: "170875927561",
        appId: "1:170875927561:web:13fcd1f6ad2078b2020cd8"
    };

    firebase.initializeApp(firebaseConfig);

    $("#submitContact").click(function(){
        console.log('search...')
                // creating a variable for search term
var nameField = $("#name").val().trim();
var destinationField = $("#destination").val().trim();
var timeField = $("#firstTime").val().trim();
var frequencyField = $("#Frequency").val().trim();
var db = firebase.database();

var createRow = function(data) {
// Create a new table row element
var tRow = $("<tr>");
// Methods run on jQuery selectors return the selector they we run on
// This is why we can create and save a reference to a td in the same statement we update its text
var titleTd = $("<td>").text(data);
// Append the newly created table data to the table row
tRow.append(titleTd);
// Append the table row to the table body
$("tbody").append(tRow);
};
console.log(nameField);
    });

});