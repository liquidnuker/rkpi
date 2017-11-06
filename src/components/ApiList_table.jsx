export default function ApiList_table(props) {
  return (
    <table class="col-xs-12 apilist_table">
    <tbody aria-live="assertive" aria-atomic="true" aria-describedby="api_status">
      {props.pr_items.map((i) =>
        <tr v-for="i in prApiList" class="row">
        <td class="col-xs-12 col-sm-7">
          <p class="apiname">{ i.API }</p>
          <summary>
          <p class="apidesc">{ i.Description }</p>
          </summary>
          <a class="apilink" href="i.Link">{ i.Link }</a>
        </td>
        <td class="col-xs-12 col-sm-2">
          <p>{ i.Category }</p>
        </td>
        <td class="col-xs-12 col-sm-2">
          <p>{ i.Auth }</p>
        </td>
        <td class="col-xs-12 col-sm-1 https">
          {i.HTTPS}
        </td>
      </tr>
      )}
    </tbody>
  </table>
  );
}