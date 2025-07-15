const generateICS = () => {
  const event = {
    title: "Sprinkles of His Glory - Monthly Thanksgiving Service",
    description: "Join us as we dedicate the new month to God in thanksgiving and praise.\\n\\nLocation: Kenya International Convention Centre\\nAddress: KICC Shimba Hills, Nairobi, Kenya\\nMap: https://www.google.com/maps/place/Kenya+International+Convention+Centre/@-1.2884095,36.8218249,17z/data=!3m1!4b1!4m6!3m5!1s0x182f10d5e9f5f5b5:0x1f0a8657e9e1f8f8!8m2!3d-1.2884095!4d36.8218249!16s%2Fg%2F1trv7p4f?entry=ttu",
    location: "Kenya International Convention Centre, KICC Shimba Hills, Nairobi, Kenya",
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

  // Helper function to format date for ICS (without timezone conversion)
  const formatICSDate = (year, month, day, hour, minute) => {
    // Format directly without timezone conversion
    const pad = (num) => num.toString().padStart(2, '0');
    return `${year}${pad(month + 1)}${pad(day)}T${pad(hour)}${pad(minute)}00`;
  };

  // Generate unique ID for the event
  const uid = `sprinkles-${Date.now()}@lampprayernetwork.org`;

  // Generate the .ics file content
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//LAMP Prayer Network//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE',
    'TZID:Africa/Nairobi',
    'BEGIN:STANDARD',
    'DTSTART:20070101T000000',
    'TZOFFSETFROM:+0300',
    'TZOFFSETTO:+0300',
    'TZNAME:EAT',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART;TZID=Africa/Nairobi:${formatICSDate(event.start[0], event.start[1], event.start[2], event.start[3], event.start[4])}`,
    `DTEND;TZID=Africa/Nairobi:${formatICSDate(event.start[0], event.start[1], event.start[2], event.start[3] + event.duration.hours, event.start[4])}`,
    'RRULE:FREQ=MONTHLY;BYDAY=1SU', // First Sunday of each month
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'TRANSP:OPAQUE',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${event.alarm.description}`,
    'TRIGGER:-P1D', // 1 day before (P1D = Period 1 Day)
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n'); // ICS files should use CRLF line endings

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
  
  // Clean up the URL object
  URL.revokeObjectURL(url);
};

// Example usage:
//downloadICS();