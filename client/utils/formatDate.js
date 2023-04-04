
// This function takes a date string and returns a formatted date string
// e.g. '2023-03-25T14:22:04.594Z' => '25th Mar 2023'
const  formattedDate = (dateStr) => {
 const date = new Date(dateStr)
 const day = date.getDate()
 let suffix = 'th'
 if (day === 1 || day === 21 || day === 31) {
   suffix = 'st'
 } else if (day === 2 || day === 22) {
   suffix = 'nd'
 } else if (day === 3 || day === 23) {
   suffix = 'rd'
 }
 const options = { year: 'numeric', month: 'short', day: 'numeric' }
 const formattedDate = date.toLocaleString('en-US', options)
 return formattedDate
   .replace(/\b\d{1,2}\b/g, (match) => match + suffix)
   .replace(',', '')
}

export default formattedDate


