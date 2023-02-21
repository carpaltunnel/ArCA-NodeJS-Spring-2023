const vehicles = [
  {"make":"Chevrolet","model":"Corvette","year":2016,"vin":"17281243-adf2-43ee-894d-fbc5fefaf056"},
  {"make":"Chevrolet","model":"Malibu","year":2009,"vin":"caaae68d-8f29-4682-bbca-cac44c637b16"},
  {"make":"Ford","model":"Bronco","year":2020,"vin":"45fdfbb9-9ab3-4205-94ca-f79ea9d99156"},
  {"make":"Honda","model":"Accord","year":2001,"vin":"6ab18c86-7591-4848-a07c-83a30d927668"},
  {"make":"Chevrolet","model":"Malibu","year":1997,"vin":"d305706d-386a-4f25-96dc-95ea604d521e"},
  {"make":"Toyota","model":"Corolla","year":1993,"vin":"0353f447-ca80-41b4-8a6b-eb7cc449e7ef"},
  {"make":"Toyota","model":"Corolla","year":1994,"vin":"bf45a4c2-9f3e-41e8-81e9-77173ec7995d"},
  {"make":"GMC","model":"Acadia","year":2010,"vin":"46cf06cf-7eaf-45b9-a838-3af413dae5a6"},
  {"make":"Honda","model":"Civic","year":2020,"vin":"f0fc00da-afa6-4ab4-aae3-dbc7cab247c8"},
  {"make":"Chevrolet","model":"Corvette","year":1992,"vin":"f3ab77f6-27bc-44c3-b606-703ce6cba823"},
  {"make":"GMC","model":"Sierra","year":1986,"vin":"0e0316e8-4b44-4c65-9ad5-fd6838c37fc4"},
  {"make":"Toyota","model":"Tacoma","year":2015,"vin":"7da9de38-0734-489f-adc9-054c06419506"},
  {"make":"Chevrolet","model":"Corvette","year":2014,"vin":"ee6389dc-3e9b-452c-a912-aac0af21417d"},
  {"make":"GMC","model":"Terrain","year":1987,"vin":"1d5e21ad-839e-4d25-9f62-af2220e2598f"},
  {"make":"Chevrolet","model":"Malibu","year":2014,"vin":"31fe6742-85f5-405a-9983-1ad8bb878af4"},
  {"make":"Chevrolet","model":"Caprice","year":1995,"vin":"ca509c93-b8af-4665-8928-ef24491c2282"},
  {"make":"Toyota","model":"Camry","year":2001,"vin":"32a94186-8117-4e98-b2c3-4ae09e9261ad"},
  {"make":"Toyota","model":"Camry","year":2012,"vin":"d6660262-9c38-4b0a-adf5-121dbeb50e6b"},
  {"make":"Toyota","model":"Tacoma","year":2007,"vin":"afeacec6-3d20-4045-81cc-f87cd75b1a21"},
  {"make":"Honda","model":"Civic","year":2015,"vin":"62ce246f-f968-4961-862d-7863e4ce72d0"},
  {"make":"Ford","model":"Mustang","year":2009,"vin":"b7a55bea-f3bb-44f9-a163-b4c1e28c54df"},
  {"make":"GMC","model":"Terrain","year":1980,"vin":"41403e84-a1c3-4a5c-8018-7d9719b6d165"},
  {"make":"GMC","model":"Yukon","year":1982,"vin":"ebfe2f0f-d8ca-42ca-b167-26c632f3b18e"},
  {"make":"GMC","model":"Sierra","year":1982,"vin":"8f81922c-df4a-459d-809f-683cea34b10c"},
  {"make":"GMC","model":"Acadia","year":1985,"vin":"44a6550f-dabb-4035-8626-6dec5284c21a"},
  {"make":"Honda","model":"Civic","year":1985,"vin":"8f215fbc-ddff-414c-ae98-6a3add5092bc"},
  {"make":"Honda","model":"Civic","year":1999,"vin":"ed5e4575-a365-4922-aca9-a75183751cd6"},
  {"make":"Toyota","model":"Tundra","year":1981,"vin":"d7a8089c-7b9c-4ecf-a692-bfe75c7e3dd8"},
  {"make":"GMC","model":"Yukon","year":2018,"vin":"6059a6eb-884f-4425-bba7-a8bf6dc86590"},
  {"make":"GMC","model":"Acadia","year":2005,"vin":"b6ec8611-1b27-4e2f-8c26-2a83b04965d2"},
  {"make":"GMC","model":"Acadia","year":1995,"vin":"be892e77-d07e-427b-8316-38014de4008c"},
  {"make":"Toyota","model":"Tacoma","year":1994,"vin":"52d29c90-6bdd-44de-b2f7-190c575d88d9"},
  {"make":"Chevrolet","model":"Malibu","year":2007,"vin":"90d98fe0-c9d8-44c7-8053-de475287923e"},
  {"make":"Ford","model":"F-150","year":1986,"vin":"15482962-db4e-4176-af9e-fcbbc223c449"},
  {"make":"Honda","model":"Accord","year":2011,"vin":"ebc352a1-af32-44cc-a278-2b9bde3e846c"},
  {"make":"Ford","model":"Mustang","year":1995,"vin":"52592f3d-40e7-4d4d-b8ad-9e9c21c3fc69"},
  {"make":"Chevrolet","model":"Malibu","year":1988,"vin":"37ac6b5b-323c-46e0-90db-19d82c57df92"},
  {"make":"Honda","model":"Ridgeline","year":2014,"vin":"e82761ee-8cf7-4246-9dbd-e22640a1bb8d"},
  {"make":"Ford","model":"F-150","year":2009,"vin":"782ae5a4-5889-4491-a0a3-559ca38dea7e"},
  {"make":"Ford","model":"Fusion","year":1995,"vin":"205bd2f9-1882-4bca-9869-baf220bf4c2e"},
  {"make":"Chevrolet","model":"Malibu","year":2005,"vin":"f92170fa-8599-48d2-983f-fe335d340b55"},
  {"make":"GMC","model":"Terrain","year":1996,"vin":"e9d07fbf-2048-417f-9809-65e39c0e45c5"},
  {"make":"Chevrolet","model":"Caprice","year":1984,"vin":"2989140f-01ae-4335-9246-afade7be1641"},
  {"make":"Honda","model":"Ridgeline","year":1997,"vin":"d949c9c9-fc31-4d4b-857c-713cb140f7c5"},
  {"make":"Honda","model":"CRV","year":2009,"vin":"056880b3-4bad-4192-80a6-f6f31bca24eb"},
  {"make":"Ford","model":"F-150","year":2004,"vin":"5f909853-d311-40c7-8394-88169a3b206b"},
  {"make":"GMC","model":"Terrain","year":2012,"vin":"0dd15731-0170-45e9-9627-cb0fc9b28129"},
  {"make":"Chevrolet","model":"Corvette","year":1993,"vin":"42be6572-8b4c-4b51-8655-9d27ace77062"},
  {"make":"Ford","model":"Fusion","year":2000,"vin":"c5980b42-e165-4dcc-997c-ddf8f385e429"},
  {"make":"Chevrolet","model":"Corvette","year":2017,"vin":"8fecdb76-f16a-4ee2-8422-66ee7750018d"},
];

