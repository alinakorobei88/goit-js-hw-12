import{a as p,S as h,i as y}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const g="44034350-c8dd89b120010b9025e6f422d",L="https://pixabay.com/api/";async function u(e,t=1){return(await p.get(`${L}`,{params:{key:g,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data.hits}const v=new h(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});function m(e){const t=document.querySelector(".gallery"),i=e.map(s=>`<a href="${s.largeImageURL}" class="gallery_item">
        <image src="${s.webformatURL}" alt="${s.tags}" class="gallery_image" />
        <div class="gallery_info">
          <div class="info_labels">
              <p>Likes</p>
              <p>Views</p>
              <p>Comments</p>
              <p>Downloads</p>
        </div>
        <div class="info_values">
            <p>${s.likes}</p>
            <p>${s.views}</p>
            <p>${s.comments}</p>
            <p>${s.downloads}</p>
        </div>
        </div>
        </a>`).join("");t.insertAdjacentHTML("beforeend",i),v.refresh()}function a(e){y.error({title:"Error",message:e})}function f(){document.querySelector(".div-loader").classList.remove("hidden")}function c(){setTimeout(()=>{document.querySelector(".div-loader").classList.add("hidden")},500)}let l=1,n="";document.querySelector(".search-form").addEventListener("submit",async e=>{if(e.preventDefault(),n=e.target.elements.search_query.value.trim(),l=1,n===""){a("Please enter a search query.");return}document.querySelector(".gallery").innerHTML="",e.target.reset(),f();try{const t=await u(n,l);c(),t.length===0?a("Sorry, there are no images matching your search query. Please try again!"):(m(t),document.querySelector(".load-more").classList.remove("hidden"))}catch(t){c(),a("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",t)}});document.querySelector(".load-more").addEventListener("click",async()=>{l++,f();try{const e=await u(n,l);c(),e.length===0?(a("We're sorry, but you've reached the end of search results."),document.querySelector(".load-more").classList.add("hidden")):(m(e),w())}catch(e){c(),a("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",e)}});function w(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
