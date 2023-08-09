import dayjs from "dayjs";

export function getMonth(month: number = dayjs().month()): dayjs.Dayjs[][] {
  month = Math.floor(month);
  const year: number = dayjs().year();
  const firstDayOfTheMonth: number = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount: number = 0 - firstDayOfTheMonth;
  const daysMatrix: dayjs.Dayjs[][] = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}

export function getStartTime(
  selectedEvent: { startTime: string } | null = null
): string {
  const currentTime: Date = new Date();
  const minutes: number = currentTime.getMinutes();
  let startHour: number;
  let startMinutes: string;

  if (minutes >= 0 && minutes <= 29) {
    startHour = currentTime.getHours();
    startMinutes = "30";
  } else {
    startHour = currentTime.getHours() + 1;
    startMinutes = "00";
  }

  const formattedStartTime: string = `${startHour
    .toString()
    .padStart(2, "0")}:${startMinutes}`;
  return selectedEvent ? selectedEvent.startTime : formattedStartTime;
}

export function getEndTime(
  startTime: string,
  durationInHours: number = 1
): string {
  const timeParts: string[] = startTime.split(":");
  const endHour: number = parseInt(timeParts[0], 10) + durationInHours;
  const endMinutes: string = timeParts[1];
  const formattedEndTime: string = `${endHour
    .toString()
    .padStart(2, "0")}:${endMinutes}`;
  return formattedEndTime;
}
