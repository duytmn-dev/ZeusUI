import data from "./data.json" assert { type: "json" };

function addTwitter(obj) {
  const mainTwitter = document.getElementById("twitter");
  const containerTwitter = mainTwitter.querySelector(".twitter-container");
  if (containerTwitter) {
    const itemTwitter = document.createElement("div");
    obj.map((item) => {
      itemTwitter.classList.add("twitter-list", "row", "g-3");
      itemTwitter.innerHTML += ` 
              <div class="col-lg-4">
                <div class="twitter-item">
                  <div class="twitter-header">
                    <div class="twitter-avt">
                      <img src="${item.img}" alt="" />
                    </div>
                    <div class="twitter-info">
                      <h3 class="twitter-name">${item.name}</h3>
                      <h3 class="twitter-id text">${item.twID}</h3>
                    </div>
                  </div>
                  <p class="text">${item.text} </p>
                </div>
              </div>
              `;
      return containerTwitter.appendChild(itemTwitter);
    });
  }
}

function addFeaurte(obj) {
  const mainFeature = document.getElementById("feature");
  const containerFeature = mainFeature.querySelector(".feature-container");
  if (containerFeature) {
    const itemFeature = document.createElement("div");

    obj.map((item) => {
      itemFeature.classList.add("feature-list", "row", "gx-3");
      itemFeature.innerHTML += `
              <div class="feature-items col-lg-4">
                <div class="item-img">
                  <img srcset="${item.avt} 2x" alt="" />
                </div>
                <h3 class="item-name">${item.name}</h3>
                <p class="text-desc">
                  ${item.desc}
                </p>
              </div>
      `;
      return containerFeature.appendChild(itemFeature);
    });
  }
}

addTwitter(data.itemTwitter);
addFeaurte(data.feature);
