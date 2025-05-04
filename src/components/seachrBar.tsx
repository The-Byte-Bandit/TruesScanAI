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


import React from 'react';
import styles, { typography } from "../style";

function SearchBar() {
  return (
    <div className="flex justify-center items-center bg-transparent border-[1px] border-[#222222] shadow-lg backdrop-blur-md rounded-full px-4 py-2 max-w-2xl mx-auto">
      {/* Plus icon inside input field */}
      <button className={`${typography.navPillText} px-2 py-2 flex items-center text-[#D0FF00]`}>
        {/* <svg
          className="w-6 h-6 text-[#c0c0c0] "
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14m7-7H5"></path>
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

      </button>

      {/* Input field */}
      <input 
        type="text" 
        placeholder="Search..." 
        className="bg-transparent text-[14px] text-[#D0FF00] placeholder-[#c0c0c0] focus:outline-none w-full pl-8" 
      />

      {/* Airplane icon (send) */}
      {/* Paper airplane icon facing right */}
      <button className={`${typography.navPillText} px-2 py-2  text-[#D0FF00]`}>
        {/* <svg 
          className="w-6 h-6 text-gray-400 cursor-pointer" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor" 
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 18a1 1 0 01-1-1V3.414L4.707 7.707a1 1 0 11-1.414-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 11-1.414 1.414L11 3.414V17a1 1 0 01-1 1z" clipRule="evenodd" />
        </svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>
      </button>
    </div>
  );
}





export default SearchBar;
