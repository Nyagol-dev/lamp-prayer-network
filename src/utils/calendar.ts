export const generateICS = () => {
  // Set event details
  const event = {
    title: "Sprinkles of His Glory - Monthly Thanksgiving Service",
    description: "Join us as we dedicate the new month to God in thanksgiving and praise.",
    location: "KICC Shimba Hills, Nairobi, Kenya",
    start: [2025, 7, 3, 15, 0], // Year, Month (0-11), Day, Hour, Minute (3:00 PM)
    duration: { hours: 3 }, // 3 hours duration
    recurrence: {
      freq: 'MONTHLY',
      bymonthday: [1, 2, 3, 4, 5, 6, 7],
      byday: ['SU'],
      interval: 1
    },
    alarm: {
      action: 'DISPLAY',
      description: 'Reminder: Sprinkles of His Glory is tomorrow!',
      trigger: { days: 1, hours: 0, minutes: 0, before: true } // 1 day before
    }
  };

  // Generate the .ics file content
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//LAMP Prayer Network//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART;TZID=Africa/Nairobi:${new Date(2025, 7, 3, 15, 0).toISOString().replace(/[-:]/g, '').split('.')[0]}`,
    `DTEND;TZID=Africa/Nairobi:${new Date(2025, 7, 3, 18, 0).toISOString().replace(/[-:]/g, '').split('.')[0]}`,
    `RRULE:FREQ=MONTHLY;BYDAY=1SU`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${event.alarm.description}`,
    'TRIGGER:-P1D', // 1 day before (P1D = Period 1 Day)
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\n');

  return icsContent;
};

export const downloadICS = () => {
  const icsContent = generateICS();
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sprinkles-of-his-glory.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
