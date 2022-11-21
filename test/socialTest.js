const chai = require('chai');
const assert = chai.assert;

const lib = require('../src/social');

describe('getUIDs', function() {

  it("should return an array", () => {
    const input = {
      f01: {
        name: "Alice"
      },
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    assert.isArray(input.getUIDs(input));
  });

  it("should return an array when no users exist in the dataset", () => {
    const input = {};
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    assert.isArray(input.getUIDs(input));
  });

  it("should ignore values that are not user ids", () => {
    const input = {
      f01: {
        name: "Alice"
      },
      // Not a valid UID
      Apple: { 
        name: "Bob",
      },
      f03: {
        name: "Charlie"
      }
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    const result = input.getUIDs(input);
    const expectedOutput = [ 'f01', 'f03' ];
    assert.deepEqual(input.getUIDs(result), expectedOutput)
  });

  it("should return an array with element count matching the total users in the dataset", () => {
    const input = {
      f01: {
        name: "Alice"
      },
      f02: {
        name: "Bob",
      },
      f03: {
        name: "Charlie"
      }
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    const result = input.getUIDs(input).length;
    const expectedOutput = 3;
    assert.isTrue(result === expectedOutput);
  });

});



describe('countUserFollows', function() {

  it("should return a number equal to the total follows of a given user", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f02", "f03", "f04"]
      },
      f02: {
        name: "Bob",
        age: 20,
        follows: ["f05", "f06"]
      },
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    const userId = 'f02';
    const expectedOutput = 2;
    assert.equal(input.countUserFollows(userId), expectedOutput);
  });

  it("should return undefined if no user id was provided", () => {
    const input = {};
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    assert.isUndefined(input.countUserFollows());
  });
  
  it("should return undefined if requested user id is not in the dataset", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f02", "f03", "f04"]
      }
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    const userId = 'f03';
    assert.isUndefined(input.countUserFollows(userId));
  });
  
  it("should return 0 if user doesn't have a follows value", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f02", "f03", "f04"]
      },
      f02: {
        name: "Bob",
        age: 20,
      },
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    const userId = 'f02';
    const expectedOutput = 0;
    assert.equal(input.countUserFollows(userId), expectedOutput);
  });
  
  it("should return 0 if follows value is not an array", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f02", "f03", "f04"]
      },
      f02: {
        name: "Bob",
        age: 20,
        follows: 'none'
      },
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    const userId = 'f02';
    const expectedOutput = 0;
    assert.equal(input.countUserFollows(userId), expectedOutput);
  });

  it("should ignore follows if they are not not user ids", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f02", "f03", "f04"]
      },
      f02: {
        name: "Bob",
        age: 20,
        follows: ["f05", "Apple", "f06"] // Invalid user id, 'Apple', in this list
      },
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    const userId = 'f02';
    const expectedOutput = 2;
    assert.deepEqual(input.countUserFollows(userId), expectedOutput)
  });

});



