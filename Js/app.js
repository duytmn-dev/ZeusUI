import data from "./data.json" assert {type: "json"};

function addTwitter(obj) {
  const mainTwitter = document.getElementById("twitter");
  const listTwitter = mainTwitter.querySelectorAll(".col-lg-4");

  if (listTwitter) {
    const itemtTwitter = ["itemTwitter", "itemTwitter1", "itemTwitter2"];

    itemtTwitter.map((x, i) => {
      x = document.createElement("div");

      obj.map((item, index) => {
        const col = index % 3;
        if (col == i) {
          x.classList.add("twitter-col");
          x.innerHTML += `
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
                  <p class="text">${item.text}</p>
                </div>
                `;
          return listTwitter[i].appendChild(x);
        }
      });
    });
    /* Bản mở rộng  */

    // obj.map( ( item, index ) => {
    //   const col = index % 3;
    //   itemTwitter.classList.add( "twitter-col" );
    //   itemTwitter1.classList.add( "twitter-col" );
    //   itemTwitter2.classList.add( "twitter-col" );
    //   if ( col == 0 )
    //   {
    //     itemTwitter.innerHTML += `
    //            <div class="twitter-item">
    //                 <div class="twitter-header">
    //                   <div class="twitter-avt">
    //                     <img src="${ item.img }" alt="" />
    //                   </div>
    //                   <div class="twitter-info">
    //                     <h3 class="twitter-name">${ item.name }</h3>
    //                     <h3 class="twitter-id text">${ item.twID }</h3>
    //                   </div>
    //                 </div>
    //                 <p class="text">${ item.text }</p>
    //               </div>
    //             `;
    //     return listTwitter[ col ].appendChild( itemTwitter );
    //   }
    //   if ( col == 1 )
    //   {
    //     itemTwitter1.innerHTML += `
    //            <div class="twitter-item">
    //                 <div class="twitter-header">
    //                   <div class="twitter-avt">
    //                     <img src="${ item.img }" alt="" />
    //                   </div>
    //                   <div class="twitter-info">
    //                     <h3 class="twitter-name">${ item.name }</h3>
    //                     <h3 class="twitter-id text">${ item.twID }</h3>
    //                   </div>
    //                 </div>
    //                 <p class="text">${ item.text }</p>
    //               </div>
    //             `;
    //     return listTwitter[ col ].appendChild( itemTwitter1 );
    //   }
    //   if ( col == 2 )
    //   {
    //     itemTwitter2.innerHTML += `
    //            <div class="twitter-item">
    //                 <div class="twitter-header">
    //                   <div class="twitter-avt">
    //                     <img src="${ item.img }" alt="" />
    //                   </div>
    //                   <div class="twitter-info">
    //                     <h3 class="twitter-name">${ item.name }</h3>
    //                     <h3 class="twitter-id text">${ item.twID }</h3>
    //                   </div>
    //                 </div>
    //                 <p class="text">${ item.text }</p>
    //               </div>
    //             `;
    //     return listTwitter[ col ].appendChild( itemTwitter2 );
    //   }
    // } );
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
              <div class="feature-items col-lg-4 col-md-4">
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
