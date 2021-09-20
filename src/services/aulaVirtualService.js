import dbMock from '../database/db.json';

export const getStudentInfo = (studentId) => {
    // student info
    var studentInfo = dbMock.students.find(function (element) {
        return element.id == studentId;
    });
    var currentCourseId = studentInfo.current_course;
    // console.log('studentId', studentId);
    // console.log('studentInfo:', studentInfo);
    // console.log('currentCourseId', currentCourseId);

    // get progress by student_id and course_id
    var activeStudentProgress = dbMock.studentsProgress.find(function (element) {
        return element.student_id == studentId
            && element.course_id == currentCourseId;
    });
    //console.log('activeStudentProgress', activeStudentProgress);

    // active (current) class
    var activeClassId = activeStudentProgress.course_progress.current_active_class;
    var activeCourse = dbMock.courses.find(function (element) {
        return element.id == currentCourseId;
    });
    var activeClass = activeCourse.classes.find(function (element) {
        return element.id == activeClassId;
    });
    //console.log('activeClass', activeClass);

    // active classes progress by current course
    var activeClassesProgress = activeStudentProgress.classes_progress;
    //console.log('activeClass', activeClassId);
    //console.log('activeClassesProgress', activeClassesProgress);
    var activeCourseProgress = activeStudentProgress.course_progress;

    return {
        activeClass,
        activeClassesProgress,
        studentInfo,
        activeCourseProgress
    };
}

export const getClassName = (courseId, classId) => {
    // returns class name. className = str
    var theCourse = dbMock.courses.find(function (element) {
        return element.id == courseId;
    });
    var theClass = theCourse.classes.find(function (element) {
        return element.id == classId;
    });
    return theClass.name;
}

export const getStudentCourse = (courseId, studentId) => {
    // returns course and class info
    //      classes = []
    //      current_class_id = int

}

export const setStudentProgress = (courseId, studentId, classId) => {
    // sets and checks course and class progress
    //      courseId = int
    //      studentID = int
    //      classID = int

    var studentProgress = dbMock.studentsProgress.find(function (element) {
        return element.student_id == studentId
            && element.course_id == courseId;
    });
    var currentClass = studentProgress.classes_progress.find(function (element) {
        return element.class_id == classId;
    });
    currentClass.completed = true;

    if (!studentProgress.course_progress.course_completed) {
        studentProgress.course_progress.count_classes_completed += 1;
        if (studentProgress.course_progress.current_active_class < studentProgress.course_progress.total_classes) {
            studentProgress.course_progress.current_active_class += 1;
        }
        if (studentProgress.course_progress.count_classes_completed == studentProgress.course_progress.total_classes) {
            studentProgress.course_progress.course_completed = true;
        }
    }
    // console.log('count_classes_completed', studentProgress.course_progress.count_classes_completed);
    // console.log('total_classes', studentProgress.course_progress.total_classes);
    // console.log('course_completed', studentProgress.course_progress.course_completed);
}

export const isValidUser = (userName, passCode) => {
    // checks/ authenticates user with credentials
    var userFound = dbMock.students.find(function (element) {
        return element.username == userName
            && element.pass == passCode;
    });
    return {
        valid: userFound ? true : false,
        id: userFound ? userFound.id : null,
    }
}
