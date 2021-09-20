import React, { Component } from 'react';
import ClassContent from './ClassContent';
import ProgressContent from './ProgressContent';
import ExamContent from './ExamContent';
import CourseEndContent from './CourseEndContent';
import { getStudentInfo, setStudentProgress } from "../services/aulaVirtualService";
import { isNumeric } from '../utils';

export class Main extends Component {

    constructor(props) {
        super(props);
        const myUrl = window.location.href;
        const urlParts = myUrl.split("/");
        const lastParam = urlParts[urlParts.length-1];
        var studentIdParam = lastParam != '' && isNumeric(lastParam) ? Number.parseInt(lastParam) : 1;
        // console.log('lastParam:', '[' + lastParam + ']');
        // console.log('isNumeric:', isNumeric(lastParam));

        this.state = {
            studentId: studentIdParam,
            currentCourseId: null,
            currentClassId: null,
            redirect: false,
            isLoaded: false,
            classContent: {}, // class info (name, video, descrption, current_course, current_class)
            progressContent: [], // progress info (classes_progress_list)
            progressGralContent: {}, // progress gral (course_progress_obj)
            studentInfo: {}, // studentInfo
            windowMode: "class", // class, exam, courseEnd
        }
        this.getNextClass = this.getNextClass.bind(this);
        console.log('constructor main');
        console.log(window.location.pathname);
        console.log(window.location.href);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.getNextClass();
    }

    getNextClass = event => {
        // get student info
        // get current course and active class for the student
        // load next class info and course info
        var globalStudentInfoObj = getStudentInfo(this.state.studentId);
        console.log('globalStudentInfoObj:', globalStudentInfoObj);

        this.setState({
            currentCourseId: globalStudentInfoObj.studentInfo.current_course,
            currentClassId: globalStudentInfoObj.activeClass.id,
            classContent: globalStudentInfoObj.activeClass,
            progressContent: globalStudentInfoObj.activeClassesProgress,
            studentInfo: globalStudentInfoObj.studentInfo,
            progressGralContent: globalStudentInfoObj.activeCourseProgress,
        });

    }

    handleClassCompleted = event => {
        console.log('-----------------');
        console.log('event -> handleClassCompleted.');
        // loadNextClass
        setStudentProgress(this.state.currentCourseId, this.state.studentId, this.state.currentClassId);
        this.getNextClass();
    };

    handleTakeExam = event => {
        console.log('-----------------');
        console.log('event -> handleTakeExam.');
        // showExam
        this.setState({
            windowMode: "exam"
        });
    };

    handleFinishExam = event => {
        console.log('-----------------');
        console.log('event -> handleFinishExam.');
        // showExam
        this.setState({
            windowMode: "courseEnd"
        });
    };

    render() {
        const {
            classContent,
            progressContent,
            studentInfo,
            currentClassId,
            currentCourseId,
            progressGralContent,
            windowMode
        } = this.state;
        return (
            <>
                {windowMode == "class" &&
                    <ClassContent name={'Módulo 1'}
                        classContent={classContent}
                        handleClassCompleted={this.handleClassCompleted} />
                }
                {windowMode == "exam" &&
                    <ExamContent handleFinishExam={this.handleFinishExam} />
                }
                {windowMode == "courseEnd" &&
                    <CourseEndContent />
                }

                <ProgressContent progressContent={progressContent}
                    studentInfo={studentInfo}
                    currentCourseId={currentCourseId}
                    progressGralContent={progressGralContent}
                    handleTakeExam={this.handleTakeExam} />
            </>
        );
    }
}
