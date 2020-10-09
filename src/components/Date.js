import moment from 'moment'



moment.locale('fr');
const date = moment().format('dddd Do MMMM, h:mm:ss a')

console.log(date)



export default date