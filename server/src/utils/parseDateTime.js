
const parseDateTime = (dateTime) => {

    const date = new Date(dateTime.startDate).toLocaleTimeString("en-US", "JST")
    console.log(dateTime);
    const split = {
        sDate: dateTime.startDate.split("-"),
        sTime: dateTime.startTime.split(":"),
        eDate: dateTime.endDate.split("-"),
        eTime: dateTime.endTime.split(":"),
      };
    const start =  new Date(
        split.sDate[0],
        split.sDate[1] -1,
        split.sDate[2],
        split.sTime[0],
        split.sTime[1] 
    )
    const end =  new Date(
        split.eDate[0],
        split.eDate[1] - 1,
        split.eDate[2],
        split.eTime[0],
        split.eTime[1]
    )
    return {start, end}
}

module.exports = {parseDateTime}