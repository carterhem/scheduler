function getAppointmentsForDay(state, day) {
  //written to find the appointments for the selected day on the left hand side menu
  let dayAppointments = [];
  const foundDay = state.days.find((element) => element.name === day);

  if (foundDay === undefined) {
    return dayAppointments;
  } else {
    dayAppointments = foundDay.appointments.map(
      (element) => state.appointments[element]
    );
  }

  return dayAppointments;
}

function getInterviewersForDay(state, day) {
  //identifies the interviewers for the day selected on left hand side menu
  let dayInterviewers = [];
  const foundDay = state.days.find((element) => element.name === day);


  if (foundDay === undefined) {
    return dayInterviewers;
  } else {
    dayInterviewers = foundDay.interviewers.map(
      (element) => state.interviewers[element]
    );
  }

  return dayInterviewers;
}

function getInterview(state, interview) {
  //identifies the interviews for the day selected on left hand side menu
  if (!interview) {
    return null;
  } else {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    };
  }

}

export { getAppointmentsForDay, getInterviewersForDay, getInterview };
