// app.js — bilingual functionality + simple cart + WhatsApp checkout
const PRODUCTS = [
  {"id":1,"en":"Baby Bodysuit - Cute Bear","ar":"بودي بيبي - دب لطيف","price":4.50,"img":"https://via.placeholder.com/600x400?text=Product+1"},
  {"id":2,"en":"Silicone Bib","ar":"مريول سيليكون","price":3.20,"img":"https://via.placeholder.com/600x400?text=Product+2"},
  {"id":3,"en":"Soft Toy - Rabbit","ar":"لعبة قماش - أرنب","price":6.00,"img":"https://via.placeholder.com/600x400?text=Product+3"},
  {"id":4,"en":"Feeding Bottle 250ml","ar":"زجاجة رضاعة 250مل","price":2.80,"img":"https://via.placeholder.com/600x400?text=Product+4"},
  {"id":5,"en":"Baby Socks 5 Pairs","ar":"جوارب بيبي 5 أزواج","price":1.50,"img":"https://via.placeholder.com/600x400?text=Product+5"},
  {"id":6,"en":"Mom Nursing Cover","ar":"غطاء رضاعة للأم","price":7.90,"img":"https://via.placeholder.com/600x400?text=Product+6"},
  {"id":7,"en":"Teething Toy","ar":"لعبة عضّاضة","price":2.00,"img":"https://via.placeholder.com/600x400?text=Product+7"},
  {"id":8,"en":"Diaper Bag Organizer","ar":"شنطة حفظ الحفاضات","price":12.00,"img":"https://via.placeholder.com/600x400?text=Product+8"},
  {"id":9,"en":"Stroller Toy Set","ar":"طقم ألعاب لعربة الأطفال","price":5.50,"img":"https://via.placeholder.com/600x400?text=Product+9"},
  {"id":10,"en":"Baby Blanket 80x100cm","ar":"بطانية أطفال 80x100سم","price":9.00,"img":"https://via.placeholder.com/600x400?text=Product+10"}
];

const WA_NUMBER = "+965XXXXXXXX"; // <- Replace with your WhatsApp number (international format, no + or 00 in wa.me link)
let lang = localStorage.getItem('sazaq8_lang') || 'ar';
const translations = {
  "home":{"ar":"الرئيسية","en":"Home"},
  "products":{"ar":"المنتجات","en":"Products"},
  "about":{"ar":"من نحن","en":"About"},
  "contact":{"ar":"اتصل بنا","en":"Contact"},
  "cart":{"ar":"السلة","en":"Cart"},
  "hero_title":{"ar":"أهلاً بكم في SAZAQ8","en":"Welcome to SAZAQ8"},
  "hero_sub":{"ar":"متجر مستورد من الصين — منتجات للأطفال والأمهات. طلب عبر واتساب بسهولة.","en":"Imported goods from China — products for kids & moms. Order via WhatsApp."},
  "shop_now":{"ar":"تسوق الآن","en":"Shop Now"},
  "fast_delivery":{"ar":"طلب عبر واتساب","en":"Order via WhatsApp"},
  "fast_delivery_desc":{"ar":"اطلب بطريقة بسيطة وآمنة عبر رقمنا على واتساب.","en":"Order easily and safely via our WhatsApp number."},
  "quality":{"ar":"جودة مستوردة","en":"Imported Quality"},
  "quality_desc":{"ar":"منتجات مختارة بعناية من الصين للأمهات والأطفال.","en":"Handpicked products from China for moms & kids."},
  "support":{"ar":"دعم ثنائي اللغة","en":"Bilingual Support"},
  "support_desc":{"ar":"الموقع بالعربية والإنجليزية — اختَر اللغة بسهولة.","en":"Site in Arabic & English — switch with one click."},
  "your_cart":{"ar":"سلة الشراء","en":"Your Cart"},
  "total":{"ar":"الإجمالي","en":"Total"},
  "kd":{"ar":"د.ك","en":"KWD"},
  "order_whatsapp":{"ar":"اطلب عبر واتساب","en":"Order via WhatsApp"},
  "clear_cart":{"ar":"تفريغ السلة","en":"Clear Cart"},
  "about_title":{"ar":"عن SAZAQ8","en":"About SAZAQ8"},
  "about_desc":{"ar":"SAZAQ8 متجر مختص بمنتجات الأطفال والأمهات — نستورد من الصين باختيار دقيق وجودة مقبولة. الطلبات عن طريق واتساب. هذا الموقع نموذج جاهز للنشر.","en":"SAZAQ8 specializes in products for kids & moms — imported from China. Orders via WhatsApp. This is a ready-to-publish template."},
  "contact_title":{"ar":"تواصل معنا","en":"Contact Us"},
  "contact_desc":{"ar":"للطلب والاستفسار أرسل رسالة عبر واتساب:","en":"To order or inquire, send a message via WhatsApp:"},
  "contact_note":{"ar":"يمكنك تعديل رقم الواتساب في ملف js/app.js ليظهر رقمك الحقيقي.","en":"You can change the WhatsApp number in js/app.js to your real number."}
};

