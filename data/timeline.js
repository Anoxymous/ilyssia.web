const events = parseTimeline(timelinedata, []);
const whoLabels = parseWhoData(timeline_whodata);
buildFilters(events, whoLabels);
build(events);

// ------------------------------------------------------------
// PARSER
// ------------------------------------------------------------
function parseTime(str) {
  const [h, m] = str.trim().split(":").map(Number);
  return h * 60 + m;
}

function formatTime(mins) {
  
  const dropdown = document.getElementById("time-format-picker");
  const h = String(Math.floor(mins / 60)).padStart(2, "0");
  const m = String(mins % 60).padStart(2, "0");

  if( dropdown.value === "12H")
  {
    return `${h % 12 || 12 }:${m} ${ h < 12 ? "AM" : "PM"}`;
  }
  else
  {
    return `${h}:${m}`;
  }
}

function parseTimeline(text, whoCodes) {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.startsWith("|"));
  const events = [];

  for (const line of lines) {
    if (line.includes("Start | End")) continue;
    if (line.startsWith("|---")) continue;

    const parts = line.split("|").map(p => p.trim());
    if (parts.length < 7) continue;

    const start = parts[1];
    const end = parts[2];
    const category = parts[3] || "Uncategorized";
    const who = parts[4] || "";
    const title = parts[5];
    const notes = parts[6];

    if (!start || !end || !title) continue;

    const tags = who.split(",").map(x => x.trim());

    if((whoCodes.length === 0) || ( tags.some(t => whoCodes.includes(t)) ) )
    {
      events.push({
        start: parseTime(start),
        end: parseTime(end),
        category,
        who,
        title,
        notes
      });
    }
  }

  return events;
}

function parseWhoData(text) {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.startsWith("|"));
  const map = {};

  for (const line of lines) {
    if (line.includes("Code | Label")) continue;
    if (line.startsWith("|---")) continue;

    const parts = line.split("|").map(p => p.trim());
    if (parts.length < 3) continue;

    const code = parts[1];
    const label = parts[2];

    if (code && label) {
      map[code] = label;
    }
  }

  return map;
}

// ------------------------------------------------------------
// BUILD TIMELINE TABLE WITH MERGED CELLS
// ------------------------------------------------------------
function build(events) {
  const table = document.getElementById("timeline");
  table.innerHTML = "";

  const minTime = Math.min(...events.map(e => e.start));
  const maxTime = Math.max(...events.map(e => e.end));

  const startTime = Math.floor(minTime / 5) * 5;
  const endTime = Math.ceil(maxTime / 5) * 5;

  const times = [];
  for (let t = startTime; t < endTime; t += 5) times.push(t);

  const categories = [...new Set(events.map(e => e.category))];

  const palette = [ "#cfe0ff", "#ffd6c2", "#ffe8a3", "#d9f2d9", "#f3d9ff", "#ffccd7", "#c8f0ff", "#e8e0ff" ];
  const catColor = {};
  categories.forEach((c, i) => catColor[c] = palette[i % palette.length]);

  // HEADER
  const header = document.createElement("tr");
  const thTime = document.createElement("th");
  thTime.textContent = "Time";
  thTime.className = "category-header";
  header.appendChild(thTime);
//
  categories.forEach(cat => {
    const th = document.createElement("th");
    th.textContent = cat;
    th.className = "category-header";
    header.appendChild(th);
  });
//
  table.appendChild(header);

// Build a grid of merged cells
  const activeCells = {}; // category → array of {event, startRow, rowspan}
  var noTimeLabs = true;
  
  times.forEach((t, rowIndex) => {
    const tr = document.createElement("tr");

    // Time label every 15 minutes
    if (t % 15 === 0)
    {
      noTimeLabs = false;
      const tdTime = document.createElement("td");
      tdTime.className = "time-cell";
      tdTime.textContent = formatTime(t);
      tdTime.rowSpan = 3;
      tr.appendChild(tdTime);
    }
    else if(noTimeLabs)
    {
      const tdTime = document.createElement("td");
      tdTime.className = "time-cell";
      tdTime.textContent = "";
      tdTime.rowSpan = 1;
      tr.appendChild(tdTime);
    }
    

    categories.forEach(cat => {
      
      // Clear finished events
      if (activeCells[cat] && activeCells[cat].event.end < t) {
        activeCells[cat] = null;
      }

      const ev = events.find(e => e.category === cat && e.start <= t && e.end > t);
      
      if (ev) {

      // If event already started earlier, skip cell (rowspan handles it)
        if (activeCells[cat] && activeCells[cat].event === ev) {
            // Do Nothing.
        }
        else
        {
          activeCells[cat] = { event: ev };
          
          // Start new merged cell
          const td = document.createElement("td");
          td.className = "event-slot";
          td.style.background = catColor[cat];
        
          td.textContent = ev.title;
          
          var whoText = ""
          if (ev.who)
          {
            const whoList = ev.who.split(",").map(code => whoLabels[code] || code);
            whoText = whoList.join(", ");
          }

          // Calculate rowspan
          const duration = ev.end - ev.start;
          const rowspan = duration / 5;
          td.rowSpan = rowspan;
          td.addEventListener("click", () => {
            setSelectedItem(formatTime(ev.start), formatTime(ev.end) + " (" + (ev.end - ev.start) + "m)", ev.category, ev.title, whoText, (ev.notes || "No notes."));
          });
          tr.appendChild(td);
        }
      } else {
          const td = document.createElement("td");
          tr.appendChild(td);
        }
    });

    table.appendChild(tr);
  });
  
  setSelectedItem("", "", "-","-","-","-","-")
}

