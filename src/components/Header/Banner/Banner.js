import React from 'react';
import banner from '../../../image/banner-bg.jpg'
import man from '../../../image/banner-man.png'
import './Banner.css'

const Banner = () => {
    const style = {
        backgroundImage: ` url(${banner})`,
        height: '800px',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <section style={style} className="bannerMain pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-4">
                        <img className="img-fluid" src={man} alt=""/>
                    </div>
                    <div className="col-md-6 col-sm-4 d-flex justify-content-center align-items-center ">
                        <div className="bannerCaption">
                            <h1 className="text-white Caption">Cleaning Your <br/> Worries Away</h1>
                            <p className="captionDetails">Blessed lesser make green spirit midst life lights creeping to fowl whales best multiply. Day them earth him without hath stars first. Dry us every him rule him grass set peter dolor swatch.</p>
                            <button className="main-btn main-btn-2 ml-4"> Learn More </button>
                            <button className="main-btn"> Quick Cleaning </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;