export const getMonthName = (month: number, shortName: boolean = true) => {
    switch (month) {
      case 0:
        return shortName ? 'Jan' : 'January';
      case 1:
        return shortName ? 'Feb' : 'February';
      case 2:
        return shortName ? 'Mar' : 'March';
      case 3:
        return shortName ? 'Apr' : 'April';
      case 4:
        return shortName ? 'May' : 'May';
      case 5:
        return shortName ? 'June' : 'June';
      case 6:
        return shortName ? 'July' : 'July';
      case 7:
        return shortName ? 'Aug' : 'August';
      case 8:
        return shortName ? 'Sep' : 'September';
      case 9:
        return shortName ? 'Oct' : 'October';
      case 10:
        return shortName ? 'Nov' : 'November';
      case 11:
        return shortName ? 'Dec' : 'December';
  
      default:
        return '';
    }
  };

export const formatDate = (
    date: Date | string,
  ) => {
    if (date) {
      const dt = new Date(date);
      const monthValue = dt.getMonth();
      const monthName = getMonthName(monthValue, false);
      const dateValue = ('0' + dt.getDate()).slice(-2);
      const yearValue = dt.getFullYear();

          return `${dateValue} ${monthName.substring(0, 3)}’${yearValue
            .toString()
            .substring(2)}`;
    }
    return date;
  };

  // returns displayable time in AM or PM form
export function getFormattedTime(dateString: string, appendZeroInHours = true) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const finalMinutes = minutes < 10 ? '0' + minutes : minutes;
    let hoursFinal = hours;
    let timeAmOrPm = 'AM';
    if (hoursFinal >= 12) {
      hoursFinal = hoursFinal - 12;
      timeAmOrPm = 'PM';
    }
    if (hoursFinal === 0) {
      hoursFinal = 12;
    }
    let hoursFinals;
    if (appendZeroInHours) {
      hoursFinals = hoursFinal < 10 ? '0' + hoursFinal : hoursFinal;
    } else {
      hoursFinals = hoursFinal;
    }
    return `${hoursFinals}:${finalMinutes} ${timeAmOrPm}`;
  }