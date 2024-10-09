describe("About Reflection (about_reflection.js)", function() {
  function A() {
    this.aprop = "A";
  };

  function B() {
    this.bprop = "B";
  };

  B.prototype = new A();

  it("hasOwnProperty", function() {
    let b = new B();

    let keys = [];
    for (let propertyName in b) {
      keys.push(propertyName);
    }
    // how many elements are in the keys array?
    expect(2).toBe(keys.length);  // 'bprop' from B and 'aprop' from A (prototype chain)
    // what are the properties of the array?
    expect(["bprop", "aprop"]).toEqual(keys);

    // hasOwnProperty returns true if the parameter is a property directly on the object,
    // but not if it is a property accessible via the prototype chain.
    let ownKeys = [];
    for(let propertyName in b) {
      if (b.hasOwnProperty(propertyName)) {
        ownKeys.push(propertyName);
      }
    }

    // how many elements are in the ownKeys array?
    expect(1).toBe(ownKeys.length);  // Only 'bprop' is the own property of b
    // what are the own properties of the array?
    expect(["bprop"]).toEqual(ownKeys);
  });

  it("constructor property", function () {
    let a = new A();
    let b = new B();
    // "what is the type of a's constructor?"
    expect("function").toBe(typeof(a.constructor));
    // "what is the name of a's constructor?"
    expect("A").toBe(a.constructor.name);
    // "what is the name of b's constructor?"
    expect("B").toBe(b.constructor.name);
  });
});
