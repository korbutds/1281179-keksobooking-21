(()=>{"use strict";(()=>{const e=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;window.util={getRandomIntInclusive:e,getRandomArrayElement:t=>t[e(0,t.length-1)],getDisabledElements:e=>{for(const t of e)t.disabled=!0},getUnDisabledElements:e=>{for(const t of e)t.disabled=!1}}})(),(()=>{const e=document.querySelector("#error").content.querySelector(".error"),t=document.querySelector("#success").content.querySelector(".success");window.server={getErrorMessage:(t,a)=>{const o=document.createDocumentFragment(),d=e.cloneNode(!0);d.querySelector(".error__message").textContent=t,o.appendChild(d),window.data.mapSection.appendChild(o);const n=d.querySelector("button"),i=()=>{d.remove(),n.removeEventListener("click",i),a||(window.server.getServerRequest(window.data.loadData,window.data.getServerData,window.server.getErrorMessage),window.pageActivate.getDeactivePage())};n.addEventListener("click",i)},getSuccessMessage:()=>{const e=document.createDocumentFragment(),a=t.cloneNode(!0);e.appendChild(a),document.querySelector("main").appendChild(e),window.pageActivate.getDeactivePage(),window.data.adForm.reset();const o=()=>e=>{"Escape"!==e.code&&0!==e.button||(a.remove(),document.removeEventListener("click",o()),document.removeEventListener("keydown",o()))};document.addEventListener("click",o()),document.addEventListener("keydown",o())},getServerRequest:(e,t,a,o)=>{let d=!1;"POST"===e.type&&(d=!0);const n=new XMLHttpRequest;n.responseType="json",n.open(e.type,e.URL),n.addEventListener("load",(()=>{200===n.status?t(n.response):a(`Статус ответа: ${n.status} ${n.statusText}`,d)})),n.timeout=1e3,n.addEventListener("error",(()=>{a("Произошла ошибка соеденения. Проверьте соеденение с интернетом",d)})),n.addEventListener("timeout",(()=>{a(`Запрос не успел выполниться за ${n.timeout}мс`,d)})),n.send(o)}}})(),window.data={},window.data.orderMap=document.querySelector(".map"),window.data.noticeSection=document.querySelector(".notice"),window.data.mapPins=window.data.orderMap.querySelector(".map__pins"),window.data.MAP_WIDTH=window.data.orderMap.offsetWidth,window.data.adForm=window.data.noticeSection.querySelector(".ad-form"),window.data.adFormReset=window.data.adForm.querySelector(".ad-form__reset"),window.data.adFormFieldsets=window.data.adForm.querySelectorAll(".ad-form > fieldset"),window.data.adFormSubmit=window.data.adForm.querySelector(".ad-form__submit"),window.data.mapFiltersContainer=window.data.orderMap.querySelector(".map__filters-container"),window.data.mapFilters=window.data.mapFiltersContainer.querySelector(".map__filters"),window.data.mapFiltersElements=window.data.mapFilters.children,window.data.mapPinMain=window.data.mapPins.querySelector(".map__pin--main"),window.data.mapPinMainCoords={left:"570px",top:"375px"},window.data.PIN_WIDTH=window.data.mapPinMain.offsetWidth,window.data.PIN_HEIGHT=window.data.mapPinMain.offsetHeight,window.data.PIN_TAIL_HEIGHT=22,window.data.adAvatar=window.data.adForm.querySelector("#avatar"),window.data.adTitle=window.data.adForm.querySelector("#title"),window.data.guestsSelect=window.data.adForm.querySelector("#capacity"),window.data.roomsSelect=window.data.adForm.querySelector("#room_number"),window.data.roomTypeSelect=window.data.adForm.querySelector("#type"),window.data.timeInSelect=window.data.adForm.querySelector("#timein"),window.data.timeOutSelect=window.data.adForm.querySelector("#timeout"),window.data.addressInput=window.data.adForm.querySelector("#address"),window.data.priceInput=window.data.adForm.querySelector("#price"),window.data.description=window.data.adForm.querySelector("#description"),window.data.adPhoto=window.data.adForm.querySelector("#images"),window.data.featuresCheckboxes=window.data.adForm.querySelectorAll(".feature__checkbox"),window.data.mainPinXY=`X: ${Math.round(window.data.mapPinMain.offsetLeft+window.data.PIN_WIDTH/2)}, Y: ${Math.round(window.data.mapPinMain.offsetTop+window.data.PIN_HEIGHT/2)}`,window.data.PIN_NUMBERS=8,window.data.titles=["Милая, уютная квартирка в центре Токио","Уютное гнездышко для молодоженов","Идеальный вариант для фотосессии","Недорогое жилье для студентов","Жилье в стиле Лофт","Все что нужно программисту","Лучше 18 квадратов в этом районе","Сдам на ночь. Можно и на часы"],window.data.types=["palace","flat","house","bungalow"],window.data.checkTimes=["12:00","13:00","14:00"],window.data.features=["wifi","dishwasher","parking","washer","elevator","conditioner"],window.data.photos=["http://o0.github.io/assets/images/tokyo/hotel1.jpg","http://o0.github.io/assets/images/tokyo/hotel2.jpg","http://o0.github.io/assets/images/tokyo/hotel3.jpg"],window.data.loadData={URL:"https://21.javascript.pages.academy/keksobooking/data",type:"GET"},window.data.saveData={URL:"https://21.javascript.pages.academy/keksobooking",type:"POST"},window.data.mapSection=document.querySelector(".map__pins"),window.data.getServerData=e=>{window.data.serverData=e.slice()},window.server.getServerRequest(window.data.loadData,window.data.getServerData,window.server.getErrorMessage),window.data.KEKS_PIN_FRINGE={top:130-window.data.PIN_TAIL_HEIGHT-window.data.PIN_HEIGHT,left:0-window.data.PIN_WIDTH/2,right:window.data.MAP_WIDTH-window.data.PIN_WIDTH/2,bottom:630-window.data.PIN_TAIL_HEIGHT-window.data.PIN_HEIGHT},window.pageActivate={getActivePage:()=>e=>{!window.data.orderMap.classList.contains("map--faded")||0!==e.button&&"Enter"!==e.code||(window.util.getUnDisabledElements(window.data.adFormFieldsets),window.util.getUnDisabledElements(window.data.mapFiltersElements),window.data.orderMap.classList.remove("map--faded"),window.data.adForm.classList.remove("ad-form--disabled"),window.data.addressInput.value=`X: ${Math.round(window.data.mapPinMain.offsetLeft+window.data.PIN_WIDTH/2)}, Y: ${Math.round(window.data.mapPinMain.offsetTop+window.data.PIN_HEIGHT+window.data.PIN_TAIL_HEIGHT)}`,window.data.addressInput.readOnly=!0,window.map.getPinMap(window.data.serverData))},getDeactivePage:()=>{window.util.getDisabledElements(window.data.adFormFieldsets),window.util.getDisabledElements(window.data.mapFiltersElements),window.data.orderMap.classList.add("map--faded"),window.data.adForm.classList.add("ad-form--disabled"),window.data.mapPinMain.style.top=window.data.mapPinMainCoords.top,window.data.mapPinMain.style.left=window.data.mapPinMainCoords.left,window.data.addressInput.value=`X: ${Math.round(window.data.mapPinMain.offsetLeft+window.data.PIN_WIDTH/2)}, ${Math.round(window.data.mapPinMain.offsetTop+window.data.PIN_HEIGHT/2)}`,window.pin.getRemovePins(),window.filter.getFilterReset()}},(()=>{const e=document.querySelector("#pin").content.querySelector(".map__pin"),t=t=>{const a=document.createDocumentFragment();let o;o=t.length>5?5:t.length;for(let d=0;d<o;d++){const o=e.cloneNode(!0),n=o.querySelector("img");o.style.cssText=`left: ${t[d].location.x-window.data.PIN_WIDTH}px; top: ${t[d].location.y}px;`,n.src=t[d].author.avatar,n.alt=t[d].offer.title,a.appendChild(o)}return a};window.map={getAdsArray:e=>{const t=[];for(let a=0;a<e;a++){const e={author:{avatar:`img/avatars/user0${a+1}.png`},offer:{title:window.data.titles[a],address:`${window.util.getRandomIntInclusive(0,1e3)}, ${window.util.getRandomIntInclusive(0,1e3)}`,price:""+100*window.util.getRandomIntInclusive(1,10),type:window.util.getRandomArrayElement(window.data.types),rooms:window.util.getRandomIntInclusive(1,4),guests:window.util.getRandomIntInclusive(1,10),checkin:window.util.getRandomArrayElement(window.data.checkTimes),checkout:window.util.getRandomArrayElement(window.data.checkTimes),features:window.data.features.slice(0,window.util.getRandomIntInclusive(1,window.data.features.length-1)),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",photos:window.data.photos.slice(window.util.getRandomIntInclusive(0,window.data.photos.length-1))},location:{x:window.util.getRandomIntInclusive(window.data.PIN_WIDTH,window.data.MAP_WIDTH),y:window.util.getRandomIntInclusive(130,630)}};t.push(e)}return t},getPinFragment:t,getPinMap:e=>{const a=t(e);window.data.mapSection.appendChild(a);const o=window.data.mapPins.querySelectorAll(".map__pin:not(.map__pin--main)");let d;d=e.length>5?5:e.length;for(let t=0;t<d;t++)window.pin.onAdCardClick(o[t],e[t])}}})(),window.dragAndDrop={getTransformElement:(e,t,a=e)=>{e.addEventListener("mousedown",(o=>{o.preventDefault();let d={x:o.clientX,y:o.clientY},n=!1;const i=e=>{e.preventDefault(),n=!0;const o=d.x-e.clientX,i=d.y-e.clientY;d={x:e.clientX,y:e.clientY},a.style.top=a.offsetTop-i+"px",a.style.left=a.offsetLeft-o+"px",a.offsetTop<t.top?a.style.top=t.top+"px":a.offsetTop>t.bottom?a.style.top=t.bottom+"px":a.offsetLeft<t.left?a.style.left=t.left+"px":a.offsetLeft>t.right&&(a.style.left=t.right+"px"),window.data.addressInput.value=`Х: ${Math.round(a.offsetLeft+window.data.PIN_WIDTH/2)}, Y: ${Math.round(a.offsetTop+window.data.PIN_HEIGHT+window.data.PIN_TAIL_HEIGHT)}`},r=t=>{if(t.preventDefault(),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",r),n){const t=a=>{a.preventDefault(),e.removeEventListener("click",t)};e.addEventListener("click",t)}};document.addEventListener("mousemove",i),document.addEventListener("mouseup",r)}))}},(()=>{window.util.getDisabledElements(window.data.adFormFieldsets),window.util.getDisabledElements(window.data.mapFiltersElements),window.data.addressInput.value=window.data.mainPinXY;const e=e=>{let t=0;switch(e){case"bungalow":t=0;break;case"flat":t=1e3;break;case"house":t=5e3;break;case"palace":t=1e4}window.data.priceInput.min=t,window.data.priceInput.placeholder=t},t=e=>{window.data.timeOutSelect.value=e};e(window.data.roomTypeSelect.value),window.data.roomTypeSelect.addEventListener("change",(t=>{e(t.target.value)})),t(window.data.timeInSelect.value),window.data.timeInSelect.addEventListener("change",(e=>{t(e.target.value)})),window.data.timeOutSelect.addEventListener("change",(e=>{var t;t=e.target.value,window.data.timeInSelect.value=t}));const a={1:["1"],2:["1","2"],3:["1","2","3"],100:["0"]},o=e=>{[...window.data.guestsSelect.options].forEach((t=>{t.disabled=!a[e].includes(t.value)})),window.data.guestsSelect.value=e>3?"0":e};o(window.data.roomsSelect.value),window.data.roomsSelect.addEventListener("change",(e=>{o(e.target.value)})),window.data.adForm.addEventListener("submit",(e=>{e.preventDefault(),window.server.getServerRequest(window.data.saveData,window.server.getSuccessMessage,window.server.getErrorMessage,new FormData(window.data.adForm))})),window.data.adForm.addEventListener("reset",(e=>{e.preventDefault(),o(window.data.roomsSelect.value),window.pageActivate.getDeactivePage(),window.form.getResetForm()}));const d="flat",n=1e3,i=1,r="12:00",w=1;window.form={getResetForm:()=>{window.data.adTitle.value="",window.data.roomTypeSelect.value=d,window.data.roomsSelect.value=i,window.data.priceInput.value="",window.data.priceInput.placeholder=n,window.data.description.value="",window.data.timeInSelect.value=r,window.data.timeOutSelect.value=window.data.timeInSelect.value,window.data.guestsSelect.value=w,window.data.adPhoto.value="",window.data.adAvatar.value="",[...window.data.featuresCheckboxes].forEach((e=>{e.checked=!1}))}}})(),(()=>{const e=document.querySelector("#card").content.querySelector(".popup");window.card={getAdCard:t=>{const a=document.createDocumentFragment(),o=e.cloneNode(!0);return o.querySelector(".popup__title").textContent=t.offer.title,o.querySelector(".popup__text--address").textContent=t.offer.address,o.querySelector(".popup__text--price").textContent=t.offer.price+" ₽/ночь",o.querySelector(".popup__type").textContent=t.offer.type,o.querySelector(".popup__text--capacity").textContent=`${t.offer.rooms} комнат для ${t.offer.guests} гостей`,o.querySelector(".popup__text--time").textContent=`Заезд после ${t.offer.checkin} выезд до ${t.offer.checkout}`,o.querySelector(".popup__avatar").src=t.author.avatar,((e,t)=>{const a=e.querySelector(".popup__features"),o=document.createDocumentFragment();for(let e=0;e<t.length;e++){const a=document.createElement("li");a.classList.add("popup__feature"),a.classList.add("popup__feature--"+t[e]),o.appendChild(a)}a.innerHTML="",a.appendChild(o)})(o,t.offer.features),((e,t)=>{const a=e.querySelector(".popup__photos"),o=a.querySelector("img").cloneNode(!0);a.innerHTML="";for(let e=0;e<t.length;e++){const d=o.cloneNode(!0);d.src=t[e],a.appendChild(d)}})(o,t.offer.photos),a.appendChild(o),a}}})(),(()=>{const e=e=>{e.classList.add("map__pin--active")},t=()=>{window.data.mapPins.querySelectorAll(".map__pin").forEach((e=>{e.classList.remove("map__pin--active")}))},a=()=>{window.data.orderMap.querySelector(".map__card.popup")&&(window.data.orderMap.querySelector(".map__card.popup").remove(),document.removeEventListener("keydown",o))},o=e=>{"Escape"===e.key&&(e.preventDefault(),a(window.data.orderMap.querySelector(".map__card.popup")),t())};window.pin={onAdCardClick:(d,n)=>{d.addEventListener("click",(()=>{window.data.orderMap.querySelector(".map__card.popup")?(t(),a(),e(d)):e(d),window.data.orderMap.insertBefore(window.card.getAdCard(n),window.data.mapFiltersContainer),document.addEventListener("keydown",o),window.data.orderMap.querySelector(".popup__close").addEventListener("click",(()=>{a(),t()}))}))},getRemovePopup:a,getUnactivatePin:t,getRemovePins:()=>{window.data.mapPins.querySelectorAll(".map__pin:not(.map__pin--main)").forEach((e=>{e.remove()}))}}})(),window.debounce=e=>{let t=null;return function(...a){t&&window.clearTimeout(t),t=window.setTimeout((()=>{e(...a)}),300)}},(()=>{const e=document.querySelector(".map__filters"),t=e.querySelector("#housing-type"),a=e.querySelector("#housing-price"),o=e.querySelector("#housing-rooms"),d=e.querySelector("#housing-guests"),n=e.querySelectorAll(".map__checkbox");e.addEventListener("change",window.debounce((()=>{let e=window.data.serverData.slice();window.pin.getRemovePopup(),window.pin.getRemovePins(),n.forEach((t=>{if(t.checked){const a=t.id.replace(/filter-/gi,"");e=e.filter((e=>e.offer.features.includes(a)))}})),[{name:t,filterFunction:t=>{e=e.filter((e=>e.offer.type===t))}},{name:a,filterFunction:t=>{e=e.filter((e=>{switch(t){case"middle":return e.offer.price>=1e4&&e.offer.price<=5e4;case"low":return e.offer.price<1e4;case"high":return e.offer.price>5e4;default:return!1}}))}},{name:o,filterFunction:t=>{e=e.filter((e=>e.offer.price===Number(t)))}},{name:d,filterFunction:t=>{e=e.filter((e=>e.offer.price===Number(t)))}}].forEach((e=>{const t=e.name.value;"any"!==t&&e.filterFunction(t)})),window.map.getPinMap(e)}))),window.filter={getFilterReset:()=>{e.querySelectorAll("select").forEach((e=>{e.value="any"})),n.forEach((e=>{e.checked=!1}))}}})(),window.data.mapPinMain.addEventListener("mousedown",window.pageActivate.getActivePage()),window.data.mapPinMain.addEventListener("keydown",window.pageActivate.getActivePage()),window.dragAndDrop.getTransformElement(window.data.mapPinMain,window.data.KEKS_PIN_FRINGE)})();