export const courseNumberColor = (courseNum: number): string => {
    if (courseNum < 200) {
      return "#e09b41";
    } else if (courseNum < 300) {
      return "#56db5e"
    } else if (courseNum < 400) {
      return "#56d7db"
    } else if (courseNum < 500) {
      return "#566cdb"
    }
  
    return "#414f41";
}