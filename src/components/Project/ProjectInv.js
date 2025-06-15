import React from 'react';

const ProjectInv = () => {
    return (
        <div className="container my-4">
            <div className='d-flex font-bold align-start'>
                <h3 className="font-weight-bold d-flex align-start">Project Invitations</h3>
            </div>
            <div className="card shadow-sm p-3 ">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0 font-weight-bold">Full Stack Website</h5>
                    {/* <a href="#" className="btn  btn-sm">Accept</a> */}
                </div>

                <p className="text-mute d-flex align-start"  style={{ textAlign: 'justify' }}>
                    Value of elements when printing with our print display utility classes. Includes support.
                </p>

                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-success mr-2">Accept</button>
                    <button className="btn btn-danger">Decline</button>
                </div>
            </div>
            <div className="card shadow-sm p-3 mt-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0 font-weight-bold">Full Stack Website</h5>
                    {/* <a href="#" className="btn btn-outline-primary btn-sm">Accept</a> */}
                </div>

                <p className="text-muted"  style={{ textAlign: 'justify' }}>
                    Value of elements when printing with our print display utility classes. Includes support.
                </p>

                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-success mr-2">Accept</button>
                    <button className="btn btn-danger">Decline</button>
                </div>
            </div>
            <div className="card shadow-sm p-3 mt-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="mb-0 font-weight-bold">Full Stack Website</h5>
                    {/* <a href="#" className="btn btn-outline-primary btn-sm">Accept</a> */}
                </div>

                <p className="text-muted"  style={{ textAlign: 'justify' }}>
                    Value of elements when printing with our print display utility classes. Includes support.
                </p>

                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-success mr-2">Accept</button>
                    <button className="btn btn-danger">Decline</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectInv;
