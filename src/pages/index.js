import { useState } from "react";
import Layout from '../components/Layout'
import SearchInput from '../components/Searchinput/SearchInput';
import CountriesTable from '../components/CountiesTable/CountriesTable';



export default function Home({countries}) {

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(keyword) ||
      country.name.official.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword)
  );
  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  console.log(countries);
  return (
    <Layout title="World Stats - Home">
    <div>Found {countries.length} countries</div>
    <SearchInput placeholder="Filter"  onChange={onInputChange}></SearchInput>
    <CountriesTable countries={filteredCountries}></CountriesTable>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};