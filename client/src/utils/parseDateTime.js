const parseDateTime = (dateTime) => {
  const split = {
    // TODO: refactor split to getMonth etc` // - Done 12/02/22
    sYear: new Date(dateTime.startDate).getFullYear(),
    sMonth: new Date(dateTime.startDate).getMonth(),
    sDay: new Date(dateTime.startDate).getDate(),
    sTime: dateTime.startTime.split(":"),
    eYear: new Date(dateTime.endDate).getFullYear(),
    eMonth: new Date(dateTime.endDate).getMonth(),
    eDay: new Date(dateTime.endDate).getDate(),
    eTime: dateTime.endTime.split(":"),
  };

  const start = new Date(
    split.sYear,
    split.sMonth,
    split.sDay,
    split.sTime[0],
    split.sTime[1]
  )
  const end = new Date(
    split.eYear,
    split.eMonth,
    split.eDay,
    split.eTime[0],
    split.eTime[1]
  )
  return { start, end };
};

export default parseDateTime;
