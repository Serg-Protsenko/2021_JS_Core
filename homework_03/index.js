function isPalindrome(str) {

    function reverseString(str) {
  return str.split("").reverse().join("");
    }
    
    function deleteWhitespaces(str) {
        return str.split(' ').join('');
    }

    function deletePunct(str) {
        return str.replace(/[^a-zA-Z]/g, "");
    }

    const strWithoutSpace = deleteWhitespaces(str);
    const strWithoutPunct = deletePunct(strWithoutSpace);
    const processedStr = strWithoutPunct.toLowerCase();

    const reverseStr = reverseString(processedStr);
    
    if (processedStr === reverseStr) {
        return true;
    } else {
        return false;
    }

}

// alert(`"Ann,a" palindrome is ${isPalindrome('Ann,a')}`)
// alert(`"Ann" palindrome is ${isPalindrome('Ann')}`)
// alert(`" eye" palindrome is ${isPalindrome(' eye')}`)
// alert(`"Yes" palindrome is ${isPalindrome('Yes')}`)

