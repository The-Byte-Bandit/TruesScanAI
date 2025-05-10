// // // import React, { useEffect, useRef } from 'react';
// // // import * as echarts from 'echarts';

// // // type GaugeChartProps = {
// // //   score: number; // The score will be passed as a prop
// // // };

// // // const GaugeChart: React.FC<GaugeChartProps> = ({ score }) => {
// // //   const chartRef = useRef<HTMLDivElement | null>(null);

// // //   useEffect(() => {
// // //     if (chartRef.current) {
// // //       const myChart = echarts.init(chartRef.current);

// // //       const option = {
// // //         tooltip: {
// // //           formatter: '{a} <br/>{b} : {c}',
// // //         },
// // //         series: [
// // //           {
// // //             name: 'Score Gauge',
// // //             type: 'gauge',
// // //             center: ['50%', '50%'], // Positioning the gauge chart in the center
// // //             radius: '80%',
// // //             startAngle: 180, // Start from left
// // //             endAngle: 0, // End at right
// // //             progress: {
// // //               show: true,
// // //               width: 18, // Width of the progress bar
// // //             },
// // //             axisLine: {
// // //               lineStyle: {
// // //                 width: 4, // Width of the axis line
// // //                 color: [
// // //                   [0.3, '#ff0000'], // 0-3 is red
// // //                   [0.7, '#ffcc00'], // 3-7 is yellow
// // //                   [1, '#00cc00'], // 7-10 is green
// // //                 ],
// // //               },
// // //             },
// // //             splitLine: {
// // //               show: false, // Hide the split line to make the gauge cleaner
// // //             },
// // //             pointer: {
// // //               icon: 'arrow', // Optional: Adds a pointer arrow
// // //             },
// // //             detail: {
// // //               valueAnimation: true,
// // //               formatter: '{value}', // Display the value
// // //               fontSize: 30,
// // //               color: '#fff',
// // //             },
// // //             data: [
// // //               {
// // //                 value: score,
// // //                 name: 'SCORE',
// // //               },
// // //             ],
// // //           },
// // //         ],
// // //       };

// // //       myChart.setOption(option);

// // //       // Resize chart when window resizes
// // //       window.addEventListener('resize', () => myChart.resize());

// // //       return () => {
// // //         // Cleanup on component unmount
// // //         window.removeEventListener('resize', () => myChart.resize());
// // //         myChart.dispose();
// // //       };
// // //     }
// // //   }, [score]); // Trigger the effect when the score changes

// // //   return <div ref={chartRef} style={{ width: '100%', height: '300px' }} />;
// // // };

// // // export default GaugeChart;



// // import React, { useEffect, useRef } from 'react';
// // import * as echarts from 'echarts';

// // type GaugeChartProps = {
// //   score: number; // The score will be passed as a prop
// // };


// // const GaugeChart: React.FC<GaugeChartProps> = ({ score }) => {
// //   const chartRef = useRef<HTMLDivElement | null>(null);

// //   useEffect(() => {
// //     if (chartRef.current) {
// //       const myChart = echarts.init(chartRef.current);

// //       const option = {
// //         tooltip: {
// //           formatter: '{a} <br/>{b} : {c}',
// //         },
// //         series: [
// //           {
// //             name: 'Score Gauge',
// //             type: 'gauge',
// //             radius: '80%',
// //             startAngle: 180, // Start from left
// //             endAngle: 0, // End at right
// //             progress: {
// //               show: true,
// //               width: 18, // Width of the progress bar
// //             },
// //             axisLine: {
// //               lineStyle: {
// //                 width: 18, // Width of the axis line
// //                 color: [
// //                   [0.3, '#ff0000'], // 0-3 is red
// //                   [0.7, '#ffcc00'], // 3-7 is yellow
// //                   [1, '#00cc00'], // 7-10 is green
// //                 ],
// //               },
// //             },
// //             splitLine: {
// //               show: false, // Hide the split line to make the gauge cleaner
// //             },
// //             pointer: {
// //               icon: 'arrow', // Optional: Adds a pointer arrow
// //             },
// //             detail: {
// //               valueAnimation: true,
// //               formatter: '{value}', // Display the value
// //               fontSize: 30,
// //               color: '#fff',
// //             },
// //             data: [
// //               {
// //                 value: score, // Pass the score here
// //                 name: 'SCORE',
// //               },
// //             ],
// //           },
// //         ],
// //       };

// //       myChart.setOption(option);

// //       // Resize chart when window resizes
// //       window.addEventListener('resize', () => myChart.resize());

// //       return () => {
// //         // Cleanup on component unmount
// //         window.removeEventListener('resize', () => myChart.resize());
// //         myChart.dispose();
// //       };
// //     }
// //   }, [score]); // Trigger the effect when the score changes

