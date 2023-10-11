// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode Object", function(){

  // Write your unit tests here!
  
  test("value for organization should be nonprofit", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("value for executive director should be Jeff", () => {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("value for percentageCoolEmployess should be 100", () => {
    expect(launchcode.percentageCoolEmployess).toBe(100);
  });
  test("value for programsOffered should be an array with the values Web Development, Data Analysis, Liftoff", () => {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);
  });
  describe("should have a method, launchOutput, which", () => {

    test("should return 'Launch!'for numbers only divisible by 2", () => {
      expect(launchcode.launchOutput(2)).toBe('Launch!');
    });

    test("should return 'Code!'for numbers only divisible by 3", () => {
      expect(launchcode.launchOutput(3)).toBe('Code!');
    });

    test("should return 'Rocks!'for numbers only divisible by 5", () => {
      expect(launchcode.launchOutput(5)).toBe('Rocks!');
    });

    test("should return 'LaunchCode!'for numbers only divisible by 2 and 3", () => {
      expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
    });

    test("should return 'Code Rocks!'for numbers only divisible by 3 and 5", () => {
      expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
    });

    test("should return 'Launch Rocks! (CRASH!!!!)'for numbers only divisible by 2 and 5", () => {
      expect(launchcode.launchOutput(10)).toBe('Launch Rocks! (CRASH!!!!)');
    });

    test("should return 'LaunchCode Rocks!'for numbers only divisible by 2, 3 and 5", () => {
      expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
    });

    test("should return 'Rutabagas! That doesn't work.'for numbers NOT divisible by 2, 3 and 5", () => {
      expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
    });
  
  });
});