describe('biggestFollower', function() {

  it("should return an array with an object containing the name of the user with the largest follows list", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f06"]
      },
      f02: { // Not a valid user id
        name: "Bob",
        age: 20,
        follows: ["f05"]
      },
      f03: {
        name: "Charlie",
        age: 35,
        follows: ["f04", "f05", "f06"]
      },
      f04: {
        name: "Debbie",
        age: 40,
        follows: ["f05", "f06"]
      }
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getFollowCounts', {
      value: lib.getFollowCounts, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'sortArrayOfObjects', {
      value: lib.sortArrayOfObjects, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'biggestFollower', {
      value: lib.biggestFollower, // copy function from methods object in social.js
      writable: false
    });
    const expectedOutput = [ { userId: 'f03', followCount: 3 } ];
    assert.deepEqual(input.biggestFollower(), expectedOutput)
  });

  it("should return an array", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f02", "f03", "f04"]
      }
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getFollowCounts', {
      value: lib.getFollowCounts, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'sortArrayOfObjects', {
      value: lib.sortArrayOfObjects, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'biggestFollower', {
      value: lib.biggestFollower, // copy function from methods object in social.js
      writable: false
    });
    assert.isArray(lib.biggestFollower());
  });

  it("should return an array when no users exist in the dataset", () => {
    const input = {};
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getFollowCounts', {
      value: lib.getFollowCounts, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'sortArrayOfObjects', {
      value: lib.sortArrayOfObjects, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'biggestFollower', {
      value: lib.biggestFollower, // copy function from methods object in social.js
      writable: false
    });
    assert.isArray(lib.biggestFollower());
  });

  it("should return an array with a nested object with userId and followCount values", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f06"]
      },
      f02: { // Not a valid user id
        name: "Bob",
        age: 20,
        follows: ["f01", "f03", "f04", "f06"]
      },
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getFollowCounts', {
      value: lib.getFollowCounts, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'sortArrayOfObjects', {
      value: lib.sortArrayOfObjects, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'biggestFollower', {
      value: lib.biggestFollower, // copy function from methods object in social.js
      writable: false
    });
    const expectedOutput = [ { userId: 'f02', followCount: 4 } ];
    assert.deepEqual(input.biggestFollower(), expectedOutput)
  });

  it("should only look at follows lists for valid users", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f06"]
      },
      Apple: { // Not a valid user id
        name: "Bob",
        age: 20,
        follows: ["f01", "f03", "f04", "f06"]
      },
      f03: {
        name: "Charlie",
        age: 35,
        follows: ["f04", "f05", "f06"]
      },
      f04: {
        name: "Debbie",
        age: 40,
        follows: ["f05", "f06"]
      }
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getFollowCounts', {
      value: lib.getFollowCounts, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'sortArrayOfObjects', {
      value: lib.sortArrayOfObjects, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'biggestFollower', {
      value: lib.biggestFollower, // copy function from methods object in social.js
      writable: false
    });
    const expectedOutput = [ { userId: 'f03', followCount: 3 } ];
    assert.deepEqual(input.biggestFollower(), expectedOutput)
  });

  it("should ignore follows if they are not not user ids", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["Apple", "f03", "f04"] // Invalid user id, 'Apple', in this list
      },
      f02: {
        name: "Bob",
        age: 20,
        follows: ["f03", "f04", "f06"]
      },
      f03: {
        name: "Charlie",
        age: 35,
        follows: ["f03", "f04"]
      },
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getFollowCounts', {
      value: lib.getFollowCounts, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'sortArrayOfObjects', {
      value: lib.sortArrayOfObjects, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'biggestFollower', {
      value: lib.biggestFollower, // copy function from methods object in social.js
      writable: false
    });
    const expectedOutput = [ { userId: "f02", followCount: 3 } ];
    assert.deepEqual(input.biggestFollower(), expectedOutput)
  });

  it("should return more than one user id in the case of a tie", () => {
    const input = {
      f01: {
        name: "Alice",
        age: 15,
        follows: ["f03", "f04"]
      },
      f02: {
        name: "Bob",
        age: 20,
        follows: ["f03", "f04", "f06"]
      },
      f03: {
        name: "Charlie",
        age: 35,
        follows: ["f03", "f04", "f05"]
      },
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getFollowCounts', {
      value: lib.getFollowCounts, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'sortArrayOfObjects', {
      value: lib.sortArrayOfObjects, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'biggestFollower', {
      value: lib.biggestFollower, // copy function from methods object in social.js
      writable: false
    });
    const expectedOutput = [ { userId: "f03", followCount: 3 }, { userId: "f02", followCount: 3 } ]
    assert.deepEqual(input.biggestFollower(), expectedOutput)
  });

  it("should return an empty array if all users have no follow counts", () => {
    const input = {
      f01: {
        name: "Alice",
        follows: []
      },
      f02: {
        name: "Bob",
        follows: []
      },
      f03: {
        name: "Charlie",
        follows: []
      }
    };
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getUIDs', {
      value: lib.getUIDs, // copy function from methods object in social.js
      writable: false
    });
    // Regex pattern for user ids
    Object.defineProperty(input, 'regexFormatUserId', {
      value: lib.regexFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // // Validates input as a user id
    Object.defineProperty(input, 'isValidFormatUserId', {
      value: lib.isValidFormatUserId, // copy function from methods object in social.js
      writable: false
    });
    // Returns the total follows of an individual
    Object.defineProperty(input, 'countUserFollows', {
      value: lib.countUserFollows, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'getFollowCounts', {
      value: lib.getFollowCounts, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'sortArrayOfObjects', {
      value: lib.sortArrayOfObjects, // copy function from methods object in social.js
      writable: false
    });
    // Returns an array with the uid for each individual
    Object.defineProperty(input, 'biggestFollower', {
      value: lib.biggestFollower, // copy function from methods object in social.js
      writable: false
    });
    const expectedOutput = [];
    assert.deepEqual(input.biggestFollower(), expectedOutput)
  });

});