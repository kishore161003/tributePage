import React from "react";

const Personal = () => {
  return (
    <div className="mt-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-500 mb-2">
          Personal Information
        </h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong className="mr-2">Born:</strong> 5 November 1988 (age 35)
          </li>
          <li className="mb-2">
            <strong className="mr-2">Place of Birth:</strong> Delhi, India
          </li>
          <li className="mb-2">
            <strong className="mr-2">Nickname:</strong> Cheeku
          </li>
          <li className="mb-2">
            <strong className="mr-2">Height:</strong> 5 ft 9 in (175 cm)
          </li>
          <li className="mb-2">
            <strong className="mr-2">Batting:</strong> Right-handed
          </li>
          <li className="mb-2">
            <strong className="mr-2">Bowling:</strong> Right-arm medium
          </li>
          <li className="mb-2">
            <strong className="mr-2">Role:</strong> Top-order batter
          </li>
          <li className="mb-2">
            <strong className="mr-2">Relations:</strong> Anushka Sharma (wife)
          </li>
          <li className="mb-2">
            <strong className="mr-2">Website:</strong>{" "}
            <a
              href="https://viratkohli.foundation"
              className="text-blue-500 hover:underline"
            >
              viratkohli.foundation
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-500 mb-2">
          International Information
        </h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong className="mr-2">National side:</strong> India
            (2008–present)
          </li>
          <li className="mb-2">
            <strong className="mr-2">Test debut (cap 269):</strong> 20 June 2011
            v West Indies
          </li>
          <li className="mb-2">
            <strong className="mr-2">Last Test:</strong> 4 January 2024 v South
            Africa
          </li>
          <li className="mb-2">
            <strong className="mr-2">ODI debut (cap 175):</strong> 18 August
            2008 v Sri Lanka
          </li>
          <li className="mb-2">
            <strong className="mr-2">Last ODI:</strong> 19 November 2023 v
            Australia
          </li>
          <li className="mb-2">
            <strong className="mr-2">ODI shirt no.:</strong> 18
          </li>
          <li className="mb-2">
            <strong className="mr-2">T20I debut (cap 31):</strong> 12 June 2010
            v Zimbabwe
          </li>
          <li className="mb-2">
            <strong className="mr-2">Last T20I:</strong> 17 January 2024 v
            Afghanistan
          </li>
          <li className="mb-2">
            <strong className="mr-2">T20I shirt no.:</strong> 18
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-500 mb-2">
          Domestic Team Information
        </h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong className="mr-2">Years:</strong> 2006–present
          </li>
          <li className="mb-2">
            <strong className="mr-2">Team:</strong> Delhi
          </li>
        </ul>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong className="mr-2">Years:</strong> 2008–present
          </li>
          <li className="mb-2">
            <strong className="mr-2">Team: </strong> Royal Challengers Bangalore
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Personal;
