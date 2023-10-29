import React from 'react';

const ImageShape = () => {
    return (
        <div className="flex justify-end float-right h-[660px] left-[180px] bottom-[50px]">
            <div className="relative w-[500px] h-[660px] overflow-hidden left-[180px] bottom-[50px]">
                {/* <div className="absolute inset-0 w-1/2 h-full bg-white rounded-full"></div> */}
                <img
                    src="Mask group -5.png"
                    alt="Your Image"
                    className="w-full h-full "
                />
            </div>
        </div>
    );
};

export default ImageShape;