const Intern = require("../lib/Intern");

test("Can set school", () => {
    const testValue = "UCSD";
    const e = new Intern("foo", 1, "sample@sample.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole => \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("foo", 1, "sample@sample.com", "UCSD");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school with getSchool", () => {
    const testValue = "UCSD";
    const e = new Intern("foo", 1, "sample@sample.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});