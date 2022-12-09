//Data-Types:boolean number bigint string symbol null undefined

// let fullName: string = "James Vail";

//objects are a way of grouping data together.
//interface
interface Mountain {
  name: string;
  height: number;
}


let newMountain1: Mountain = {
  name: "Kilimanjaro",
  height: 19341,
};
let newMountain2: Mountain = {
  name: "Everest",
  height: 29029,
};
let newMountain3: Mountain = {
  name: "Denali",
  height: 20310,
};

let mountains: Mountain[] = [newMountain1, newMountain2, newMountain3];

//function signature
function findNameOfTallestMountain(mountains: Mountain[]): string {
  if (mountains.length) {
    let tallest: Mountain = mountains[0];
    mountains.forEach((mountain) => {
      if (mountain.height > tallest.height) {
        tallest = mountain;
      }
    });
    return tallest.name;
  } else {
    return "";
  }
}
console.log(findNameOfTallestMountain(mountains));

export {findNameOfTallestMountain, Mountain};