import React from 'react';
import { LineWave } from 'react-loader-spinner';

const SlotsTopLoading = () => {

    return (

        <>
            <div className='flex justify-center items-center w-full py-10'>
                <div>
                    <p className='text-white text-left pl-2'>Loading</p>
                    <LineWave
                    className='flex justify-center items-center'
                    height='100'
                    width='100'
                    color='#12c2e9'
                    ariaLabel='line-wave'
                    wrapperStyle={{}}
                    wrapperClass=''
                    visible={true}
                    firstLineColor=''
                    middleLineColor=''
                    lastLineColor=''
                    />
                </div>
            </div>
        </>
    
    )
  }
  
  export default SlotsTopLoading;