// //   return <div ref={chartRef} style={{ width: '100%', height: '300px' }} />;
// // };

// // export default GaugeChart;

// import React, { useEffect, useState } from 'react';
// import * as echarts from 'echarts';
// import ReactEChartsCore from 'echarts-for-react/lib/core';

// import { CanvasRenderer } from 'echarts/renderers';
// import { GaugeChart } from 'echarts/charts';

// type GaugeProps = {
//   score: number; // The score will be passed as a prop
// };

// const Gauge: React.FC<GaugeProps> = ({ score }) => {
//   const [currentScore, setCurrentScore] = useState<number>(score);

//   // Use ECharts gauge chart and canvas renderer
//   echarts.use([GaugeChart, CanvasRenderer]);

//   // Define the gauge chart options
//   const options = {
//     tooltip: {
//       formatter: '{a} <br/>{b} : {c}',
//     },
//     series: [
//       {
//         name: 'Score Gauge',
//         type: 'gauge',
//         radius: '80%',
//         startAngle: 180, // Start from left
//         endAngle: 0, // End at right
//         progress: {
//           show: true,
//           width: 18, // Width of the progress bar
//         },
//         axisLine: {
//           lineStyle: {
//             width: 18, // Width of the axis line
//             color: [
//               [0.3, '#ff0000'], // Red zone for score 0-3
//               [0.7, '#ffcc00'], // Yellow zone for score 3-7
//               [1, '#00cc00'], // Green zone for score 7-10
//             ]
//           },
//         },
//         splitLine: {
//           show: false, // Hide split lines
//         },
//         pointer: {
//           icon: 'arrow', // Optional: Adds a pointer arrow
//         },
//         detail: {
//           valueAnimation: true,
//           formatter: '{value}', // Display the value
//           fontSize: 30,
//           color: '#fff',
//         },
//         data: [
//           {
//             value: currentScore, // Dynamically set the score
//             name: 'SCORE',
//           },
//         ]
//       }
//     ]
//   };

//   // Update the current score if it changes (in case you are getting score dynamically)
//   useEffect(() => {
//     setCurrentScore(score);
//   }, [score]);

//   return (
//     <div style={{ width: '100%', height: '300px' }}>
//       <ReactEChartsCore
//         echarts={echarts}
//         option={options}
//         notMerge={true}
//         lazyUpdate={true}
//         theme={'theme_name'}
//       />
//     </div>
//   );
// };

// export default Gauge;

// import React, { useState, useEffect, useRef } from 'react';

// interface GaugeChartProps {
//   score: number; // Score from 0 to 100
//   width?: number;
//   height?: number;
//   animationDuration?: number;
// }

// const GaugeChart: React.FC<GaugeChartProps> = ({
//   score = 50,
//   width = 300,
//   height = 200,
//   animationDuration = 1000,
// }) => {
//   const [animatedScore, setAnimatedScore] = useState(0);
//   const requestRef = useRef<number>();
//   const startTimeRef = useRef<number>();
//   const prevScoreRef = useRef<number>(0);

//   // Animation logic
//   const animate = (timestamp: number) => {
//     if (!startTimeRef.current) startTimeRef.current = timestamp;
//     const progress = Math.min((timestamp - startTimeRef.current) / animationDuration, 1);
    
//     const currentValue = prevScoreRef.current + (score - prevScoreRef.current) * progress;
//     setAnimatedScore(Math.round(currentValue));
    
//     if (progress < 1) {
//       requestRef.current = requestAnimationFrame(animate);
//     }
//   };

//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => {
//       if (requestRef.current) {
//         cancelAnimationFrame(requestRef.current);
//       }
//     };
//   }, [score]);

//   useEffect(() => {
//     prevScoreRef.current = animatedScore;
//   }, [animatedScore]);

//   // Calculate dimensions and positions
//   const centerX = width / 2;
//   const centerY = height;
//   const radius = width * 0.4;
//   const startAngle = Math.PI; // 180 degrees
//   const endAngle = 0; // 0 degrees
//   const angleRange = endAngle - startAngle;
  
//   // Color zones
//   const zones = [
//     { start: 0, end: 40, color: '#FF5F5F' },    // Red
//     { start: 40, end: 70, color: '#FFD05F' },   // Yellow
//     { start: 70, end: 100, color: '#7FDF7F' },  // Green
//   ];

//   // Calculate needle angle
//   const needleAngle = startAngle + (angleRange * animatedScore) / 100;

//   return (
//     <div className="gauge-container" style={{ width, height, position: 'relative' }}>
//       <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
//         {/* Background arc */}
//         <path
//           d={`
//             M ${centerX - radius} ${centerY}
//             A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}
//           `}
//           fill="none"
//           stroke="#eee"
//           strokeWidth="20"
//         />

