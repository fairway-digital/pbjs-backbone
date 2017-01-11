describe("#defaults", function() {
  var TestMessage, testMessage;

  beforeEach(function() {
    TestMessage = PBB.model.get("models", "TestMessage");
    testMessage = new TestMessage();
  });

  afterEach(function() {
    TestMessage = null;
    testMessage = null;
  });

  describe("Model", function() {
    var fields = [
      { fieldName: "testFieldString", type: "string", expected: ""},
      { fieldName: "testFieldBool", type: "bool", expected: false },
      { fieldName: "testFieldDouble", type: "double", expected: 0 },
      { fieldName: "testFieldFloat", type: "float", expected: 0 },
      { fieldName: "testFieldInt32", type: "int32", expected: 0 }
    ];

    for (var i = 0 ; i < fields.length ; i++) {
      var field = fields[i];

      it("'" + field.type + "' fields must be initialized by default to '" + field.expected + "'", function() {
        expect(testMessage.get(field.fieldName)).toBe(field.expected);
      });
    }
  });
});

