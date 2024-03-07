import React from "react";

const Stats = () => {
  const battingData = [
    {
      format: "Test",
      matches: 113,
      innings: 191,
      runs: 8848,
      highestScore: 254,
      average: 49.16,
      ballsFaced: 15924,
      strikeRate: 55.56,
      centuries: 29,
      doubleCenturies: 7,
      fifties: 30,
      fours: 991,
      sixes: 26,
    },
    {
      format: "ODI",
      matches: 292,
      innings: 280,
      runs: 13848,
      highestScore: 183,
      average: 58.68,
      ballsFaced: 14797,
      strikeRate: 93.59,
      centuries: 50,
      doubleCenturies: 0,
      fifties: 72,
      fours: 1294,
      sixes: 152,
    },
    {
      format: "T20I",
      matches: 117,
      innings: 109,
      runs: 4037,
      highestScore: 122,
      average: 51.76,
      ballsFaced: 2922,
      strikeRate: 138.16,
      centuries: 1,
      doubleCenturies: 0,
      fifties: 37,
      fours: 361,
      sixes: 117,
    },
    {
      format: "IPL",
      matches: 237,
      innings: 229,
      runs: 7263,
      highestScore: 113,
      average: 37.25,
      ballsFaced: 5586,
      strikeRate: 130.02,
      centuries: 7,
      doubleCenturies: 0,
      fifties: 50,
      fours: 643,
      sixes: 234,
    },
  ];

  // Bowling career summary data
  const bowlingData = [
    {
      format: "Test",
      matches: 113,
      innings: 11,
      balls: 175,
      runs: 84,
      wickets: 0,
      bestBowlingInnings: "0/0",
      bestBowlingMatch: "0/0",
      economyRate: 2.88,
      average: 0.0,
      strikeRate: 0.0,
      fiveWickets: 0,
      tenWickets: 0,
    },
    {
      format: "ODI",
      matches: 292,
      innings: 50,
      balls: 662,
      runs: 680,
      wickets: 5,
      bestBowlingInnings: "1/13",
      bestBowlingMatch: "1/13",
      economyRate: 6.16,
      average: 136.0,
      strikeRate: 132.4,
      fiveWickets: 0,
      tenWickets: 0,
    },
    {
      format: "T20I",
      matches: 117,
      innings: 13,
      balls: 152,
      runs: 204,
      wickets: 4,
      bestBowlingInnings: "1/13",
      bestBowlingMatch: "1/13",
      economyRate: 8.05,
      average: 51.0,
      strikeRate: 38.0,
      fiveWickets: 0,
      tenWickets: 0,
    },
    {
      format: "IPL",
      matches: 237,
      innings: 26,
      balls: 251,
      runs: 368,
      wickets: 4,
      bestBowlingInnings: "2/25",
      bestBowlingMatch: "2/25",
      economyRate: 8.8,
      average: 92.0,
      strikeRate: 62.75,
      fiveWickets: 0,
      tenWickets: 0,
    },
  ];

  return (
    <div className="mt-8 z-30">
      <h2 className="text-xl font-semibold mb-4 z-30">
        Batting Career Summary
      </h2>
      <div className="overflow-x-auto z-30">
        <table className="table-auto z-30">
          <thead>
            <tr className="font-bold">
              <th></th>
              <th className="px-4 py-2 z-30">M</th>
              <th className="px-4 py-2">Inn</th>
              <th className="px-4 py-2">Runs</th>
              <th className="px-4 py-2">HS</th>
              <th className="px-4 py-2">Avg</th>
              <th className="px-4 py-2">BF</th>
              <th className="px-4 py-2 z-30">SR</th>
              <th className="px-4 py-2 z-30">100</th>
              <th className="px-4 py-2 z-30">200</th>
              <th className="px-4 py-2 z-30">50</th>
              <th className="px-4 py-2 z-30">4s</th>
              <th className="px-4 py-2 z-30">6s</th>
            </tr>
          </thead>
          <tbody>
            {battingData.map((data, index) => (
              <tr key={index}>
                <td className="px-4 py-2 font-bold">{data.format}</td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.matches}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.innings}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.runs}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.highestScore}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.average}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.ballsFaced}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.strikeRate}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.centuries}
                </td>
                <td className="px-4 py-2   text-gray-400 font-semibold ">
                  {data.doubleCenturies}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.fifties}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.fours}
                </td>
                <td className="px-4 py-2  text-gray-400 font-semibold">
                  {data.sixes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-4 mt-8 z-30">
        Bowling Career Summary
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto ">
          <thead>
            <tr className="font-bold">
              <th></th>
              <th className="px-4 py-2">M</th>
              <th className="px-4 py-2">Inn</th>
              <th className="px-4 py-2">B</th>
              <th className="px-4 py-2">Runs</th>
              <th className="px-4 py-2">Wkts</th>
              <th className="px-4 py-2">BBI</th>
              <th className="px-4 py-2">BBM</th>
              <th className="px-4 py-2">Econ</th>
              <th className="px-4 py-2">Avg</th>
              <th className="px-4 py-2">SR</th>
              <th className="px-4 py-2">5W</th>
              <th className="px-4 py-2">10W</th>
            </tr>
          </thead>
          <tbody>
            {bowlingData.map((data, index) => (
              <tr key={index}>
                <td className="px-4 py-2 font-bold">{data.format}</td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.matches}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.innings}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.balls}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.runs}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.wickets}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.bestBowlingInnings}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.bestBowlingMatch}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.economyRate}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.average}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.strikeRate}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.fiveWickets}
                </td>
                <td className="px-4 py-2 text-gray-400 font-semibold ">
                  {data.tenWickets}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;
