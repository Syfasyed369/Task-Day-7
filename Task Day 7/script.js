// Fetch data from the REST API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Get all countries from Asia using filter
    const asiaCountries = data.filter(country => country.region === 'Asia');

    // Get countries with a population of less than 2 lakhs using filter
    const smallPopulationCountries = data.filter(country => country.population < 200000);

    // Print details (name, capital, flag) using forEach
    console.log('Countries from Asia:');
    asiaCountries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
    });

    console.log('\nCountries with population less than 2 lakhs:');
    smallPopulationCountries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
    });

    // Print total population using reduce
    const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
    console.log(`\nTotal Population of all countries: ${totalPopulation}`);

    // Print country that uses US dollars as currency
    const usDollarCountry = data.find(country => country.currencies && country.currencies.USD);
    if (usDollarCountry) {
      console.log(`\nCountry that uses US dollars as currency: ${usDollarCountry.name.common}`);
    } else {
      console.log('\nNo country uses US dollars as currency.');
    }
  })
  .catch(error => console.error('Error fetching data:', error));