//         {/* Colored zones */}
//         {zones.map((zone, index) => {
//           const zoneStartAngle = startAngle + (angleRange * zone.start) / 100;
//           const zoneEndAngle = startAngle + (angleRange * zone.end) / 100;
          
//           const startX = centerX + radius * Math.cos(zoneStartAngle);
//           const startY = centerY + radius * Math.sin(zoneStartAngle);
//           const endX = centerX + radius * Math.cos(zoneEndAngle);
//           const endY = centerY + radius * Math.sin(zoneEndAngle);
          
//           const largeArcFlag = zoneEndAngle - zoneStartAngle <= Math.PI ? 0 : 1;

//           return (
//             <path
//               key={index}
//               d={`
//                 M ${startX} ${startY}
//                 A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
//               `}
//               fill="none"
//               stroke={zone.color}
//               strokeWidth="20"
//             />
//           );
//         })}

//         {/* Tick marks and labels */}
//         {[0, 20, 40, 60, 80, 100].map((value) => {
//           const angle = startAngle + (angleRange * value) / 100;
//           const tickLength = value % 20 === 0 ? 12 : 6;
//           const outerX = centerX + (radius + 10) * Math.cos(angle);
//           const outerY = centerY + (radius + 10) * Math.sin(angle);
//           const innerX = centerX + (radius - tickLength) * Math.cos(angle);
//           const innerY = centerY + (radius - tickLength) * Math.sin(angle);
//           const textX = centerX + (radius - 30) * Math.cos(angle);
//           const textY = centerY + (radius - 30) * Math.sin(angle);

//           return (
//             <g key={value}>
//               <line
//                 x1={outerX}
//                 y1={outerY}
//                 x2={innerX}
//                 y2={innerY}
//                 stroke="#333"
//                 strokeWidth="2"
//               />
//               {value % 20 === 0 && (
//                 <text
//                   x={textX}
//                   y={textY}
//                   textAnchor="middle"
//                   dominantBaseline="middle"
//                   fontSize="12"
//                   fill="#333"
//                 >
//                   {value}
//                 </text>
//               )}
//             </g>
//           );
//         })}

//         {/* Needle */}
//         <line
//           x1={centerX}
//           y1={centerY}
//           x2={centerX + (radius - 25) * Math.cos(needleAngle)}
//           y2={centerY + (radius - 25) * Math.sin(needleAngle)}
//           stroke="#333"
//           strokeWidth="3"
//           strokeLinecap="round"
//         />
        
//         {/* Needle center circle */}
//         <circle
//           cx={centerX}
//           cy={centerY}
//           r="8"
//           fill="#333"
//         />
//       </svg>

//       {/* Score display */}
//       <div style={{
//         position: 'absolute',
//         top: '70%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         textAlign: 'center',
//       }}>
//         <div style={{
//           fontSize: '32px',
//           fontWeight: 'bold',
//           color: '#333',
//         }}>
//           {animatedScore}
//         </div>
//         <div style={{
//           fontSize: '14px',
//           color: '#666',
//           marginTop: '-8px',
//         }}>
//           SCORE
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GaugeChart;


// import React, { useEffect, useRef, useState } from 'react';

// interface GaugeChartProps {
//   value: number; // The target value (between 1 and 6)
// }

// const GaugeChart: React.FC<GaugeChartProps> = ({ value }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [animatedValue, setAnimatedValue] = useState(1); // Start at 1

//   // Animate the needle movement
//   useEffect(() => {
//     let startValue = 1;
//     const targetValue = Math.min(Math.max(value, 1), 10); // Ensure value is between 1 and 6
//     const increment = (targetValue - startValue) / 50; // Animate over 50 steps
//     const interval = setInterval(() => {
//       startValue += increment;
//       if (Math.abs(startValue - targetValue) < 0.01) {
//         startValue = targetValue;
//         clearInterval(interval);
//       }
//       setAnimatedValue(startValue);
//     }, 20); // Update every 20ms for smooth animation

//     return () => clearInterval(interval);
//   }, [value]);

//   // Draw the gauge chart
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Canvas dimensions
//     const width = canvas.width;
//     const height = canvas.height;
//     const centerX = width / 2;
//     const centerY = height * 0.8; // Position the center near the bottom for a semi-circle
//     const radius = Math.min(width, height) * 0.5;
//     const startAngle = Math.PI; // Start at 180 degrees (left)
//     const endAngle = 2 * Math.PI; // End at 360 degrees (right)

//     // Clear the canvas
//     ctx.clearRect(0, 0, width, height);

