"use client";
import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GlobeIcon } from "@heroicons/react/solid";
import Select from "react-select";

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

function CityPicker() {
  const [seletedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };
  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
    router.push(`/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white/90">
          <GlobeIcon className="h-5 w-5 text-white"></GlobeIcon>
          <label htmlFor="country" className="text-white">
            Country
          </label>
        </div>
        <Select
          className="text-black"
          value={seletedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>

      {seletedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white/90">
            <GlobeIcon className="h-5 w-5 text-white"></GlobeIcon>
            <label htmlFor="city" className="text-white">
              City
            </label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(seletedCountry.value.isoCode)?.map(
              (city) => (
              {
                value: {
                  latitude: city.latitude!,
                  longitude: city.longitude!,
                  countryCode: city.countryCode,
                  name: city.name,
                  stateCode: city.stateCode,
                },
                label: city.name,
              }
            )
            )}
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
