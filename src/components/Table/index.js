const createTr = (arrayTd) => {
  const trElement = document.createElement("tr");

  arrayTd.forEach((td) => {
    const tdElement = document.createElement("td");
    tdElement.textContent = td;

    trElement.appendChild(tdElement);
  });

  return trElement.outerHTML;
};

export function Table(props) {
  return `
    <table>
      <tr>
        <th>Nome</th>
        <th>Média</th>
        <th>Status</th>
      </tr>
      ${props.data.map((dataItem) => createTr(Object.values(dataItem))).join()}
    </table>
  `;
}