//     // Draw the gauge background (three colored sections)
//     const totalRange = 10 - 1; // Range from 1 to 6
//     const anglePerUnit = (endAngle - startAngle) / totalRange; // Angle per unit value

//     // Red section (1-2)
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, startAngle, startAngle + anglePerUnit * 1);
//     ctx.lineWidth = 20;
//     ctx.strokeStyle = '#FF0000'; // Red
//     ctx.stroke();

//     // Yellow section (2-4)
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, startAngle + anglePerUnit * 1, startAngle + anglePerUnit * 3);
//     ctx.strokeStyle = '#FFFF00'; // Yellow
//     ctx.stroke();

//     // Green section (4-6)
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius, startAngle + anglePerUnit * 3, endAngle);
//     ctx.strokeStyle = '#00FF00'; // Green
//     ctx.stroke();

//     // Draw tick marks and labels
//     ctx.lineWidth = 2;
//     ctx.strokeStyle = '#000000';
//     ctx.fillStyle = '#000000';
//     ctx.font = '12px Poppins';
//     ctx.textAlign = 'center';
//     for (let i = 1; i <= 6; i++) {
//       const angle = startAngle + (i - 1) * anglePerUnit;
//       const tickStart = radius * 0.9;
//       const tickEnd = radius * 1.0;
//       const labelPos = radius * 1.15;

//       // Tick mark
//       ctx.beginPath();
//       ctx.moveTo(centerX + Math.cos(angle) * tickStart, centerY + Math.sin(angle) * tickStart);
//       ctx.lineTo(centerX + Math.cos(angle) * tickEnd, centerY + Math.sin(angle) * tickEnd);
//       ctx.stroke();

//       // Label
//       ctx.fillText(
//         i.toString(),
//         centerX + Math.cos(angle) * labelPos,
//         centerY + Math.sin(angle) * labelPos + 5
//       );
//     }

//     // Draw the needle
//     const needleAngle = startAngle + (animatedValue - 1) * anglePerUnit;
//     const needleLength = radius * 0.8;
//     ctx.beginPath();
//     ctx.moveTo(centerX, centerY);
//     ctx.lineTo(
//       centerX + Math.cos(needleAngle) * needleLength,
//       centerY + Math.sin(needleAngle) * needleLength
//     );
//     ctx.lineWidth = 4;
//     ctx.strokeStyle = '#345243'; // Dark blue needle
//     ctx.stroke();

//     // Draw the needle base (small circle)
//     ctx.beginPath();
//     ctx.arc(centerX, centerY, 8, 0, 2 * Math.PI);
//     ctx.fillStyle = '#345243';
//     ctx.fill();

//     // Draw the score text
//     ctx.font = '16px Poppins';
//     ctx.fillStyle = '#000000';
//     ctx.fillText(`Score: ${Math.round(animatedValue)}`, centerX, centerY + 30);
//   }, [animatedValue]);

//   return (
//     <div className="flex flex-col items-center">
//       <canvas ref={canvasRef} width={300} height={200} />
//     </div>
//   );
// };

// export default GaugeChart;


import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';

type GaugeChartProps = {
  score: number; // The score will be passed as a prop
};

const GaugeChart: React.FC<GaugeChartProps> = ({ score }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [currentScore, setCurrentScore] = useState<number>(score);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}',
        },
        series: [
          {
            name: 'Score Gauge',
            type: 'gauge',
           radius: '120%',

center: ['50%', '80%'],
            startAngle: 180, // Start from left
            endAngle: 0, // End at right
            progress: {
              show: true,
              width: 18, // Width of the progress bar
            },
            axisLine: {
              lineStyle: {
                width: 18, // Width of the axis line
                color: [
                  [0.3, '#ff0000'], // Red zone for score 0-3
                  [0.7, '#ffcc00'], // Yellow zone for score 3-7
                  [1, '#00cc00'], // Green zone for score 7-10
                ]
              },
            },
            splitLine: {
              show: false, // Hide split lines
            },
            pointer: {
              icon: 'arrow', // Optional: Adds a pointer arrow
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}', // Display the value
              fontSize: 30,
              color: '#fff',
            },
            data: [
              {
                value: currentScore, // Dynamic score here
                name: 'SCORE',
              },
            ]
          }
        ]
      };

      myChart.setOption(option);

      // Resize chart when window resizes
      window.addEventListener('resize', () => myChart.resize());

      return () => {
        // Cleanup on component unmount
        window.removeEventListener('resize', () => myChart.resize());
        myChart.dispose();
      };
    }
  }, [currentScore]); // Trigger the effect when the score changes

  // Simulating dynamic score change for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScore(Math.floor(Math.random() * 10) + 1); // Random score between 1 and 10
    }, 3000); // Update every 3 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }} />;
};

export default GaugeChart;
