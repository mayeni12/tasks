/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return []; // return empty array if there are no elements
    } else if (numbers.length === 1) {
        return [numbers[0], numbers[0]]; // return array with the single element twice
    } else {
        return [numbers[0], numbers[numbers.length - 1]]; // return array with first and last element
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledArray: number[] = [];

    for (const num of numbers) {
        tripledArray.push(num * 3); // triple each number and add to the new array
    }

    return tripledArray;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers: number[] = [];

    for (const str of numbers) {
        const parsedInt = parseInt(str, 10); // Parse string to integer with base 10

        if (!isNaN(parsedInt)) {
            integers.push(parsedInt); // Add parsed integer to the result array
        } else {
            integers.push(0); // If parsing fails, add 0 to the result array
        }
    }

    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers: number[] = [];

    for (const str of amounts) {
        const cleanStr = str.replace(/^\$/, ""); // Remove "$" symbol from the beginning
        const parsedInt = parseInt(cleanStr, 10); // Parse string to integer with base 10

        if (!isNaN(parsedInt)) {
            numbers.push(parsedInt); // Add parsed integer to the result array
        } else {
            numbers.push(0); // If parsing fails, add 0 to the result array
        }
    }

    return numbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const processedMessages: string[] = [];

    for (const message of messages) {
        if (message.endsWith("!")) {
            processedMessages.push(message.toUpperCase()); // Make uppercase if the message ends with "!"
        } else if (!message.endsWith("?")) {
            processedMessages.push(message); // Add to the result list if it doesn't end with "?"
        }
    }

    return processedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;

    for (const word of words) {
        if (word.length < 4) {
            count++;
        }
    }

    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }

    for (const color of colors) {
        if (color !== "red" && color !== "blue" && color !== "green") {
            return false;
        }
    }

    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    let sumString = "";

    // Calculate sum and construct sumString
    for (let i = 0; i < addends.length; i++) {
        sum += addends[i];
        sumString += addends[i].toString(); // Convert number to string
        if (i < addends.length - 1) {
            sumString += "+";
        }
    }

    // If addends array is empty, set sumString to "0=0"
    if (addends.length === 0) {
        sumString = "0=0";
    } else {
        sumString += "=" + sum;
    }

    return sumString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    let negativeFound = false;
    const result: number[] = [];

    for (let i = 0; i < values.length; i++) {
        if (values[i] < 0 && !negativeFound) {
            negativeFound = true;
            result.push(values[i]);
            result.push(sum);
        } else {
            sum += values[i];
            result.push(values[i]);
        }
    }

    // If no negative number was found, append the sum to the end
    if (!negativeFound) {
        result.push(sum);
    }

    return result;
}
