require(["protobuf", "protobuf-backbone"], function(protobuf, ppb) {

  protobuf.load("awesome.proto", function(err, root) {
    if (err) throw err;

    ppb.load(root);

    var AwesomeMessage = ppb.get("awesomepackage", "AwesomeMessage");
    var awesomeMessage = new AwesomeMessage();

    console.log(awesomeMessage);
    console.log(temp1.get("awesomeField"));

    // Obtain a message type
    // var AwesomeMessage = root.lookup("awesomepackage.AwesomeMessage");
  });
});
