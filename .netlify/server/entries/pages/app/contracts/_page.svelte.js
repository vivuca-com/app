import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../../chunks/index.js";
const API_URL = "http://localhost:5000";
async function api(path, data) {
  const res = await fetch(API_URL + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  if (json.alert) {
    Toastify({
      text: json.alert,
      duration: 3e3
    }).showToast();
  }
  if (json.redirect) {
    window.open(json.redirect, "_self");
  }
  console.log(JSON.stringify(json));
  return json;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var contracts = [{}];
  async function load() {
    try {
      contracts = await api("/contracts/fetch");
      for (let contract of contracts) {
        if (contract.status == "pending")
          contract.action = "Send";
        if (contract.status == "sent")
          contract.action = "Remind";
        if (contract.status == "signed")
          contract.action = "See file";
      }
    } catch (err) {
      console.log(err);
    }
  }
  var createContract = {};
  load();
  return `

  <div class="${"container-fluid py-4"}"><div class="${"row mt-4"}"><div class="${"col-lg-12 mb-lg-0 mb-4"}"><div class="${"card mb-4"}"><div class="${"card-header pb-0"}"><h6>Contracts</h6></div>
          <div class="${"card-body px-0 pt-0 pb-2"}"><div class="${"table-responsive p-0"}"><table class="${"table align-items-center mb-0"}"><thead><tr><th class="${"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}">Contact</th>
                    <th class="${"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"}">Position</th>
                    <th class="${"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}">Contract number</th>
                    <th class="${"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}">Signed</th>
                    <th class="${"text-secondary opacity-7"}"></th></tr></thead>
                <tbody>${each(contracts, (contract) => {
    return `<tr><td><div class="${"d-flex px-2 py-1"}"><div><img src="${"../assets/img/team-2.jpg"}" class="${"avatar avatar-sm me-3"}" alt="${"user1"}"></div>
                        <div class="${"d-flex flex-column justify-content-center"}"><h6 class="${"mb-0 text-sm"}">${escape(contract.first_name)} ${escape(contract.last_name)}</h6>
                          <p class="${"text-xs text-secondary mb-0"}">${escape(contract.email)}</p></div>
                      </div></td>
                    <td><p class="${"text-xs font-weight-bold mb-0"}">${escape(contract.position)}</p>
                      <p class="${"text-xs text-secondary mb-0"}">${escape(contract.company)}</p></td>
                    <td class="${"align-middle text-center"}"><span class="${"text-secondary text-xs font-weight-bold"}">${escape(contract.contract_no)}</span></td>
                    <td class="${"align-middle text-center text-sm"}"><span class="${"badge badge-sm bg-gradient-secondary"}">${escape(contract.status)}</span></td>
                    <td class="${"align-middle"}"><button type="${"button"}" class="${"btn btn-xs btn-primary mb-0"}">${escape(contract.action)}</button></td>
                  </tr>`;
  })}</tbody></table></div></div></div></div></div></div>

  <div class="${"container-fluid py-4"}"><div class="${"row"}"><div class="${"col-md-12"}"><div class="${"card"}"><div class="${"card-header pb-0"}"><div class="${"d-flex align-items-center"}"><p class="${"mb-0"}">Add a new contract</p>
              <button class="${"btn btn-primary btn-sm ms-auto"}">Add</button></div></div>
          <div class="${"card-body"}"><p class="${"text-uppercase text-sm"}">Contact information</p>
            <div class="${"row"}"><div class="${"col-md-6"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Company</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.company, 0)}></div></div>
              <div class="${"col-md-6"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Email address</label>
                  <input class="${"form-control"}" type="${"email"}"${add_attribute("value", createContract.email, 0)}></div></div>
              <div class="${"col-md-4"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">First name</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.first_name, 0)}></div></div>
              <div class="${"col-md-4"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Last name</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.last_name, 0)}></div></div>
              <div class="${"col-md-4"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Position</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.position, 0)}></div></div></div>
            <hr class="${"horizontal dark"}">
            <p class="${"text-uppercase text-sm"}">Company information</p>
            <div class="${"row"}"><div class="${"col-md-12"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Address</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.address, 0)}></div></div>
              <div class="${"col-md-4"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">City</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.city, 0)}></div></div>
              <div class="${"col-md-4"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Country</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.country, 0)}></div></div>
              <div class="${"col-md-4"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Postal code</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.postal_code, 0)}></div></div></div>
            <hr class="${"horizontal dark"}">
            <p class="${"text-uppercase text-sm"}">Details</p>
            <div class="${"row"}"><div class="${"col-md-6"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Contract number</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.contract_no, 0)}></div></div>
              <div class="${"col-md-6"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Contract number</label>
                  <input class="${"form-control"}" type="${"text"}"></div></div></div></div></div></div></div></div>`;
});
export {
  Page as default
};
