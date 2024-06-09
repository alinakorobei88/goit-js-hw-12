import{a as L,S as v,i as w}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const b="44034350-c8dd89b120010b9025e6f422d",q="https://pixabay.com/api/";async function p(e,r=1){const a=await L.get(`${q}`,{params:{key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});return{hits:a.data.hits,totalHits:a.data.totalHits}}const S=new v(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});function m(e){const r=document.querySelector(".gallery"),a=e.map(s=>`<a href="${s.largeImageURL}" class="gallery_item">
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
        </a>`).join("");r.insertAdjacentHTML("beforeend",a),S.refresh()}function i(e){w.error({title:"Error",message:e})}function y(){document.querySelector(".div-loader").classList.remove("hidden")}function u(){setTimeout(()=>{document.querySelector(".div-loader").classList.add("hidden")},500)}let n=1,l="",f=0;const g=15;let h=!1;const c=document.querySelector(".load-more");document.querySelector(".search-form").addEventListener("submit",async e=>{if(e.preventDefault(),l=e.target.elements.search_query.value.trim(),n=1,!l){i("Please enter a search query");return}document.querySelector(".gallery").innerHTML="",c.classList.add("hidden"),e.target.reset(),y();try{const{hits:r,totalHits:a}=await p(l,n);u(),f=a,r.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(m(r),f>g&&c.classList.remove("hidden"))}catch(r){i("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",r)}});c.addEventListener("click",async()=>{if(!h){n++,y();try{const{hits:e}=await p(l,n);u(),m(e),P(),Math.ceil(f/g)===n&&(i("We're sorry, but you've reached the end of search results."),h=!0,c.classList.add("hidden"))}catch(e){u(),i("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",e)}}});c.classList.add("hidden");function P(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
