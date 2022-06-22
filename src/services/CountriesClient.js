import axios from 'axios';

function countriesClient() {
  return {
    getCountries: async () => {
      try {
        const result = await axios.get('https://restcountries.com/v3.1/all');
        return result.data;
      } catch (err) {
        throw new Error(err);
      }
    },
  };
}

export { countriesClient };
