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

test("Can set email", () => {
    const testValue = "test@test.com";
    const e = new Employee("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name with getName()", () => {
    const testValue = "Sophie";
    const e = new Employee(testValue)
    expect(e.getName()).toBe(testValue);
});

test("Can get ID with getId()", () => {
    const testValue = 100;
    const e = new Employee("foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email with getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("foo", testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() => \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Sophie", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});
