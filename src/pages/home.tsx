// import React from 'react';

// import { head } from '../constants/constant.tsx';
// import SearchBar from '../components/seachrBar.tsx';

// import styles, { typography } from "../style";

// function Home() {
//   return (
//     <div className="  w-full h-full poppins">

//       {/* nav */}
//         <div className="flex flex-row justify-between ">
//           {/* logo */}
//           <div className="w-8">
//             <img src ={head} alt="logo" className="w-[20%]"/>
//           </div>

//           <div className={`${typography.navPillText} ${styles.textGrey10} hover:border-[#CCCCCC] hover:border-opacity-30 hover:cursor-pointer`}>
//             <div>
//               <h3>Features</h3>
//             </div>

//             <div>
//               <h3>How It works</h3>
//             </div>
//             <div>
//               <h3>FAQ</h3>
//             </div>
//           </div>
          
//           <div className={`${typography.navPillText} text-[#CCCCCC] hover:border-[#CCCCCC] hover:border-opacity-30 hover:cursor-pointer`}>
//             <h3>Contact Me</h3>
//           </div>

//         </div>
//           {/* header */}
//         {/* <div>
//           <div></div>
//           <div></div>
//         </div> */}

//       {/* result */}
//         {/* <div>

//         </div> */}


//        {/* <div className="text-[#c0c0c0] text-center pt-6 h-full">
//           <h1 className = "md:text-[180px]">TrueScan AI</h1>
//           <p>Your trusted platform for detecting and verifying information.</p> 
//        </div> */}
//        <div className="text-[#c0c0c0] md:pt-16 pt-8 h-full md:px-36">
//         <h1 className="md:text-[50px] text-6xl text-center  animate-fade-in  gradient-text md:text-nowrap">Find the Truth Behind Every Claim with <br/>TrueScan AI</h1>
//         <p className="text-sm mt-4 text-[#7D7F78] ">"Meet Kevin your AI powered Fact-Checkers -"</p>
//       </div>
//        <div className="mt-14">
//        <SearchBar/>
//        </div>
//       {/*<p>Your trusted platform for detecting and verifying information.</p> */}
//       {/* <img src={head} alt='head'/> */}

//       <div className="mt-20">
//         <h1 className="poppins text-[#CCCCCC] md:text-[20px] text-center gradient-text poppins ">We address the complexities of verifying claims and ensuring the truth</h1>
//         <div className="flex flex-row justify-around space-x-4 p-14">
//   {/* Features Card */}
//   <div
//     id="features"
//     className={`${typography.navPillText} flex flex-col items-center justify-normal  rounded-lg shadow-lg p-6  poppins w-[300px]`}
//   >
//     <h2 className="text-base font-medium text-[#D0FF00]   mb-4">Features</h2>
//     <ul className="   text-[#CCCCCC] gradient-text  space-y-3">
//       <li className="flex items-center space-x-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-[#D0FF00]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M5 12l5 5L19 7" />
//         </svg>
//         <span>Accurate News Verification</span>
//       </li>
//       <li className="flex items-center space-x-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-[#D0FF00]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M5 12l5 5L19 7" />
//         </svg>
//         <span>Real-Time Fact-Checking</span>
//       </li>
//       <li className="flex items-center space-x-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-[#D0FF00]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M5 12l5 5L19 7" />
//         </svg>
//         <span>Unbiased Results</span>
//       </li>
//       <li className="flex items-center space-x-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-5 h-5 text-[#D0FF00]"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M5 12l5 5L19 7" />
//         </svg>
//         <span>Easy to Use Interface</span>
//       </li>
//     </ul>
//   </div>

//   {/* How It Works Card */}
//   <div
//     id="howItWorks"
//     className={`${typography.navPillText} flex flex-col items-center justify-center  rounded-lg shadow-lg p-6   poppins max-w-[400px] `}
//   >
//     <h2 className="text-base font-medium text-[#D0FF00]  mb-4">How It Works</h2>
//     <div className=" text-[#CCCCCC] gradient-text space-y-3">
//       <p>
//         TrueScan AI uses cutting-edge AI algorithms to analyze and cross-check claims with verified sources from across the internet.
//       </p>
//       <p>
//         We combine real-time fact-checking with advanced natural language processing to provide instant, unbiased results.
//       </p>
//       <p>
//         Our platform uses reliable news sources to validate the truth of any claim, ensuring transparency in news verification.
//       </p>
//       <p>
//         With just a few clicks, you can verify any claim and uncover the truth with TrueScan AI.
//       </p>
//     </div>
//   </div>
// </div>

     
//       </div>
//     </div>
//   );
// }

// export default Home;






import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchArticles } from '../redux/actions/actions.ts';
import { head,linkedin, whatsapp, instagram, github, facebook, twitter, discord, } from '../constants/constant.ts';
import SearchBar from '../components/seachrBar.tsx';
import styles, { typography } from "../style";