function tFill(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(translations[key]) el.innerText = translations[key][lang] || translations[key]['ar'];
  });
  document.documentElement.lang = (lang==='ar')? 'ar':'en';
  document.body.classList.toggle('rtl', lang==='ar');
  document.body.classList.toggle('ltr', lang!=='ar');
  document.getElementById('langToggle').innerText = (lang==='ar')? 'EN':'ع';
}

function renderProducts(){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  grid.innerHTML = '';
  PRODUCTS.forEach(p=>{
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p[lang==='ar'?'ar':'en']}">
      <h3>${p[lang==='ar'?'ar':'en']}</h3>
      <p class="price">${p.price.toFixed(2)} KWD</p>
      <div class="actions">
        <button class="btn addBtn" data-id="${p.id}">${lang==='ar'?'أضف للسلة':'Add to cart'}</button>
        <a class="whatsapp-btn" href="${waLinkSingle(p)}" target="_blank">${lang==='ar'?'اطلب واتساب':'Order on WhatsApp'}</a>
      </div>
    `;
    grid.appendChild(card);
  });
  document.querySelectorAll('.addBtn').forEach(b=>{
    b.addEventListener('click',()=>{ addToCart(parseInt(b.dataset.id)); });
  });
}

function waLinkSingle(p){
  const text = encodeURIComponent(`${p[lang==='ar'?'ar':'en']} - ${p.price.toFixed(2)} KWD\nالكمية: 1`);
  const num = WA_NUMBER.replace('+','');
  return `https://wa.me/${num}?text=${text}`;
}

// Simple cart stored in localStorage
function getCart(){ return JSON.parse(localStorage.getItem('sazaq8_cart')||'[]'); }
function saveCart(c){ localStorage.setItem('sazaq8_cart', JSON.stringify(c)); updateCartUI(); }
function addToCart(id){
  const cart = getCart();
  const item = cart.find(x=>x.id===id);
  if(item) item.qty++;
  else cart.push({id,qty:1});
  saveCart(cart);
}
function clearCart(){ localStorage.removeItem('sazaq8_cart'); updateCartUI(); }
function updateCartUI(){
  const cart = getCart();
  const count = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartCount').innerText = count;
  const itemsEl = document.getElementById('cartItems');
  if(itemsEl){
    itemsEl.innerHTML = '';
    let total = 0;
    cart.forEach(ci=>{
      const p = PRODUCTS.find(x=>x.id===ci.id);
      const line = document.createElement('div'); line.className='cart-item';
      line.innerHTML = `<img src="${p.img}"><div><strong>${p[lang==='ar'?'ar':'en']}</strong><div>${p.price.toFixed(2)} KWD x ${ci.qty}</div></div>`;
      itemsEl.appendChild(line);
      total += p.price * ci.qty;
    });
    document.getElementById('cartTotal').innerText = total.toFixed(2);
    const waBtn = document.getElementById('whatsappCheckout');
    if(waBtn){
      if(cart.length===0){ waBtn.href = '#'; waBtn.classList.add('disabled'); }
      else{
        const lines = cart.map(ci=>{
          const p = PRODUCTS.find(x=>x.id===ci.id);
          return `${p[lang==='ar'?'ar':'en']} x ${ci.qty} - ${ (p.price*ci.qty).toFixed(2) } KWD`;
        });
        const totalStr = `الإجمالي: ${total.toFixed(2)} KWD`;
        const text = encodeURIComponent(lines.join('\n') + '\n' + totalStr);
        const num = WA_NUMBER.replace('+','');
        waBtn.href = `https://wa.me/${num}?text=${text}`;
        waBtn.classList.remove('disabled');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  // language
  document.getElementById('langToggle').addEventListener('click',()=>{
    lang = (lang==='ar')? 'en':'ar'; localStorage.setItem('sazaq8_lang',lang);
    tFill(); renderProducts(); updateCartUI();
  });
  tFill(); renderProducts(); updateCartUI();
  // clear cart
  const clearBtn = document.getElementById('clearCart');
  if(clearBtn) clearBtn.addEventListener('click', clearCart);
});
