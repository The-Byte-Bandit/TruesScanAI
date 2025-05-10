// import React from 'react';
// import styles, { typography } from "../style";


// function SearchBar() {
//   return (
//     <div className="flex justify-center items-center bg-transparent border-[1px] border-[#222222] hadow-lg backdrop-blur-md rounded-full px-4 py-2 max-w-2xl mx-auto">
//       <input 
//         type="text" 
//         placeholder="Search..." 
//         className="bg-transparent text-[14px] text-[#c0c0c0] placeholder-gray-300 focus:outline-none w-full" 
//       />
//       <button className = {`${typography.navPillText} text-[#7D7F78] `}>
//         {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M18 10a8 8 0 10-8 8 8 8 0 008-8z"></path>
//         </svg> */}
//       </button>
//     </div>
//   );
// }

// export default SearchBar;


// import React from 'react';
// import styles, { typography } from "../style";

// function SearchBar() {
//   return (
//     <div className="flex justify-center items-center bg-transparent border-[1px] border-[#222222] shadow-lg backdrop-blur-md rounded-full px-4 py-2 max-w-2xl mx-auto">
//       {/* Plus icon inside input field */}
//       <button className={`${typography.navPillText} px-2 py-2 flex items-center text-[#D0FF00]`}>
//         {/* <svg
//           className="w-6 h-6 text-[#c0c0c0] "
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M12 5v14m7-7H5"></path>
//         </svg> */}
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
// </svg>

//       </button>

//       {/* Input field */}
//       <input 
//         type="text" 
//         placeholder="Search..." 
//         className="bg-transparent text-[14px] text-[#D0FF00] placeholder-[#c0c0c0] focus:outline-none w-full pl-8" 
//       />

//       {/* Airplane icon (send) */}
//       {/* Paper airplane icon facing right */}
//       <button className={`${typography.navPillText} px-2 py-2  text-[#D0FF00]`}>
//         {/* <svg 
//           className="w-6 h-6 text-gray-400 cursor-pointer" 
//           xmlns="http://www.w3.org/2000/svg" 
//           viewBox="0 0 20 20" 
//           fill="currentColor" 
//           aria-hidden="true"
//         >
//           <path fillRule="evenodd" d="M10 18a1 1 0 01-1-1V3.414L4.707 7.707a1 1 0 11-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 11-1.414 1.414L11 3.414V17a1 1 0 01-1 1z" clipRule="evenodd" />
//         </svg> */}
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
// </svg>
//       </button>
//     </div>
//   );
// }





// export default SearchBar;



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchArticles } from '../redux/actions/actions.ts';
// import { RootState } from '../redux/types.ts';
// import styles, { typography } from "../style";

// function SearchBar() {
//   const [query, setQuery] = useState('');
//   const dispatch = useDispatch();
  
//   const { searchResults, loading, error } = useSelector((state: RootState) => state);

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   // Handle search submission
//   const handleSearch = () => {
//     if (query.trim()) {
//       dispatch(searchArticles(query));
//     }
//   };

//   return (
//     <div className="flex justify-center items-center bg-transparent border-[1px] border-[#222222] shadow-lg backdrop-blur-md rounded-full px-4 py-2 max-w-2xl mx-auto">
//       {/* Plus icon inside input field */}
//       <button
//         className={`${typography.navPillText} px-2 py-2 flex items-center justify-center text-[#D0FF00]  ${
//           loading
//             ? "opacity-50 cursor-not-allowed text-[#D0FF00]"
//             : "hover:bg-[#30361329] transition-all"
//         }`}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//         </svg>
//       </button>


//       {/* Input field */}
//       <input
//         type="text"
//         placeholder="Search..."
//         className="bg-transparent text-[13px] text-[#808080] placeholder-[#c0c0c0] focus:outline-none w-full pl-8"
//         value={query}
//         onChange={handleChange}
//       />

//       {/* Airplane icon (send) */}
//       <button 
//         className={`${typography.navPillText} px-2 py-2 text-[#D0FF00] ${
//           loading
//             ? "opacity-50 cursor-not-allowed text-[#D0FF00]"
//             : "hover:bg-[#30361329] transition-all"
//         }`}
//         onClick={handleSearch} 
//         disable={loading}
//       >

//       {loading ? (
//         <>
//           <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
//           </svg>
//         </>
//         ) : (
//           <>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
//             </svg>
//           </>
//           )}






//       </button>
//     </div>
    

//   );
// }

// export default SearchBar;




// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchArticles } from '../redux/actions/actions.ts';
// import { RootState } from '../redux/types.ts';
// import styles, { typography } from "../style";

// function SearchBar() {
//   const [query, setQuery] = useState('');
//   const dispatch = useDispatch();
  
//   const { searchResults, loading, error, success } = useSelector((state: RootState) => state);
  

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   // Handle search submission
//   const handleSearch = () => {
//     if (query.trim()) {
//       dispatch(searchArticles(query));
//     }
//   };

