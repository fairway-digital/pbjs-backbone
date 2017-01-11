describe("#defaults", function() {
  var TestMessage, testMessage;
  var AnotherTestMessage, anotherTestMessage;

  beforeEach(function() {
    TestMessage = PBB.model.get("defaults", "TestMessage");
    AnotherTestMessage = PBB.model.get("defaults", "AnotherTestMessage");
    testMessage = new TestMessage();
    anotherTestMessage = new AnotherTestMessage();
  });

  afterEach(function() {
    TestMessage = null;
    testMessage = null;
    AnotherTestMessage = null;
    anotherTestMessage = null;
  });

  describe("Model default defaults", function() {
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


  describe("Model custom defaults", function() {
    it("should initialize simple types with value", function() {
      expect(anotherTestMessage.get("resultPerPage")).toBe(10);
    });

    it("should initialize enums types with value", function() {
      expect(anotherTestMessage.get("corpus")).toBe("UNIVERSAL");
    });
  });
});

