const database = {
    fish: [
        {
            name:"Big Bertha" ,
            species: "Dummy",
            harvested: "The Bathroom",
            food:"Big Wormies" },

  { name: "Ooeey Gooey",
  species: "Slugma",
  harvested: "Walmart",
   food:"Souls"},
        
 { name:"Rainbow Bright",
 species:"Your Dreams",
 harvested:"Unknown",
 food: "Pure Energy"}]}

 export const getFish = () => {
 return database.fish.map
 (copyOfSingleFishObject  => 
  ({...copyOfSingleFishObject}))
          }

