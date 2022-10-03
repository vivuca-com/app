import { c as create_ssr_component, f as add_attribute } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var email = "", password = "";
  return `<main class="${"main-content mt-0"}"><section><div class="${"page-header min-vh-100"}"><div class="${"container"}"><div class="${"row"}"><div class="${"col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto"}"><div class="${"card card-plain"}"><div class="${"card-header pb-0 text-start"}"><h4 class="${"font-weight-bolder"}">Sign In</h4>
                  <p class="${"mb-0"}">Enter your email and password to sign in</p></div>
                <div class="${"card-body"}"><form role="${"form"}"><div class="${"mb-3"}"><input type="${"email"}" class="${"form-control form-control-lg"}" placeholder="${"Email"}" aria-label="${"Email"}"${add_attribute("value", email, 0)}></div>
                    <div class="${"mb-3"}"><input type="${"password"}" class="${"form-control form-control-lg"}" placeholder="${"Password"}" aria-label="${"Password"}"${add_attribute("value", password, 0)}></div>
                    <div class="${"form-check form-switch"}"><input class="${"form-check-input"}" type="${"checkbox"}" id="${"rememberMe"}">
                      <label class="${"form-check-label"}" for="${"rememberMe"}">Remember me</label></div>
                    <div class="${"text-center"}"><a href="${"#"}" type="${"button"}" class="${"btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"}">Sign in</a></div></form></div>
                <div class="${"card-footer text-center pt-0 px-lg-2 px-1"}"><p class="${"mb-4 text-sm mx-auto"}">Don&#39;t have an account?
                    <a href="${"javascript:;"}" class="${"text-primary text-gradient font-weight-bold"}">Sign up</a></p></div></div></div>
            <div class="${"col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"}"><div class="${"position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"}" style="${"background-image: url('https://stsci-opo.org/STScI-01G8GZR18A6CBS9TGJS8JE9CM4.png'); background-size: cover;"}"><span class="${"mask bg-gradient-primary opacity-6"}"></span>
                <h4 class="${"mt-5 text-white font-weight-bolder position-relative"}">Vivuca Dashboard</h4>
                <p class="${"text-white position-relative"}">Welcome back to vivuca.</p></div></div></div></div></div></section></main>
`;
});
export {
  Page as default
};
