(function(protobuf, PBB) {
  protobuf.load("awesome.proto", function(err, root) {
    if (err) throw err;

    PBB.load(root);

    var AwesomeMessage = PBB.getModel("awesomepackage", "AwesomeMessage");
    var awesomeMessage = new AwesomeMessage();

    console.log(awesomeMessage);
    console.log(awesomeMessage.get("awesomeField"));

    // Obtain a message type
    // var AwesomeMessage = root.lookup("awesomepackage.AwesomeMessage");
  });
}(protobuf, PBB));
