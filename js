/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created


// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT () {

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

}

// call your functions below this line-/*/


const NFTs = []

  function mintNFT(_name_, _eyecolor_,_shirtType_,_bling_){
const NFT = {
      "name":_name_,
      "eyecolor":_eyecolor_,
      "shirtType":_shirtType_,
      "bling":_bling_
  }
  NFTs.push(NFT);
  console.log("Minted:" +_name_);
}
function listNFTs(){
  for(let i = 0; i<NFTs.length;i++){
    console.log("\nID:"+(i+1));
    console.log("\nName:\t\t"+NFTs[i].name);
    console.log("\neyecolor:\t"+NFTs[i].eyecolor);
    console.log("\nShirtType:\t"+NFTs[i].shirtType);
    console.log("\nBling:\t\t"+NFTs[i].bling);
  }
}
function getTotalSupply() {
  console.log("\n"+NFTs.length);
}
mintNFT("Neha","Black","Hoddie","Gold Chain");
mintNFT("Riya","Blue","Hoddie","Silver Chain");
mintNFT("Neharika","Brown","Sweetshirt","Gold Chain");
mintNFT("Mayur","Black","Hoddie","Silver Chain");
listNFTs();
getTotalSupply() ;




















