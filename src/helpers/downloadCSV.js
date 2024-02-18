export const downloadCSV = (data) => {
  if (!Array.isArray(data)) {
    console.error("Data is not an array");
    return;
  }

  const rows = data.map((rowData) => {
    if (!Array.isArray(rowData) || rowData.length !== 3) {
      console.error("Invalid data format:", rowData);
      return "";
    }

    const [questionIndex, question, value] = rowData;

    const formattedRow = `"${questionIndex}","${question}","${value}"`;

    return formattedRow;
  });

  const csvContent =
    "data:text/csv;charset=utf-8," + "№,Questions,Answers\n" + rows.join("\n");

  const email = localStorage.getItem("emailValue");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${email}quiz_answers.csv`);
  document.body.appendChild(link);
  link.click();
};
