import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneTraining } from '../../../store/actions';

const Content = ({ trainings }) => {
    
    let { trainingId } = useParams();

    useEffect(() => {
		fetchOneTraining(trainingId)
    },[fetchOneTraining, trainingId])
    

    return (
        <div key={trainingId} className='d-flex justify-content-center my-4 py-4'>
            <div className="d-flex col-sm-12 col-md-10">
                <div className="col-sm-9 px-4">
                    <h2 className='mt-4'>About Training</h2>
                    <p>{ JSON.stringify(trainings) }</p>
                    <h2 className='mt-4'>Designed For</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident dolores deserunt incidunt quos ipsam quasi rerum. Molestias maxime, voluptatem nisi, nulla reiciendis debitis veritatis fuga sit rerum consequuntur nemo voluptas.</p>
                    <h2 className='mt-4'>You Will Learn to</h2>
                    <ul>
                        <li className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio provident alias quia laudantium ea sapiente excepturi illum totam debitis quidem quis quibusdam, deleniti ipsa harum consequatur eos. In, vitae.</li>
                        <li className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio provident alias quia laudantium ea sapiente excepturi illum totam debitis quidem quis quibusdam, deleniti ipsa harum consequatur eos. In, vitae.</li>
                        <li className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio provident alias quia laudantium ea sapiente excepturi illum totam debitis quidem quis quibusdam, deleniti ipsa harum consequatur eos. In, vitae.</li>
                        <li className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio provident alias quia laudantium ea sapiente excepturi illum totam debitis quidem quis quibusdam, deleniti ipsa harum consequatur eos. In, vitae.</li>
                        <li className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio provident alias quia laudantium ea sapiente excepturi illum totam debitis quidem quis quibusdam, deleniti ipsa harum consequatur eos. In, vitae.</li>
                    </ul>
                    <h2 className='mt-4'>Course Content</h2>
                    <div className='training-table mt-2'>
                        <div className='training-table-title pl-3'>
                            <div>
                                Day 1
                            </div>
                        </div>
                        {
                            [1,2,3,4].map((row, index) => {
                            return (
                                <div className='training-table-content pl-3' style={{ backgroundColor: index%2 === 0 ? 'rgba(0, 51, 153, 0.1)' : '#FFFFFF' }}>
                                    <div className='mr-3'>
                                        Module 1
                                    </div>
                                    <div className='mr-3'>
                                        18.00 - 19.45
                                    </div>
                                    <div className='col'>
                                        Understanding Dropped Objects
                                    </div>
                                </div>
                            )
                            })
                        }
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className='card-price'>
                        <h3 className='mb-2'>Investment</h3>
                        <div className='pb-1'>
                            <span>Public: Rp5.000.000/pax</span><br/>
                        </div>
                        <div className='pb-3'>
                            <span>In-House: To Be Discussed</span>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button className="btn col">Ask Us</button>
                            <button className="btn ml-2 btn-primary col">Register</button>
                        </div>
                    </div>
                    <div className='d-flex align-items-center my-4'>
                        <img src={process.env.PUBLIC_URL + '/img/logo/logo-intrace-circle.png'} alt="host-logo" width='72px' height='72px'/>
                        <div className='ml-3'>Hosted by <b>Intrace</b></div>
                    </div>
                    <div className='training-field mb-4'>
                        <img className='mx-3' src={process.env.PUBLIC_URL + '/img/icon/icon-person.png'} alt="icon" width='32px' height='32px'/>
                        <div>
                            <h4>Instructor</h4>
                            <span>Drops Inspector</span>
                        </div>
                    </div>
                    <div className='training-field mb-4'>
                        <img className='mx-3' src={process.env.PUBLIC_URL + '/img/icon/icon-calendar.png'} alt="icon" width='32px' height='32px'/>
                        <div>
                            <h4>Training Schedule</h4>
                            <span>2 Days Course incl. Assessment</span>
                        </div>
                    </div>  
                    <div className='training-field mb-4'>
                        <img className='mx-3' src={process.env.PUBLIC_URL + '/img/icon/icon-book.png'} alt="icon" width='32px' height='32px'/>
                        <div>
                            <h4>Certificate Name</h4>
                            <span>Certified by Drops Asia</span>
                        </div>
                    </div>
                    <div className='training-field mb-4'>
                        <img className='mx-3' src={process.env.PUBLIC_URL + '/img/icon/icon-notepad.png'} alt="icon" width='32px' height='32px'/>
                        <div>
                            <h4>Discipline</h4>
                            <span>General</span>
                        </div>
                    </div>
                    <div className='training-field mb-4'>
                        <img className='mx-3' src={process.env.PUBLIC_URL + '/img/icon/icon-stats.png'} alt="icon" width='32px' height='32px'/>
                        <div>
                            <h4>Level</h4>
                            <span>Any Level</span>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({ trainings }) => ({
    trainings: trainings.trainings
});

const mapDispatchToProps = dispatch => ({
    fetchOneTraining: id => dispatch(fetchOneTraining(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);