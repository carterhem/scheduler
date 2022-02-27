function getAppointmentsForDay(state, day) {
  let dayAppointments = [];
  const foundDay = state.days.find((element) => element.name === day);
  // console.log("day", day)
  // console.log("state", state)
  // console.log("foundDay", foundDay)

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
  let dayInterviewers = [];
  const foundDay = state.days.find((element) => element.name === day);
  // console.log("day", day)
  // console.log("state", state)
  // console.log("foundDay", foundDay)

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
  if (!interview) {
    return null;
  } else {
    return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer],
    };
  }

  // console.log("state.appointments", state.appointments)

  // console.log("interview", interview)
  // console.log("foundInterview", foundInterview)
}

export { getAppointmentsForDay, getInterviewersForDay, getInterview };
