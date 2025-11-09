import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
    const { top, left } = position;
    const { width, height } = size;
    return (

        <div className='absolute z-10'
            style={{
                top: top,
                left: left,
                height: height,
                width: width,
                transform: 'translate(-50%,-50%)',
            }}>
            <div className="w-full h-full bg-[#c084fc] dark:bg-[#3a3a4a] rounded-full opacity-100 blur-3xl animate-blob"></div>
        </div>
    );
};

BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
};

export default BlurBlob;