function setSelectedItem(txtStart, txtEnd, txtCat, txtTitle, txtWho, txtNotes )
{
  document.getElementById("detail-time").textContent = txtStart + " – " + txtEnd;
  document.getElementById("detail-category").textContent = txtCat;
  document.getElementById("detail-title").textContent = txtTitle;
  document.getElementById("detail-who").textContent = txtWho;
  document.getElementById("detail-notes").innerHTML = txtNotes;
}

// ------------------------------------------------------------
// BUILD FILTERS BAR
// ------------------------------------------------------------

function buildFilters(events, whoLabels) {
  const filterDiv = document.getElementById("filters");
  filterDiv.innerHTML = "";
  
  const dropdown = document.createElement('select');
  dropdown.id = "time-format-picker";
  const opt12 = document.createElement('option');
  opt12.value = "12H";
  opt12.textContent = "12 Hr";
  dropdown.appendChild(opt12);
  const opt24 = document.createElement('option');
  opt24.value = "24H";
  opt24.textContent = "24 Hr";
  dropdown.appendChild(opt24);
  dropdown.addEventListener('change', (event) => { applyFilters(events); });
  filterDiv.appendChild(dropdown);
  
  const label = document.createElement("strong");
  label.innerHTML = " Filter by Who: ";
  filterDiv.appendChild(label);
  
  const allWho = new Set();

  events.forEach(e => {
    if (!e.who) return;
    e.who.split(",").forEach(w => allWho.add(w.trim()));
  });

  const whoList = Array.from(allWho);

  whoList.forEach(code => {
    const label = whoLabels[code] || code;

    const btn = document.createElement("button");
    btn.textContent = label;
    btn.dataset.code = code;   // store original code
    btn.style.marginRight = "6px";
    btn.style.padding = "4px 8px";
    btn.style.border = "1px solid #888";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.dataset.active = "false";

    btn.addEventListener("click", () => {
      btn.dataset.active = btn.dataset.active === "true" ? "false" : "true";
      btn.style.background = btn.dataset.active === "true" ? "#d0c4aa" : "";
      applyFilters(events);
    });

    filterDiv.appendChild(btn);
  });
}

function applyFilters(events) {
  const buttons = document.querySelectorAll("#filters button");
  const activeCodes = Array.from(buttons)
    .filter(b => b.dataset.active === "true")
    .map(b => b.dataset.code);

  const filtered = parseTimeline(timelinedata, activeCodes);
  build(filtered);
}
