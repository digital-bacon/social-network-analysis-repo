// Challenge project. Code to follow...

const data = {
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
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },
};

const methods = {
  // Regex pattern for user ids
  regexFormatUserId: /([f][0-9][0-9])/gi,
  // Validates input as a user id
  isValidFormatUserId: function(string) {
    return string.match(this.regexFormatUserId).join() === string;
  },
  // Returns an array with the uid for each individual
  getUIDs: function(source) {
    if (Array.isArray(source)) {
      return source.filter(element => element.match(this.regexFormatUserId));
    }
    return Object.keys(this).filter(element => element.match(this.regexFormatUserId));
  },
  
  // Returns the total follows of an individual
  countUserFollows: function(userId) {
    // If no user was found, return undefined
    if (typeof userId !== 'string' || this[userId] === undefined) return undefined;
    // Return 0 if user doesn't have a follows value
    if (this[userId].follows === undefined) return 0;
    // Return 0 if follows value is not an array
    if (!Array.isArray(this[userId].follows)) return 0;
    // Return the total number of follows of a given user
    const followsList = this.getUIDs(this[userId].follows)
    return followsList.length;
  },
  // Returns an array of all users and their follows counts
  getFollowCounts: function() {
    const followCounts = [];
    const users = this.getUIDs();
    users.forEach(element => followCounts.push({
      userId: element,
      followCount: this.countUserFollows(element)
    }));
    return followCounts;
  },
  // Returns an array of user(s) with the largest follows list
  biggestFollower: function() {
    const followCounts = this.getFollowCounts();
    // Return an empty array if no data was returned
    if (followCounts.length === 0) return [];
    // Sort followCounts by the most follows
    const sorted = this.sortArrayOfObjects(followCounts, 'followCount', 'descending');
    // Return an empty array if all users have no follow counts
    if (sorted[0].followCount === 0) return [];
    // Return the array of users with the largest follows list
    const biggestFollowLists = sorted.filter(element => element.followCount === sorted[0].followCount)
    return biggestFollowLists;
  },
  // Utility function: Sorts an array of objects
  sortArrayOfObjects: function(array, sortByKey, sortOrder = 'ascending') {
    let result = [];
    // Make a copy of the input array
    array.forEach(element => result.push(element));
    // Sort the new array
    for (let i = 0; i < result.length; i++) {
      for (let j = i + 1; j < result.length; j++) {
        let temp;
        if (result[i][sortByKey] > result[j][sortByKey]) {
          temp = result[i];
          result[i] = result[j];
          result[j] = temp;
        }
      };
    };
    if (sortOrder.toLowerCase() === 'descending') result = result.reverse();
    return result;
  },
}

// Returns an array with the uid for each individual
Object.defineProperty(data, 'getUIDs', {
  value: methods.getUIDs, // copy function from methods object in social.js
  writable: false
});
// Regex pattern for user ids
Object.defineProperty(data, 'regexFormatUserId', {
  value: methods.regexFormatUserId, // copy function from methods object in social.js
  writable: false
});
// // Validates input as a user id
Object.defineProperty(data, 'isValidFormatUserId', {
  value: methods.isValidFormatUserId, // copy function from methods object in social.js
  writable: false
});
// Returns the total follows of an individual
Object.defineProperty(data, 'countUserFollows', {
  value: methods.countUserFollows, // copy function from methods object in social.js
  writable: false
});
// Returns an array with the uid for each individual
Object.defineProperty(data, 'getFollowCounts', {
  value: methods.getFollowCounts, // copy function from methods object in social.js
  writable: false
});
// Returns an array with the uid for each individual
Object.defineProperty(data, 'sortArrayOfObjects', {
  value: methods.sortArrayOfObjects, // copy function from methods object in social.js
  writable: false
});
// Returns an array with the uid for each individual
Object.defineProperty(data, 'biggestFollower', {
  value: methods.biggestFollower, // copy function from methods object in social.js
  writable: false
});

// Implement mostPopular() which returns the name of the most popular (most followed) individual.

// Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.

// Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.

// Implement some or all these remaining functions.
//    Identify who has the most followers over 30
//    Identify who follows the most people over 30
//    List everyone and their reach (sum of # of followers and # of followers of followers)

module.exports = methods;