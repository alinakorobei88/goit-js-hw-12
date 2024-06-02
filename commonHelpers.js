import{a as y,S as g,i as L}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const v="44034350-c8dd89b120010b9025e6f422d",w="https://pixabay.com/api/";async function h(e,r=1){const a=await y.get(`${w}`,{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}});return{hits:a.data.hits,totalHits:a.data.totalHits}}const q=new g(".gallery a",{captions:!0,captionsData:"alt",captionsDelay:250});function f(e){const r=document.querySelector(".gallery"),a=e.map(s=>`<a href="${s.largeImageURL}" class="gallery_item">
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
        </a>`).join("");r.insertAdjacentHTML("beforeend",a),q.refresh()}function i(e){L.error({title:"Error",message:e})}function m(){document.querySelector(".div-loader").classList.remove("hidden")}function l(){setTimeout(()=>{document.querySelector(".div-loader").classList.add("hidden")},500)}let n=1,c="",u=0;const p=15;document.querySelector(".search-form").addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements.search_query.value.trim(),n=1,c===""){i("Please enter a search query.");return}document.querySelector(".gallery").innerHTML="",e.target.reset(),m();try{const{hits:r,totalHits:a}=await h(c,n);l(),u=a,r.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(f(r),document.querySelector(".load-more").classList.remove("hidden"),u<=p&&(document.querySelector(".load-more").classList.add("hidden"),i("We're sorry, but you've reached the end of search results.")))}catch(r){l(),i("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",r)}});document.querySelector(".load-more").addEventListener("click",async()=>{n++,m();try{const{hits:e}=await h(c,n);l(),e.length===0||n*p>=u?(i("We're sorry, but you've reached the end of search results."),document.querySelector(".load-more").classList.add("hidden")):(f(e),S())}catch(e){l(),i("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",e)}});function S(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
