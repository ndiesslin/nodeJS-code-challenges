const parenthesisCheck = function(parenthesisGroup) {
  let iteratedGroup = [];

  let validated = parenthesisGroup.split('').every(parenthesis => {
    if (parenthesis === '(') {
      iteratedGroup.push(parenthesis);
    } else if (iteratedGroup.length == 0) {
      return false;
    } else {
      iteratedGroup.pop();
    }

    // If no true is returned every will stop.
    return true;
  });

  return (iteratedGroup.length == 0 && validated === true);
}

module.exports = { parenthesisCheck };