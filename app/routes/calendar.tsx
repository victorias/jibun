import dayjs from "dayjs";
import CalendarSets from "dayjs-plugin-calendar-sets";

export default function Calendar() {
  dayjs.extend(CalendarSets);

  const currentMonthSet = dayjs
    .calendarSets()
    .month({ month: dayjs().month() });
  console.log(currentMonthSet);
  return (
    <main className="bg-slate-50">
      <h1>Calendar</h1>
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(74, minmax(0, 1fr))",
          gridTemplateRows: "repeat(54, minmax(0, 1fr))",
        }}
      >
        {/* loop through all cells and create a square for each one */}
        {/* each square is given a height and width of 4mm (15.12px) */}
        {[...Array(74 * 54)].map((_, i) => (
          <div
            key={i}
            className={`aspect-square border border-dotted border-gray-400`}
          ></div>
        ))}
      </div>
    </main>
  );
}

// each day spans 9
// 7 days a week
// 1 border on each left-right
// one more 9 column at front
// 9 * 8 + 2= 74

// 62 rows

// each month item is 9x9
// // + 6 at the end
// +3 for the header
// // 9 * 5 + 6 + 3 = 9 * 6 = 54 rows