const recallList = [
  {"vin":"17281243-adf2-43ee-894d-fbc5fefaf056","reason":"Risk of fire"},
  {"vin":"8642a82c-10f3-40fb-b8c6-ca4078c0bef5","reason":"Steering column"},
  {"vin":"6ab18c86-7591-4848-a07c-83a30d927668","reason":"Leaf springs"},
  {"vin":"bf45a4c2-9f3e-41e8-81e9-77173ec7995d","reason":"Steering column"},
  {"vin":"f3ab77f6-27bc-44c3-b606-703ce6cba823","reason":"Electronics failure"},
  {"vin":"e931958b-8fc8-4b59-a995-bf945a5ee7dd","reason":"Premature wear"},
  {"vin":"ee6389dc-3e9b-452c-a912-aac0af21417d","reason":"Premature wear"},
  {"vin":"ca509c93-b8af-4665-8928-ef24491c2282","reason":"Risk of fire"},
  {"vin":"afeacec6-3d20-4045-81cc-f87cd75b1a21","reason":"Premature wear"},
  {"vin":"79af24cf-8091-4f18-bead-c9d451f7752b","reason":"Risk of fire"},
  {"vin":"41403e84-a1c3-4a5c-8018-7d9719b6d165","reason":"Electronics failure"},
  {"vin":"44a6550f-dabb-4035-8626-6dec5284c21a","reason":"Premature wear"},
  {"vin":"d7a8089c-7b9c-4ecf-a692-bfe75c7e3dd8","reason":"Leaf springs"},
  {"vin":"be892e77-d07e-427b-8316-38014de4008c","reason":"Risk of fire"},
  {"vin":"2616786c-9b46-4fd8-92a2-1c04c1bfa737","reason":"Leaf springs"},
  {"vin":"15482962-db4e-4176-af9e-fcbbc223c449","reason":"Leaf springs"},
  {"vin":"37ac6b5b-323c-46e0-90db-19d82c57df92","reason":"Steering column"},
  {"vin":"205bd2f9-1882-4bca-9869-baf220bf4c2e","reason":"Electronics failure"},
  {"vin":"7df47173-f015-44d3-aec4-abf76c79878c","reason":"Steering column"},
  {"vin":"2989140f-01ae-4335-9246-afade7be1641","reason":"Steering column"},
  {"vin":"5f909853-d311-40c7-8394-88169a3b206b","reason":"Electronics failure"},
  {"vin":"c5980b42-e165-4dcc-997c-ddf8f385e429","reason":"Electronics failure"},
];