function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [query, setQuery] = useState('');
  const [typedResult, setTypedResult] = useState('');  // State to store the typed result
  const dispatch = useDispatch();
  
  const { searchResults, loading, error } = useSelector((state: RootState) => state);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Handle search submission
  const handleSearch = () => {
    if (query.trim()) {
      dispatch(searchArticles(query));
    }
  };

  // Typing effect for search results
  useEffect(() => {
    if (searchResults && searchResults.length > 0) {
      const resultText = searchResults[0].analysis;  // Get the first result's analysis text
      let index = 0;
      const typingInterval = setInterval(() => {
        setTypedResult((prev) => prev + resultText[index]);
        index += 1;

        if (index === resultText.length) {
          clearInterval(typingInterval);
        }
      }, 100);  // Adjust the speed here (100ms per character)
    }
  }, [searchResults]); // Trigger typing effect when searchResults change


  console.log(searchResults);
  

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is TrueScan AI?',
      answer:
        'TrueScan AI is a powerful fact-checking platform powered by artificial intelligence to verify news claims in real-time.',
    },
    {
      question: 'How does TrueScan AI work?',
      answer:
        'TrueScan AI uses advanced algorithms to analyze news and verify claims by cross-referencing them with verified sources.',
    },
    {
      question: 'Is TrueScan AI free to use?',
      answer:
        'TrueScan AI offers both free and premium plans to cater to different user needs, with more advanced features in premium plans.',
    },
    {
      question: 'How accurate is TrueScan AI?',
      answer:
        'TrueScan AI provides highly accurate results based on reliable data sources. However, accuracy depends on the information available online.',
    },
    {
      question: 'Can I trust the results from TrueScan AI?',
      answer:
        'Yes, TrueScan AI ensures unbiased and transparent results using cutting-edge natural language processing and fact-checking technology.',
    },
  ];

  return (
    <div className="w-full h-full poppins">
      {/* nav */}
      <div className="flex flex-row justify-between p-4">
        {/* logo */}
        <div className="w-8">
          <img src={head} alt="logo" className="w-[20%]" />
        </div>

        <div className={`${typography.navPillText} ${styles.textGrey10} flex space-x-6 hover:border-[#CCCCCC] hover:border-opacity-30 hover:cursor-pointer`}>
          <div>
            <h3>Features</h3>
          </div>
          <div>
            <h3>How It Works</h3>
          </div>
          <div>
            <h3>FAQ</h3>
          </div>
        </div>

        <div className={`${typography.navPillText} hidden md:flex text-[#CCCCCC] hover:border-[#CCCCCC] hover:border-opacity-30 hover:cursor-pointer`}>
          <h3>Contact Me</h3>
        </div>
      </div>

      {/* header */}
      <div className="text-[#c0c0c0] md:pt-16 pt-8 h-full md:px-36">
        <h1 className="md:text-[50px] text-[34px] line-height-1 text-center animate-fade-in gradient-text md:text-nowrap">
          Find the Truth Behind Every Claim with <br />TrueScan AI
        </h1>
        <p className="text-sm mt-4 text-[#7D7F78] text-center">
          "Meet Kevin your AI powered Fact-Checker -"
        </p>
      </div>

      <div className="mt-14">
        <SearchBar />
      </div>
      {/* Search Results */}
    {loading && <p>Loading...</p>}
    {error && <p className="text-red-500">{error}</p>}
    {true ? (
      <div className="mt-4 flex flex-row flex-wrap md:flex-nowrap justify-center gap-6 py-14 px-8  md:p-10">
        <div className="mt-4   poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] border flex flex-col rounded-xl p-6 w-full max-w-[800px] min-h-[180px]">
          <h3 className="text-[#e0e0e0] text-[13px] mb-2">Search Results:</h3>
          {/* <ul>
            {searchResults.map((result: { input_text: string, analysis: string, truth_score: Number }, index: number) => (
              <li key={index} className="text-[#CCCCCC]">
                <a href={result.link} className="text-[#D0FF00]">{result.input_text}</a>
                <p>{result.analysis}</p>
              </li>
            ))}
          </ul> */}
          <h1 className="text-[#CCCCCC] text-[11px]">{searchResults.analysis}</h1>
        </div>

        <div className="mt-4   poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] border flex flex-col rounded-xl p-6 w-full max-w-[400px] h-[180px]">
        <h3 className="text-[#e0e0e0] text-[13px] mb-2">Truth Score:</h3>

      </div>
      </div>
      
    ): ""}

      {/* Cards Section */}
      <div className="mt-20">
        <h1 className="poppins text-[#CCCCCC] md:text-[25px] text-center gradient-text">
          We address the complexities of verifying claims and ensuring the truth.
        </h1>
        <div className="mt-20">
          <h1 className="poppins oddhighlighttext md:text-sm text-center">
            Features
          </h1>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 p-14 md:gap-10 md:p-10">
          {/* Feature 1 */}
          <div id="feature1" className=" poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222]  flex flex-col items-center justify-start rounded-lg  p-6 poppins max-w-[300px]  border  hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-base font-light  oddhighlighttext mb-4">Accurate News Verification</h2>
            <p className="gradient-text text-sm">TrueScan AI uses state-of-the-art algorithms to cross-check news sources and ensure the accuracy of information.</p>
          </div>

          {/* Feature 2 */}
          <div id="feature2" className=" poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] flex flex-col items-center justify-start rounded-lg  p-6 poppins max-w-[300px]  border  hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-base font-light oddhighlighttext mb-4">Real-Time Fact-Checking</h2>
            <p className="gradient-text text-sm">We provide instant fact-checking results based on the latest verified information available online.</p>
          </div>

          {/* Feature 3 */}
          <div id="feature3" className=" poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] flex flex-col items-center justify-start rounded-lg  p-6 poppins max-w-[300px]  border  hover:shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-base font-light oddhighlighttext mb-4">Unbiased Results</h2>
            <p className="gradient-text text-sm">Our platform ensures unbiased and transparent news verification to help you make informed decisions.</p>
          </div>

          {/* Feature 4 */}
          {/* <div id="feature4" className=" poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] borderflex flex-col items-center justify-start rounded-lg  p-6 poppins max-w-[300px]  border  hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-base  oddhighlighttext mb-4">Easy to Use Interface</h2>
            <p className="gradient-text text-sm">Our platform offers an intuitive user interface, making it easy to verify claims with just a few clicks.</p>
          </div> */}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-20">
          <h1 className="poppins oddhighlighttext md:text-sm text-center ">
            How It Works
          </h1>

          
          <div className="flex flex-row flex-wrap justify-center gap-6 p-14 md:p-10">
            {/* Step 1: AI Analysis */}
            <div className=" poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] border flex flex-col md:flex-row items-center rounded-xl p-6 w-full max-w-[400px] min-h-[180px]">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 oddhighlighttext"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2m0 5v5l3 3" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg  gradient-text">AI Analysis</h2>
                <p className="gradient-text text-sm mt-2">
                  TrueScan AI uses cutting-edge AI algorithms to analyze and cross-check claims with verified sources.
                </p>
              </div>
            </div>

            {/* Step 2: Real-Time Fact-Checking */}
            <div className=" poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] border flex flex-col md:flex-row items-center rounded-xl p-6 w-full max-w-[400px] min-h-[180px]">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 oddhighlighttext"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12l5 5L19 7" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg gradient-text">Real-Time Fact-Checking</h2>
                <p className="gradient-text text-sm mt-2">
                  We combine real-time fact-checking with advanced NLP for instant, unbiased results.
                </p>
              </div>
            </div>

            {/* Step 3: Source Validation */}
            <div className=" poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] border flex flex-col md:flex-row items-center rounded-xl p-6 w-full max-w-[400px] min-h-[180px]">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 oddhighlighttext"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v6m0 8v6m-6-6h12M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg gradient-text">Source Validation</h2>
                <p className="gradient-text text-sm mt-2">
                  Our platform validates claims using reliable news sources for transparency.
                </p>
              </div>
            </div>

            {/* Step 4: Simple Verification */}
            <div className=" poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] border flex flex-col md:flex-row items-center rounded-xl p-6 w-full max-w-[400px] min-h-[180px]">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 oddhighlighttext"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2zM9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-lg gradient-text">Simple Verification</h2>
                <p className="gradient-text text-sm mt-2">
                  Verify any claim with just a few clicks and uncover the truth with TrueScan AI.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="poppins mt-20">
          <h2 className="text-3xl text-center text-[#CCCCCC] font-light mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center cursor-pointer p-4  rounded-lg shadow-md"
                >
                  <h3 className="text-xl gradient-text">{faq.question}</h3>
                  <span className="text-[#CCCCCC]">{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] border  p-4  text-[#CCCCCC] font-light rounded-lg ">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20 mb-6">
          <div className="poppins shadow-lg backdrop-blur-md bg-[#171717] bg-opacity-60 border-[#222222] border flex flex-col md:flex-row items-center rounded-xl p-6 w-full max-w-full min-h-[180px]">
            {/* Left Section */}
            <div className="flex-shrink-0 mb-4 md:mb-0 h-full w-full md:w-1/2">
              <h1 className="text-white text-lg font-light ">Reach Out To <br/> Us.</h1>
              <p className=" gradient-text text-[11px]">For any inquiry or further support, contact us on any of these platforms.</p>
            </div>

            {/* Right Section (Icons) */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4">
              {/* First Row of Icons */}
              <div className="flex items-center justify-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-container">
                  <img src={facebook} alt="Facebook" className="w-full h-full object-contain" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-container">
                  <img src={twitter} alt="Twitter" className="w-full h-full object-contain" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-container">
                  <img src={instagram} alt="Instagram" className="w-full h-full object-contain" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-container">
                  <img src={linkedin} alt="LinkedIn" className="w-full h-full object-contain" />
                </a>
              </div>

              {/* Second Row of Icons */}
              <div className="flex items-center justify-center space-x-4">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="icon-container">
                  <img src={discord} alt="Discord" className="w-full h-full object-contain" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-container">
                  <img src={github} alt="GitHub" className="w-full h-full object-contain" />
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="icon-container">
                  <img src={whatsapp} alt="WhatsApp" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>





      </div>
    // </div>
  );
}

export default Home;