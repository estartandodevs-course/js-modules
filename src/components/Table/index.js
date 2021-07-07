export function Table (props) {
  console.log(props.data);

  return `
    <table>
      <tr>
        <th>Nome</th>
      </tr>
      <tr>
        <td>Breno</td>
      </tr>
    </table>
  `
}