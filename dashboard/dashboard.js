document.addEventListener("DOMContentLoaded", () => {
  const reports = [
    { id: "REP001", type: "Plastic", location: "Hyderabad", status: "Pending" },
    { id: "REP002", type: "Organic", location: "Delhi", status: "Resolved" },
    { id: "REP003", type: "Metal", location: "Mumbai", status: "In Progress" }
  ];

  const tableBody = document.getElementById("report-rows");
  reports.forEach(report => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${report.id}</td>
      <td>${report.type}</td>
      <td>${report.location}</td>
      <td>${report.status}</td>
      <td><button onclick="alert('Marked ${report.id} as done!')">Mark Done</button></td>
    `;
    tableBody.appendChild(row);
  });

  const summary = document.getElementById("summary-cards");
  summary.innerHTML = `
    <p><strong>Total Reports:</strong> ${reports.length}</p>
    <p><strong>Pending:</strong> ${reports.filter(r => r.status === "Pending").length}</p>
    <p><strong>Resolved:</strong> ${reports.filter(r => r.status === "Resolved").length}</p>
  `;
});
