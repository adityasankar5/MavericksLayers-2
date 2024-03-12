// NftGallery.js
import React, { useState, useEffect } from "react";
import MerchantAPI from "././api/api.js"; // Replace with the actual path
import NftCard from "./components/NftCard.js"; // Replace with the actual path to NftCard

const NftGallery = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    // Fetch NFTs using the API functions

    const fetchNfts = async () => {
      try {
        const guid = "your-guid"; // Replace with your actual GUID
        const options = {}; // Customize options if needed

        // Example: Fetch NFTs
        const nftsResponse = await MerchantAPI.listAddresses(guid, options);

        // Set the fetched NFTs in the state
        setNfts(nftsResponse.addresses);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchNfts();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {nfts.map((nft, index) => (
        <NftCard key={index} nft={nft} />
      ))}
    </div>
  );
};

export default NftGallery;
