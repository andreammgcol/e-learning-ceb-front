import React from 'react';
import { getClassName } from "../services/aulaVirtualService";


const ProgressContent = (props) => {
    const {
        progressContent,
        studentInfo,
        currentCourseId,
        progressGralContent,
        handleTakeExam
    } = props;

    var myProgress = progressGralContent 
            ? (progressGralContent.count_classes_completed / progressGralContent.total_classes) * 100
            : null;
    // console.log('studentInfo: ', studentInfo);
    // console.log('progressContent: ', progressContent);

    return (
        <aside className="rightside">
            <div className="toggle">
                <a href="#" className="burger js-menu-toggle" data-toggle="collapse" data-target="#main-navbar">
                    <span></span>
                </a>
            </div>
            <div className="side-inner">

                <div className="action-progress-wrap">
                    <div className="user-profile">
                        <div>

                            <a href="#" className="d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="0,20">
                                <div className="user-pic mr-3">
                                    <img src={studentInfo.img} alt="" className="img-fluid" />
                                </div>
                                <div className="user-name">
                                    <span>{studentInfo.name}</span>
                                </div>
                            </a>

                        </div>
                    </div>

                    { progressGralContent &&
                        <div className="action-progress-block mb-4">
                            <h5>Mi progreso</h5>
                            <div className="d-flex align-items-center">
                                <div className="progress w-100">
                                    <div className="progress-bar" role="progressbar" style={{ 'width': myProgress + '%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="ml-4">{myProgress}%</div>
                            </div>
                        </div>
                    }                    

                    <hr className="progress-hr" />

                    <div className="progress-list">

                        {progressContent && progressContent.map((p, index) =>

                            <div className="form-check" key={index}>
                                <input className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id={"defaultCheck" + p.class_id}
                                    disabled={!p.completed}
                                    checked={p.completed}
                                />
                                <label className="form-check-label"
                                    htmlFor={"defaultCheck" + p.class_id}>
                                    {getClassName(currentCourseId, p.class_id)}
                                </label>
                            </div>

                        )}

                    </div>

                    {
                        progressGralContent && progressGralContent.course_completed &&
                        // <div className="text-center text-md-left">
                        //     <a className="btn btn-primary" >Hacer examen</a>
                        // </div>
                        <button onClick={handleTakeExam} className="text-center test-button">Examen <i className="fa fa-arrow-circle-right"></i></button>
                    }


                </div>

            </div>

        </aside>



    );
};

export default ProgressContent;
