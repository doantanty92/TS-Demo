export const convertTimestampToDateTime = (timestamp: number) => {
  let datetime = new Date(timestamp)
  let hours = datetime.getHours()
  let minutes = datetime.getMinutes()
  let seconds = datetime.getSeconds()
  let day = datetime.getDate()
  let month = datetime.getMonth() + 1
  let year = datetime.getFullYear()

  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
}
