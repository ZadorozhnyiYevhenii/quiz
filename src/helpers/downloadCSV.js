export const downloadCSV = (data) => {
  if (!Array.isArray(data)) {
    console.error("Data is not an array");
    return;
  }

  if (data.some(row => !Array.isArray(row))) {
    console.error("Some items in data are not arrays");
    return;
  }

  const csvContent =
    "data:text/csv;charset=utf-8," +
    data.map((row) => row.join(",")).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "Your-quiz-answers.csv");
  document.body.appendChild(link);
  link.click();
};

