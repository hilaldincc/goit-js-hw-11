import{a as p,S as d,i as n}from"./vendor-67BWzQEt.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const f="47647589-b8e3be9abf9fcf69ccbc2b85f",m="https://pixabay.com/api/";function h(a){const e={key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:20};return p.get(m,{params:e}).then(s=>s.data.hits).catch(s=>{throw console.error("API error:",s),new Error("Failed to fetch images")})}function y(a){return a.map(e=>`
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" />
            <div class="card-info">
              <div class="info-block">
                <p class="label">Likes</p>
                <p class="value">${e.likes}</p>
              </div>
              <div class="info-block">
                <p class="label">Views</p>
                <p class="value">${e.views}</p>
              </div>
              <div class="info-block">
                <p class="label">Comments</p>
                <p class="value">${e.comments}</p>
              </div>
              <div class="info-block">
                <p class="label">Downloads</p>
                <p class="value">${e.downloads}</p>
              </div>
            </div>
          </a>
        `).join("")}const o=document.querySelector("#search-form"),c=document.querySelector(".gallery"),u=document.querySelector(".loader");let g=new d(".gallery a",{captionsData:"alt",captionDelay:250});o.addEventListener("submit",a=>{a.preventDefault();const e=o.elements.searchQuery.value.trim();if(!e){n.warning({title:"Oops!",message:"Please enter a search term!",position:"topRight"});return}o.elements.searchQuery.disabled=!0,o.elements.searchQuery.style.opacity="0.5",c.innerHTML="",u.classList.remove("hidden"),h(e).then(s=>{if(s.length===0){n.error({title:"",message:"Sorry, there are no images matching your search query.<br>Please, try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",titleColor:"#FFFFFF",timeout:4e3,layout:2,maxWidth:432,class:"custom-toast",iconUrl:"https://cdn-icons-png.flaticon.com/512/1828/1828665.png",progressBarColor:"#B51B1B"});return}const i=y(s);c.innerHTML=i,g.refresh()}).catch(s=>{n.error({title:"Error",message:"Something went wrong. Please try again.",position:"topRight"})}).finally(()=>{u.classList.add("hidden"),o.elements.searchQuery.disabled=!1,o.elements.searchQuery.style.opacity="1",o.reset()})});
//# sourceMappingURL=main-TFlLsd75.js.map
