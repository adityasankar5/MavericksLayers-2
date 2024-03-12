// NftCard.js
import React from "react";

const NftCard = ({ nft }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={nft.image} alt={nft.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nft.name}</div>
        <p className="text-gray-700 text-base">{nft.description}</p>
        <p className="text-gray-700 text-base">Owner: {nft.owner}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default NftCard;
