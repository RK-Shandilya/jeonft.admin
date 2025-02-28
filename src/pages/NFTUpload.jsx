import React, { useState } from "react";

const NFTUpload = () => {
  const [nft, setNft] = useState({ 
    name: "", 
    description: "", 
    price: "", 
    royalty: "10", 
    collection: "default",
    image: null 
  });
  
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNft({ ...nft, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNft({ ...nft, image: file });
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      alert(`NFT "${nft.name}" uploaded successfully!`);
      // Reset form
      setNft({ 
        name: "", 
        description: "", 
        price: "", 
        royalty: "10", 
        collection: "default",
        image: null 
      });
      setPreview(null);
    }, 1500);
  };

  const collections = ["Default Collection", "Rare Gems", "Artwork Series", "Digital Collectibles"];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-medium text-blue-900">Create New NFT Asset</h3>
        <p className="text-sm text-blue-600">Upload and mint a new NFT to the marketplace</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-1">
                  NFT Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={nft.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter NFT name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={nft.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your NFT"
                  required
                ></textarea>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">
                    Price (ETH)
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={nft.price}
                    onChange={handleChange}
                    className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0.05"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-1">
                    Royalty %
                  </label>
                  <input
                    type="text"
                    name="royalty"
                    value={nft.royalty}
                    onChange={handleChange}
                    className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-1">
                  Collection
                </label>
                <select
                  name="collection"
                  value={nft.collection}
                  onChange={handleChange}
                  className="w-full p-3 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {collections.map((collection, index) => (
                    <option key={index} value={collection.toLowerCase().replace(/\s+/g, '-')}>
                      {collection}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-1">
                  Upload Image
                </label>
                <div className="border-2 border-dashed border-blue-300 rounded-md p-6 text-center hover:bg-blue-50 transition cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="file-upload"
                    required={!nft.image}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <svg className="mx-auto h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p className="mt-1 text-sm text-blue-600">
                      {nft.image ? "Replace image" : "Click to upload or drag and drop"}
                    </p>
                    <p className="mt-1 text-xs text-blue-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isUploading}
                  className={`w-full flex justify-center items-center p-3 border border-transparent rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isUploading ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                >
                  {isUploading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Upload...
                    </>
                  ) : (
                    "Mint NFT"
                  )}
                </button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-4">
              <h3 className="text-blue-900 font-medium">Preview</h3>
              <p className="text-sm text-blue-600">How your NFT will appear in the marketplace</p>
            </div>
            
            <div className="w-64 h-64 border rounded-lg overflow-hidden shadow-lg">
              {preview ? (
                <img 
                  src={preview} 
                  alt="NFT Preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-50">
                  <p className="text-blue-400 text-sm">No image uploaded</p>
                </div>
              )}
            </div>
            
            {preview && (
              <div className="mt-5 text-center">
                <h4 className="font-medium text-blue-900">{nft.name || "Untitled NFT"}</h4>
                {nft.price && <p className="text-blue-700 font-medium">{nft.price} ETH</p>}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTUpload;