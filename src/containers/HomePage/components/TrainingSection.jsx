import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const TrainingSection = ({ trainings }) => {
    return (
        <div id='training' className='training'>
            <div className='d-flex col-sm-12 col-md-10 justify-content-between align-items-center row'>
                <div className='training-about col-sm-12 col-md-12'>
                    <p>
                        Intrace memiliki keunggulan dalam mengkurasi sertifikasi yang memiliki prospek jangka panjang untuk anda.
                        <br/><br/>
                        Untuk itu, kami telah bekerjasama dengan beberapa expert, trainer, perusahaan lain dan pemerintah.
                    </p>
                </div>
                {
                    trainings.map( (obj) => 
                        <div key={obj._id} className='training-detail d-flex flex-column col-sm-6 col-md-2 px-0'>
                            <div>
                                <img className='training-detail-image' src={process.env.PUBLIC_URL + `/img/thumbnail/thumbnail-iso-9001.png`} alt="ISO 9001:2015"/>
                            </div>
                            <div className='pt-2 pb-3 px-2 d-flex flex-column'>
                                <span className='card-title m-2'>{obj.name}</span>
                                <span className='card-subtitle ml-2'>{obj.instructor}</span>
                                <div className='d-flex row justify-content-between align-items-center mx-2 mt-2'>
                                    {/* <span className='actual-price'>Rp2.000.000</span> */}
                                    <span className='price'>Rp{obj.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                                </div>
                                <Link to={'/trainings/' + obj._id} >
                                <button className='btn btn-primary mt-2'>Check</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

const mapStateToProps = ({ trainings }) => ({
    trainings: trainings.trainings
});

export default connect(
    mapStateToProps
)(TrainingSection)