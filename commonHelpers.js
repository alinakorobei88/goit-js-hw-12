import{a as h,S as p,i as g}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const y="44034350-c8dd89b120010b9025e6f422d",L="https://pixabay.com/api/";async function u(r,t=1){return(await h.get(`${L}`,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data.hits}function m(r){const t=document.querySelector(".gallery"),a=r.map(e=>`<a href="${e.largeImageURL}" class="gallery_item">
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
        </a>`).join("");t.insertAdjacentHTML("beforeend",a),new p(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250}).refresh()}function s(r){g.error({title:"Error",message:r})}function f(){document.querySelector(".div-loader").classList.remove("hidden")}function n(){setTimeout(()=>{document.querySelector(".div-loader").classList.add("hidden")},500)}let c=1,i="";document.querySelector(".search-form").addEventListener("submit",async r=>{if(r.preventDefault(),i=r.target.elements.search_query.value.trim(),c=1,i===""){s("Please enter a search query.");return}document.querySelector(".gallery").innerHTML="",r.target.reset(),f();try{const t=await u(i,c);n(),t.length===0?s("Sorry, there are no images matching your search query. Please try again!"):(m(t),document.querySelector(".load-more").classList.remove("hidden"))}catch(t){n(),s("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",t)}});document.querySelector(".load-more").addEventListener("click",async()=>{c++,f();try{const r=await u(i,c);n(),r.length===0?(s("We're sorry, but you've reached the end of search results."),document.querySelector(".load-more").classList.add("hidden")):(m(r),v())}catch(r){n(),s("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",r)}});function v(){const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
