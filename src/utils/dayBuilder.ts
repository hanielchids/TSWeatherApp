const dayBuilder = (d: Date, offset: number): string => {
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
  
    let day = days[(d.getDay() + offset) % 7];
    return `${day}`;
  };
  
  export default dayBuilder;