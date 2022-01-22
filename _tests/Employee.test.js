const Employee = require("../lib/Employee")

test("positive employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name", () => {
    const name = "Sophie";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set ID", () => {
    const testValue = 100;
    const e = new Employee("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});