/**
 * @param {String} str
 * @param {number} min
 * @param {number} max
 * @returns {number} 0 - empty string; 1 - ok; 2 - too short or too long
 */
export const validateLengthStr = function(str, min, max) {
  if (str.length === 0) {
    return 0;
  }
  if (str.length >= min && str.length <= max) {
    return 1;
  }
  return 2;
};

/**
 * @param {String} str
 * @returns {boolean}
 */
export const validURL = function(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
};