//   // Clear input after successful search
//   useEffect(() => {
//     if (success) {
//       setQuery('');  // Clear the input field when search is successful
//     }
//   }, [success]);

//   return (
//     <div className="flex justify-center items-center bg-transparent border-[1px] border-[#222222] shadow-lg backdrop-blur-md rounded-full px-4 py-2 max-w-2xl mx-auto">
//       {/* Plus icon inside input field */}
//       <button
//         className={`${typography.navPillText} px-2 py-2 flex items-center justify-center text-[#D0FF00]  ${
//           loading
//             ? "opacity-50 cursor-not-allowed text-[#D0FF00]"
//             : "hover:bg-[#30361329] transition-all"
//         }`}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//         </svg>
//       </button>

//       {/* Input field */}
//       <input
//         type="text"
//         placeholder="Search..."
//         className="bg-transparent text-[13px] text-[#808080] placeholder-[#c0c0c0] focus:outline-none w-full pl-8"
//         value={query}
//         onChange={handleChange}
//       />

//       {/* Airplane icon (send) */}
//       <button 
//         className={`${typography.navPillText} px-2 py-2 text-[#D0FF00] ${loading ? "opacity-50 cursor-not-allowed text-[#D0FF00]" : "hover:bg-[#30361329] transition-all"}`}
//         onClick={handleSearch} 
//         disabled={loading}
//       >
//         {loading ? (
//           <>
//             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
//             </svg>
//           </>
//         ) : (
//           <>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
//             </svg>
//           </>
//         )}
//       </button>
//     </div>
//   );
// }

// export default SearchBar;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchArticles } from '../redux/actions/actions.ts';
// import { RootState } from '../redux/types.ts';
// import styles, { typography } from "../style";

// function SearchBar() {
//   const [query, setQuery] = useState('');
//   const dispatch = useDispatch();
  
//   const { searchResults, loading, error, success } = useSelector((state: RootState) => state);

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   // Handle search submission
//   const handleSearch = () => {
//     if (query.trim()) {
//       dispatch(searchArticles(query));
//     }
//   };

//   // Clear input after successful search
//   useEffect(() => {
//     if (success) {
//       setQuery('');  // Clear the input field when search is successful
//     }
//   }, [success]);

//   return (
//     <div className="flex justify-center items-center bg-transparent border-[1px] border-[#222222] shadow-lg backdrop-blur-md rounded-full px-4 py-2 max-w-2xl mx-auto">
//       {/* Plus icon inside input field */}
//       <button
//         className={`${typography.navPillText} px-2 py-2 flex items-center justify-center text-[#D0FF00]  ${
//           loading
//             ? "opacity-50 cursor-not-allowed text-[#D0FF00]"
//             : "hover:bg-[#30361329] transition-all"
//         }`}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//         </svg>
//       </button>

//       {/* Input field */}
//       <input
//         type="text"
//         placeholder="Search..."
//         className="bg-transparent text-[13px] text-[#808080] placeholder-[#c0c0c0] focus:outline-none w-full pl-8"
//         value={query}
//         onChange={handleChange}
//       />

//       {/* Airplane icon (send) */}
//       <button 
//         className={`${typography.navPillText} px-2 py-2 text-[#D0FF00] ${loading ? "opacity-50 cursor-not-allowed text-[#D0FF00]" : "hover:bg-[#30361329] transition-all"}`}
//         onClick={handleSearch} 
//         disabled={loading}
//       >
//         {loading ? (
//           <>
//             <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
//             </svg>
//           </>
//         ) : (
//           <>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
//             </svg>
//           </>
//         )}
//       </button>
//     </div>
//   );
// }

// export default SearchBar;


// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchArticles } from '../redux/actions/actions.ts';
// import { RootState } from '../redux/types.ts';
// import styles, { typography } from '../style';
// import { motion, useInView } from 'framer-motion';

// // Define animation variants for fade-in
// const fadeInVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
// };

// function SearchBar() {
//   const [query, setQuery] = useState('');
//   const dispatch = useDispatch();
//   const motionRef = useRef<HTMLDivElement | null>(null); // Ref for motion detection
//   const isInView = useInView(motionRef, { once: false, margin: '-50px' }); // Detect when SearchBar is in view

//   const { searchResults, loading, error, success } = useSelector((state: RootState) => state);

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//   };

//   // Handle search submission
//   const handleSearch = () => {
//     if (query.trim()) {
//       dispatch(searchArticles(query));
//     }
//   };

//   // Clear input after successful search
//   useEffect(() => {
//     if (success) {
//       setQuery(''); // Clear the input field when search is successful
//     }
//   }, [success]);

