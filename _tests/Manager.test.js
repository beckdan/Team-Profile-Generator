const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Can set officer number", () => {
    const testValue = 100;
    const e = new Manager("foo", 1, "sample@sample.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole => \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("foo", 1, "sample@sample.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number with getOffice", () => {
    const testValue = 100;
    const e = new Manager("foo", 1, "sample@sample.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
}) 