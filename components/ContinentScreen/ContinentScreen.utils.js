/**
 * @typedef language
 * @property {string} code
 */

/**
 * @typedef country
 * @property {language[]} languages
 */

/**
 * Given an array of countries, return the number of unique languages
 *
 * @param {country[]} [countries]
 * @returns {number}
 */
export function numberOfLanguages(countries) {

  const languagesSet = new Set();

  countries?.forEach( // in each country
    country => country?.languages?.forEach( // in each language
      language => {
        if (language?.code) {
          languagesSet.add(language?.code); // add language code to Set
        }
      }
    )
  );

  return languagesSet.size; // return number of languages
}