//   return (
//     <motion.div
//       ref={motionRef}
//       variants={fadeInVariants}
//       initial="hidden"
//       animate={isInView ? 'visible' : 'hidden'}
//       className="flex justify-center items-center bg-transparent border-[1px] border-[#222222] shadow-lg backdrop-blur-md rounded-full px-4 py-2 max-w-2xl mx-auto"
//     >
//       {/* Plus icon inside input field */}
//       <button
//         className={`${typography.navPillText} px-2 py-2 flex items-center justify-center text-[#D0FF00] ${
//           loading
//             ? 'opacity-50 cursor-not-allowed text-[#D0FF00]'
//             : 'hover:bg-[#30361329] transition-all'
//         }`}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//         </svg>
//       </button>

//       {/* Input field */}
//       <input
//         type="text"
//         placeholder="Search..."
//         className="bg-transparent text-[13px] text-[#808080] placeholder-[#c0c0c0] focus:outline-none w-full pl-8"
//         value={query}
//         onChange={handleChange}
//       />

//       {/* Airplane icon (send) */}
//       <button
//         className={`${typography.navPillText} px-2 py-2 text-[#D0FF00] ${
//           loading || query.length <1 ? 'opacity-50 cursor-not-allowed text-[#D0FF00]' : 'hover:bg-[#30361329] transition-all'
//         }`}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         {loading ? (
//           <svg
//             className="animate-spin h-5 w-5 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
//             />
//           </svg>
//         )}
//       </button>
//     </motion.div>
//   );
// }

// export default SearchBar;

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticles } from '../redux/actions/actions.ts';
import { RootState } from '../redux/types.ts';
import styles, { typography } from '../style';
import { motion, useInView } from 'framer-motion';

// Define animation variants for fade-in
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function SearchBar() {
  const [query, setQuery] = useState('');
  const [image, setImage] = useState<File | null>(null); // State for uploaded image
  const [imagePreview, setImagePreview] = useState<string | null>(null); // State for image preview URL
  const [isDragging, setIsDragging] = useState(false); // State for drag highlight
  const dispatch = useDispatch();
  const motionRef = useRef<HTMLDivElement | null>(null); // Ref for motion detection
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Ref for file input
  const isInView = useInView(motionRef, { once: false, margin: '-50px' }); // Detect when SearchBar is in view

  const { searchResults, loading, error, success } = useSelector((state: RootState) => state);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handle image selection
  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  // Handle file input change
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  // Handle click on plus button to trigger file input
  const handlePlusButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Handle drag-and-drop events
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  // Handle image removal
  const handleRemoveImage = () => {
    setImage(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview); // Clean up object URL
    }
    setImagePreview(null);
  };

  // Handle search submission
  const handleSearch = () => {
    if (query.trim() || image) {
      // Dispatch search with query and/or image
      dispatch(searchArticles({ query, image }));
    }
  };

  // Clear input and image after successful search
  useEffect(() => {
    if (success) {
      setQuery(''); // Clear the input field
      setImage(null); // Clear the image
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview); // Clean up object URL
      }
      setImagePreview(null); // Clear the preview
    }
  }, [success, imagePreview]);

  // Clean up image preview URL on component unmount
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <motion.div
      ref={motionRef}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`flex justify-center items-center bg-transparent border-[1px] border-[#222222] shadow-lg backdrop-blur-md rounded-full px-4 py-2 max-w-2xl mx-auto ${
        isDragging ? 'border-[#D0FF00] border-2' : ''
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileInputChange}
      />

      {/* Plus icon button for image upload */}
      <button
        className={`${typography.navPillText} px-2 py-2 flex items-center justify-center text-[#D0FF00] ${
          loading
            ? 'opacity-50 cursor-not-allowed text-[#D0FF00]'
            : 'hover:bg-[#30361329] transition-all'
        }`}
        onClick={handlePlusButtonClick}
        disabled={loading}
        aria-label="Upload image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      {/* Input field with image preview */}
      <div className="flex items-center w-full pl-8">
        {imagePreview && (
          <div className="relative mr-2">
            <img
              src={imagePreview}
              alt="Uploaded preview"
              className="h-10 w-10 object-cover rounded-md"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute -top-1 -right-1 bg-[#171717] rounded-full p-1 text-[#D0FF00] hover:text-[#CCCCCC]"
              aria-label="Remove image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-[13px] text-[#808080] placeholder-[#c0c0c0] focus:outline-none w-full"
          value={query}
          onChange={handleChange}
        />
      </div>

      {/* Airplane icon (send) */}
      <button
        className={`${typography.navPillText} px-2 py-2 text-[#D0FF00] ${
          loading || (!query.trim() && !image)
            ? 'opacity-50 cursor-not-allowed text-[#D0FF00]'
            : 'hover:bg-[#30361329] transition-all'
        }`}
        onClick={handleSearch}
        disabled={loading || (!query.trim() && !image)}
        aria-label="Search"
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        )}
      </button>
    </motion.div>
  );
}

export default SearchBar;