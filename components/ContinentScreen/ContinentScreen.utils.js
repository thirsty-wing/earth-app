/**
 * Given an array of countries, return the number of unique languages
 *
 * @param {object[]} [countries]
 * @returns {number}
 */
export function numberOfLanguages(countries) {

  return new Set( // remove duplicates
    countries?.map( // in each country
      country => country?.languages?.map( // in each language
        language => language?.code // get the language code
      )
    )
      .flat() // flatten the array of arrays containing language codes
      .filter(languageCode => !!languageCode) // remove falsy values
  ).size; // return number of languages
}