const salvageVINs = [
  "17281243-adf2-43ee-894d-fbc5fefaf056",
  "9374b916-eaf5-487f-b215-8e3bc0c8b5b7",
  "554ba891-218c-4de3-a608-c9a9b9124ee1",
  "0e0316e8-4b44-4c65-9ad5-fd6838c37fc4",
  "cad5a69e-b656-49d1-aca8-fd5e27e89b07",
  "7ec5a515-67b8-4b98-8fac-c7dbff81d654",
  "b7a55bea-f3bb-44f9-a163-b4c1e28c54df",
  "89173e9e-ffb7-4c43-9da6-2e6faa505e11",
  "28e707b7-039d-42ac-b364-723a6fca7e57",
  "be892e77-d07e-427b-8316-38014de4008c",
  "74762e3f-ccb8-4f9f-beac-341f246a14a4",
  "864e8f6d-8707-4dee-988a-55cbabe4942a",
  "f92170fa-8599-48d2-983f-fe335d340b55",
  "1752fb08-b09b-4141-b346-843cd31671db",
  "3b42d74c-2fed-4a99-9d1c-3921302f8b84",
];

// Lab requirements (applied in any order you choose): 
// 1.  Create new arrays for each "Make" of vehicle.  
//     a.  Each new array should only contain vehicles of the same make and the array variable should be named appropriately (EG: teslaVehicles)
// 2.  Order each new Make array by vehicle year in ascending order
// 3.  Add recall reason from the recallList to each vehicle (based on VIN) as "recallReason"
// 4.  Remove any vehicles that have a salvage title (based on VIN)
// 5.  Output each Make array to the console, ordered by year (from step 2), with recall details included (from step 3), and all salvaged vehicles removed (from step 4)
// 6.  Step 5 should be in an easy to read format - use new lines and tabs for formatting
// 7.  Output the following stats : 
//    a.  Total number of vehicles you started with
//    b.  Total number of non-salvage vehicles of each Make
//    c.  Total number of vehicles that were removed due to salvage
//    d.  Total number of non-salvage vehicles of each year model, regardless of Make.
//
// Restriction : Do not hardcode your array names like "const teslaVehicles" - assume the vehicle list contains an unknown number of makes and generate the variable names dynamically




// TODO : START YOUR CODE HERE
