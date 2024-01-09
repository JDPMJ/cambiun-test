"use client";

import { createContext, useState, useContext } from "react";

interface Country {
  name: string;
  timeZone: string;
}

type Date = Country;

export const CountryContext = createContext<{
  countries: any[];
  loadCountries: () => Promise<void>;
  addCountry: (country: Country) => Promise<void>;
  deleteCountry: (idCountry: string) => Promise<void>;
  loadCountry: (name: string) => Promise<void>;
  editCountry: (country: { id: string, name: string, timeZone: string }) => Promise<void>;
}>({
  countries: [],
  loadCountries: async () => {},
  addCountry: async (country: Country) => {},
  deleteCountry: async (idCountry: string) => {},
  loadCountry: async (name: string) => {},
  editCountry: async (country: { id: string, name: string, timeZone: string }) => {}
});

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry must be used within a CountryProvider");
  }
  return context;
}

export const CountriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [countries, setCountries] = useState<any[]>([]);

  async function loadCountries() {
    const res = await fetch("http://localhost:3000/api/data/countries");
    const data = await res.json();
    setCountries(data);
    console.log(data);
  }

  async function loadCountry(id: string) {
    const res = await fetch("http://localhost:3000/api/data/countries/" + id);
    const data = await res.json();
    setCountries(data);
    console.log(data);
  }

  async function addCountry(country: Date) {
    const res = await fetch("/api/data/countries", {
      method: "POST",
      body: JSON.stringify(country),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    loadCountries();
  }

  async function deleteCountry(idCountry: string) {
    const res = await fetch("http://localhost:3000/api/data/countries/" + idCountry, {
      method: "DELETE"
    });
    const data = await res.json();
    console.log(data);
    loadCountries();
  }

  async function editCountry(country: { id: string, name: string, timeZone: string }) {
    const res = await fetch("http://localhost:3000/api/data/countries/" + country.id, {
      method: "PUT",
      body: JSON.stringify(country),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log(data);
    loadCountries();
  }

  return <CountryContext.Provider value={{ countries, loadCountries, addCountry, deleteCountry, loadCountry, editCountry }}>
    {children}
  </CountryContext.Provider>
}