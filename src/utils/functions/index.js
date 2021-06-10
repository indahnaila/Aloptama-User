export const generateFullDate = () =>{
    const dayMap = new Map([
      [1, "Senin"],
      [2, "Selasa"],
      [3, "Rabu"],
      [4, "Kamis"],
      [5, "Jumat"],
      [6, "Sabtu"],
      [7, "Minggu"],
    ])
    const date = new Date();
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const currentDay = dayMap.get(date.getDay());
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();
    return `${currentDay}, ${currentDate}/${currentMonth}/${currentYear}, ${currentHour}:${currentMinute}`
  }