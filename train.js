$(document).ready(function() {
    if ($('#newTrain').length > 0 ) {
        contactScript('forcontact');
    }
});

$(document).ready(function() {
    $("#submitContact").click(function(){
                    console.log('search...')
                            // creating a variable for search term
        var nameField = $("#name").val();
        var destinationField = $("#destination").val();
        var timeField = $("#firstTime").val();
        var frequencyField = $("#Frequency").val();
        console.log(nameField);
    });
});


function contactScript(value) {
    var a = { 
      apiKey: "AIzaSyCbkpARF1NLMvfj_wywe9qbfZfEJ8vTMYA",
	    authDomain: "train-time-1f9c9.firebaseapp.com",
        databaseURL: "https://train-time-1f9c9.firebaseio.com",
        projectId: "train-time-1f9c9",
        storageBucket: "",
        messagingSenderId: "170875927561",
        appId: "1:170875927561:web:13fcd1f6ad2078b2020cd8"
    };
    firebase.initializeApp(firebaseConfig);

    firebase.initializeApp(a);
    var b = firebase.database().ref("messages");
        $("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");
        var c = $("#name").val(),
            d = $("#email").val(),
            f = { name: c, email: d};
        return b.push(f).then(function(a) { 
            $(".sucess").css("display", "block"), 
            $(".sucess-none").css("display", "none") }), !1 })   
}
