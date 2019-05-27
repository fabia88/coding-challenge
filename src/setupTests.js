// This is a snippet that I found while debugging an issue with mocking
// a Bad Request API call. I don't fully understand why the await/async
// in the function tested AND the test wasn't enough to reach .ToThrow
// in the test, but apparently this code allows the function to syncronize
// and throw an error and complete the test.
// https://github.com/facebook/jest/issues/1377#issuecomment-252410768

export const syncify = async (fn) => {
  try {
    const result = await fn();
    return () => { return result; };
  } catch (e) {
    return () => { throw e; };
  }
};
