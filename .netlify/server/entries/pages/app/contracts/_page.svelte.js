import { c as create_ssr_component, f as each, d as add_attribute } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var createContract = {};
  var signers = [{}];
  return `
  ${``}

  <div class="${"container-fluid py-4"}"><div class="${"row"}"><div class="${"col-md-12"}"><div class="${"card"}"><div class="${"card-header pb-0"}"><div class="${"d-flex align-items-center"}"><p class="${"mb-0"}"><b>New contract</b></p>
              <button class="${"btn btn-primary btn-sm ms-auto"}">Create contract</button></div></div>
          <div class="${"card-body"}"><p class="${"text-uppercase text-sm"}">Contact information</p>
            ${each(signers, (signer) => {
    return `<div class="${"row"}"><div class="${"col-md-6"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">First name</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", signer.first_name, 0)}>
                </div></div>
              <div class="${"col-md-6"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Last name</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", signer.last_name, 0)}>
                </div></div>
              <div class="${"col-md-5"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Email address</label>
                  <input class="${"form-control"}" type="${"email"}"${add_attribute("value", signer.email, 0)}>
                </div></div>
              <div class="${"col-md-4"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Position</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", signer.position, 0)}>
                </div></div>
              </div>`;
  })}
              <div class="${"row"}"><div class="${"col-md-3"}"><div class="${"form-group"}"><button class="${"btn btn-primary btn-sm ms-auto"}">Add new contact</button></div></div></div>
            <hr class="${"horizontal dark"}">
            <p class="${"text-uppercase text-sm"}">Company information</p>
            <div class="${"row"}"><div class="${"col-md-6"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Company name</label>
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.company, 0)}></div></div>
              <div class="${"col-md-6"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Address</label>
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
                  <input class="${"form-control"}" type="${"text"}"${add_attribute("value", createContract.contract_no, 0)}></div></div></div>
            <hr class="${"horizontal dark"}">
            <p class="${"text-uppercase text-sm"}">Template</p>
            <div class="${"row"}"><div class="${"col-md-6"}"><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Select template</label>
                  
                  <select class="${"form-control"}"><option value="${"template-1"}">template-1</option><option value="${"template-2"}">template-2</option></select></div></div>
              <div class="${"col-md-6"}"><center><div class="${"form-group"}"><label for="${"example-text-input"}" class="${"form-control-label"}">Or upload a template</label><br>

                  <input class="${"btn btn-primary btn-sm "}" type="${"file"}" accept="${".docx"}"></div></center></div></div></div></div></div></div></div>`;
});
export {
  Page as default
};
