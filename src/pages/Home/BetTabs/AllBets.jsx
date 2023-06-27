import React from "react";
import { useState, useEffect, useRef } from 'react';
import { AllBetsData } from './BetData';

const AllBetTabs = () => {
  const [visibleItems, setVisibleItems] = useState(15); // Number of initially visible items
  const containerRef = useRef(null);
  const containerHeightRef = useRef(null);
  const dataContainerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerHeight = containerHeightRef.current;
    const dataContainer = dataContainerRef.current;
    let animationFrameId;
    let scrolledPixels = 0;

    const scrollLoop = () => {
      scrolledPixels += 1; // Increment the scrolled pixels

      // Check if reached the end of the scrolling content
      if (scrolledPixels >= containerHeight - container.clientHeight) {
        scrolledPixels = 0; // Reset scrolled pixels to loop

        // Move the hidden items to the top of the container
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 15);
        dataContainer.style.transform = `translateY(0)`;
      } else {
        dataContainer.style.transform = `translateY(-${scrolledPixels}px)`;
      }

      // Request the next frame of the scroll loop
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    // Start the scroll loop when the component mounts
    animationFrameId = requestAnimationFrame(scrollLoop);

    // Clean up the scroll loop and cancel the animation frame on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    // Update the container height reference when visible items change
    const container = containerRef.current;
    const dataContainer = dataContainerRef.current;
    containerHeightRef.current = dataContainer.offsetHeight; // Use offsetHeight instead of scrollHeight
  }, [visibleItems]);

  return (
    <div className="bet__container" ref={containerRef}>
      <div className="data-container" ref={dataContainerRef}>
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {AllBetsData.map((item, i) => {
              const dataIndex = i % AllBetsData.length;
              const dataItem = AllBetsData[dataIndex];
              const isDark = i % 2 !== 0;
              const isZeroPayout = dataItem.payout === '$00.00';
              const payoutTextColor = isZeroPayout ? 'text-red-500' : 'text-[#5DDB1C]';

              return (
                <div
                  key={i}
                  className={`tabs__data__wrapper flex items-center border border-[#2D3947] rounded-[8px] font-[500] py-[12px] mt-[8px] cursor-pointer ${
                    isDark ? 'dark-1' : ''
                  }`}
                >
                    <div className="game__data link__color1 text-left w-[300px] pl-[16px] uppercase">
                        {dataItem.game}
                    </div>
                    <div className="game__player link__color1 text-center w-[300px]">{dataItem.player}</div>
                    <div className="game__bet text-white text-center w-[170px] min-w-[145px] flex justify-center items-center">
                        <span className="w-5 h-5 rounded-full block mr-1">R$</span>{dataItem.bet}
                    </div>
                    <div className="game__multiplier link__color1 text-center w-[170px] text-[#8194B0]">
                        {dataItem.multiplier}
                    </div>
                    <div className={`game__payout text-right flex-1 pr-[16px] ${payoutTextColor}`}>
                        {dataItem.payout}
                    </div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AllBetTabs;
