import "./css/reset.css";
import "./css/app.css";
import { getProfiles } from "./api/index.js";
import { App } from "./App";

async function Render(app,  container) {
  const { data } = await getProfiles();

  container.innerHTML = app({ profiles: data })
}

Render(App, document.getElementById("app"))

