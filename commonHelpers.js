import{a as f,S as h,i as p}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="44034350-c8dd89b120010b9025e6f422d",g="https://pixabay.com/api/";async function d(r,o=1){return(await f.get(`${g}`,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data.hits}function u(r){const o=document.querySelector(".gallery"),s=r.map(e=>`<a href="${e.largeImageURL}" class="gallery_item">
        <image src="${e.webformatURL}" alt="${e.tags}" class="gallery_image" />
        <div class="gallery_info">
          <div class="info_labels">
              <p>Likes</p>
              <p>Views</p>
              <p>Comments</p>
              <p>Downloads</p>
        </div>
        <div class="info_values">
            <p>${e.likes}</p>
            <p>${e.views}</p>
            <p>${e.comments}</p>
            <p>${e.downloads}</p>
        </div>
        </div>
        </a>`).join("");o.insertAdjacentHTML("beforeend",s),new h(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250}).refresh()}function a(r){p.error({title:"Error",message:r})}function m(){document.querySelector(".div-loader").classList.remove("hidden")}function i(){setTimeout(()=>{document.querySelector(".div-loader").classList.add("hidden")},500)}let n=1,L="";document.querySelector(".search-form").addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements.search_query.value.trim();if(n=1,o===""){a("Please enter a search query.");return}document.querySelector(".gallery").innerHTML="",r.target.reset(),m();try{const s=await d(o,n);i(),s.length===0?a("Sorry, there are no images matching your search query. Please try again!"):(u(s),document.querySelector(".load-more").classList.remove("hidden"))}catch(s){i(),a("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",s)}});document.querySelector(".load-more").addEventListener("click",async()=>{n++,m();try{const r=await d(L,n);i(),r.length===0?(a("We're sorry, but you've reached the end of search results."),document.querySelector(".load-more").classList.add("hidden")):(u(r),v())}catch(r){i(),a("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",r)}});function v(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
