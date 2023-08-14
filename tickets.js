
const guestsTable = document.getElementById("guestsTable");
const durationSelect = document.getElementById("duration");
const summaryTable = document.getElementById("summaryTable");
const continueBtn = document.getElementById("continueBtn");
const date = document.getElementById("reservation-date");

// Function to update the summary table based on user inputs
function updateSummaryTable() {
  
  const selectedDuration = Array.from(durationSelect.selectedOptions);
  const selectedValues = selectedDuration.map((option) => option.value);
  const selectedDate = date?.value;

  // ticket quantities from localstorage
  const peakHourList = [
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00",
  ];

  const peakHours = selectedDuration.filter((option) =>
    peakHourList.includes(option.value)
  );
  const normalHours = selectedDuration.filter(
    (option) => !peakHourList.includes(option.value)
  );
  var numOfPeakHours, numOfNormalHours;
  Boolean(Object.keys(peakHours))
    ? (numOfPeakHours = peakHours.length)
    : (numOfPeakHours = 0);
  Boolean(Object.keys(normalHours))
    ? (numOfNormalHours = normalHours.length)
    : (numOfNormalHours = 0);

    let ticketQuantities = {
      "SL Adult": localStorage.getItem("SL Adult") || "0",
      "SL Child": localStorage.getItem("SL Child") || "0",
      "Foreigner Adult": localStorage.getItem("Foreigner Adult") || "0",
      "Foreigner Child": localStorage.getItem("Foreigner Child") || "0",
      "Infant": localStorage.getItem("Infant") || "0",
    };

  // Calculate charges for each person
  let charges = {
    "SL Adult":
      ticketQuantities["SL Adult"] *
      (numOfPeakHours * 6 + numOfNormalHours * 4),
    "SL Child":
      ticketQuantities["SL Child"] *
      (numOfPeakHours * 3 + numOfNormalHours * 2),
    "Foreigner Adult":
      ticketQuantities["Foreigner Adult"] *
      (numOfPeakHours * 13 + numOfNormalHours * 10),
    "Foreigner Child":
      ticketQuantities["Foreigner Child"] *
      (numOfPeakHours * 8 + numOfNormalHours * 5),
    Infant: 0, 
  };

  localStorage.setItem("charges", JSON.stringify(charges.value));
  localStorage.ticketQuantities = JSON.stringify(ticketQuantities);
  
  // Calculate total payable amount
  let totalPayable = 0;
  for (const ticket in charges) {
    totalPayable += charges[ticket];
  }

  var hour1, hour2, hourStart, hourEnd;

  Boolean(Object.keys(selectedValues).length)
    ? (hour1 = selectedValues[0])
    : (hour1 = 0);
  Boolean(Object.keys(selectedValues).length)
    ? (hourStart = hour1.slice(0, 5))
    : (hourStart = localStorage.getItem("hourStart"));
  Boolean(Object.keys(selectedValues).length)
    ? (hour2 = selectedValues[selectedValues.length - 1])
    : (hour2 = 0);
  Boolean(Object.keys(selectedValues).length)
    ? (hourEnd = hour2.slice(6))
    : (hourEnd = "12.00");

  localStorage.setItem("hourStart", hourStart);
  localStorage.setItem("hourEnd", hourEnd);

  // Update the summary table
  summaryTable.innerHTML = `
  <tr>
    <td>Date</td>
    <td>${
      selectedDate ? selectedDate : localStorage.getItem("selectedDate")
    }</td>
  </tr>
  <tr>
    <td> Time</td>
    <td  id="times">${hourStart + "-" + hourEnd}</td>
  </tr>
  <tr>
    <td>Duration</td>
    <td id="durations">
    ${
      selectedValues.length +
      " hours " +
      numOfNormalHours +
      " normal " +
      numOfPeakHours +
      " peak"
    }</td>
  </tr>
  <tr>
    <td>Tickets</td>
    <td>Charges</td>
  </tr>
  ${Object.keys(charges)
    .map(
      (ticket) =>`
      <tr>
        <td>
            ${ticket}
        </td>
      <td>
            $${charges[ticket]}
      </td>
      </tr>`
    )
    .join("")}
    
    <td>Total Payable</td>
    <td id="totals"> $${totalPayable}</td>
  </tr>
  
`;
localStorage.setItem("selectedValue", selectedValues.length);
localStorage.setItem("numOfNormalHours",numOfNormalHours);
localStorage.setItem("numOfPeakHours", numOfPeakHours);
localStorage.setItem("totalPayable", totalPayable);
}



durationSelect.addEventListener("click", function (event) {
  event.preventDefault();
});

// Add an event listener to the select element to handle multiple selections using the Shift key
let lastSelectedIndex = null;

// Function to handle changes in the duration selection
durationSelect.addEventListener("change", (event) => {
  updateSummaryTable();
});

date.addEventListener("change", () => {
  localStorage.setItem("selectedDate", date?.value);
  updateSummaryTable();
});


guestsTable.addEventListener("change", (event) => {
  const ticketType = event.target.dataset.ticketType;
  const ticketQuantity = event.target.value;
  localStorage.setItem(ticketType, ticketQuantity);
  updateSummaryTable();
});


function onPageLoad() {
  
  const selectedDate = localStorage.getItem("selectedDate");
  if (selectedDate) {
  } else 
  {
    localStorage.setItem("selectedDate", "<current_date>");
  }

  
  guestsTable.innerHTML = `
    <tr>
      <td>SL Adult</td>
      <td><input type="number" data-ticket-type="SL Adult" value="${
        localStorage.getItem("SL Adult") || 0
      }"></td>
    </tr>
    <tr>
      <td>SL Child</td>
      <td><input type="number" data-ticket-type="SL Child" value="${
        localStorage.getItem("SL Child") || 0
      }"></td>
    </tr>
    <tr>
      <td>Foreigner Adult</td>
      <td><input type="number" data-ticket-type="Foreigner Adult" value="${
        localStorage.getItem("Foreigner Adult") || 0
      }"></td>
    </tr>
    <tr>
      <td>Foreigner Child</td>
      <td><input type="number" data-ticket-type="Foreigner Child" value="${
        localStorage.getItem("Foreigner Child") || 0
      }"></td>
    </tr>
    <tr>
      <td>Infant</td>
      <td>Free</td>
    </tr>
  `;

 
  updateSummaryTable();
}

// Call onPageLoad function on initial page load
onPageLoad();

// Function to store the inputs in session storage
function storetableToSession() {
    const timesele = document.getElementById('times');
    const totalsele = document.getElementById('totals');
    const durationsele = document.getElementById('durations');

    const times = timesele.textContent;
    const totals = totalsele.textContent;
    const durations = durationsele.textContent;
    
    sessionStorage.setItem('time', times);
    sessionStorage.setItem('total', totals);
    sessionStorage.setItem('duration', durations);
    
  }

   const continueBtn01 = document.getElementById('continueBtn01');
   continueBtn01.addEventListener('click', storetableToSession);