// global variable
'use strict'







// for input message send................
let msg_showing_box = document.querySelector('.msg_showing_box');
function msg_send() {
    let text_input = document.querySelector('#text_input');
    let msg_showing_box = document.querySelector('.msg_showing_box');
    let icon_wrapper = document.querySelector('.icon_wrapper');
    icon_wrapper.classList.remove('show_icon_wrapper');



// for time showing..............
let msg_time = document.querySelector('.msg_time');
let t = new Date();
let h = t.getHours();
let m = t.getMinutes();
let t_positoin = (h >= 12) ? 'PM' : 'AM';
if (h > 12) {
    h =  h - 12;
} else {
    h = h; 
}








    if (text_input.value == '' || text_input.value == ' ') {
        msg_showing_box.innerHTML;
    } else {
        msg_showing_box.innerHTML += `<div class="show_msg_now">
        <span class="msg_time">
        ${((h < 10) ? '0' + h : h) + ': ' + ((m < 10) ? '0' + m : m) + ' ' +

        t_positoin
    } 
        
        </span>
        
        <div class="msg_more_option">
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        
        
        </div>

        <div class="msg_more_window msg_more_window_hide"> 
        
        
       
        <button class="msg_btn msg_remove_btn"> Remove </button>
        
        </div>
        <span class="show_msg_span_text">
    
    ${text_input.value}
    
    </span> </div>`;
    


    }
    
    let show_msg_now = document.querySelectorAll('.show_msg_now');
    // msg sending more option
   // let msg_more_window = document.querySelector('.msg_more_window');


    //   let msg_more_option = document.querySelectorAll('.msg_more_option');
    //   msg_more_option.forEach(function(m){
    //       m.onclick = function(){
    //          m.nextElementSibling.classList.remove('msg_more_window_hide');
    //          m.nextElementSibling.classList.add("window_close");
    //       }
          
          
    //   })
      

    //  var itm = document.getElementById("myLit2").lastChild;
    // let msg_last = msg_showing_box.lastChild;
    // var cln = msg_last.cloneNode(true);
    // msg_showing_box.appendChild(cln)


    msg_showing_box.scrollTop = msg_showing_box.scrollHeight;

    text_input.value = '';

    return false;
}



















// for slider.................................

let icon_button_wrapper = document.querySelector('.icon_button_wrapper');
let icon_gallery_slide = document.querySelectorAll('.icon_gallery_slide');
let btn_active = document.querySelectorAll('.btn');
let icon_slide_index = 1;
showIcon(icon_slide_index);

function currentIcon(n) {
    showIcon(icon_slide_index = n);
}


function showIcon(n) {
    for (let i = 0; i < icon_gallery_slide.length; i++) {
        icon_gallery_slide[i].style.display = 'none';
    }
    icon_gallery_slide[icon_slide_index - 1].style.display = 'block';


    btn_active.forEach(function (b) {
        if (b.classList.contains('btn-active')) {
            b.classList.remove('btn-active');
        }
        btn_active[icon_slide_index - 1].classList.add('btn-active');

    })
}


// for toggle text_input_fa
let text_input_fa = document.querySelector('.text_input_fa');
let icon_wrapper = document.querySelector('.icon_wrapper');
let text_write_fa = document.querySelectorAll('.text-write-fa');
text_input_fa.onclick = function () {
    icon_wrapper.classList.toggle('show_icon_wrapper');
    text_write_fa[0].classList.toggle('hide-fa');
    text_write_fa[1].classList.toggle('show-fa');

    // for first slide onclick event
    if (text_input_fa.title === 'Open Expression Picker') {
        text_input_fa.title = 'Close Expression Picker';
    } else {
        text_input_fa.title = 'Open Expression Picker';

    }
    btn_active.forEach(function (b) {
        if (b.classList.contains('btn-active')) {
            b.classList.remove('btn-active');
        }
        btn_active[0].classList.add('btn-active');
    });
    icon_gallery_slide.forEach(function (g) {
        g.style.display = 'none';
    })
    icon_gallery_slide[0].style.display = 'block';

}




// for Emoticons

// Emoticons preview
let icons_list_go_li = document.querySelectorAll('.icons_list_go ul li img');
let icons_preview = document.querySelectorAll('.icons_preview img');
let icons_alt_show = document.querySelectorAll('.icons_alt_show');
icons_list_go_li.forEach(function (i1) {
    i1.onmouseover = function () {
        let getPreviewSrc = this.getAttribute('src');
        let getAltShow = this.getAttribute('alt');
        icons_preview.forEach(function (ico) {
            ico.src = getPreviewSrc;
        })
        icons_alt_show.forEach(function (alt) {
            alt.innerHTML = getAltShow;
        })
        this.title = getAltShow;
    }
})





//for Emoticons slide;

// let icon_button_wrapper = document.querySelector('.icon_button_wrapper');
let emoticons_slide = document.querySelectorAll('ul.emoticons_slide');
// let emoticons_btn = document.querySelectorAll('.btn');
let emoticons_slide_index = 1;

showEmoticons(emoticons_slide_index);

function emoticons_slide_control(m) {
    showEmoticons(emoticons_slide_index = m);
}


function showEmoticons(m) {
    for (let i = 0; i < emoticons_slide.length; i++) {
        emoticons_slide[i].style.display = 'none';
    }
    emoticons_slide[emoticons_slide_index - 1].style.display = 'flex';


    // btn_active.forEach(function(b){
    //     if (b.classList.contains('btn-active')){
    //         b.classList.remove('btn-active');
    //     } 
    //     btn_active[icon_slide_index - 1].classList.add('btn-active');

    // })
}
// for Emoticons slide end








// for GIFs slide

// let icon_button_wrapper = document.querySelector('.icon_button_wrapper');
let GIFs_slide = document.querySelectorAll('ul.GIFs_slide');
// let GIFs_btn = document.querySelectorAll('.btn');
let GIFs_slide_index = 1;

showGIFs(GIFs_slide_index);

function GIFs_slide_control(m) {
    showGIFs(GIFs_slide_index = m);
}


function showGIFs(m) {
    for (let i = 0; i < GIFs_slide.length; i++) {
        GIFs_slide[i].style.display = 'none';
    }
    GIFs_slide[GIFs_slide_index - 1].style.display = 'flex';


    // btn_active.forEach(function(b){
    //     if (b.classList.contains('btn-active')){
    //         b.classList.remove('btn-active');
    //     } 
    //     btn_active[icon_slide_index - 1].classList.add('btn-active');

    // })
}
// for GIFs slide end







// for stickers slide start


// let icon_button_wrapper = document.querySelector('.icon_button_wrapper');
let stickers_slide = document.querySelectorAll('ul.stickers_slide');
// let stickers_btn = document.querySelectorAll('.btn');
let stickers_slide_index = 1;

showstickers(stickers_slide_index);

function stickers_slide_control(m) {
    showstickers(stickers_slide_index = m);
}


function showstickers(m) {
    for (let i = 0; i < stickers_slide.length; i++) {
        stickers_slide[i].style.display = 'none';
    }
    stickers_slide[stickers_slide_index - 1].style.display = 'flex';


    // btn_active.forEach(function(b){
    //     if (b.classList.contains('btn-active')){
    //         b.classList.remove('btn-active');
    //     } 
    //     btn_active[icon_slide_index - 1].classList.add('btn-active');

    // })
}







// for stickers slide end




// for mojis slide start


// let icon_button_wrapper = document.querySelector('.icon_button_wrapper');
let mojis_slide = document.querySelectorAll('ul.mojis_slide');
// let mojis_btn = document.querySelectorAll('.btn');
let mojis_slide_index = 1;

showmojis(mojis_slide_index);

function mojis_slide_control(m) {
    showmojis(mojis_slide_index = m);
}


function showmojis(m) {
    for (let i = 0; i < mojis_slide.length; i++) {
        mojis_slide[i].style.display = 'none';
    }
    mojis_slide[mojis_slide_index - 1].style.display = 'flex';


    // btn_active.forEach(function(b){
    //     if (b.classList.contains('btn-active')){
    //         b.classList.remove('btn-active');
    //     } 
    //     btn_active[icon_slide_index - 1].classList.add('btn-active');

    // })
}


//for mojis slide end


// for appreciation slide start

// let icon_button_wrapper = document.querySelector('.icon_button_wrapper');
let Appreciation_slide = document.querySelectorAll('ul.Appreciation_slide');
// let mojis_btn = document.querySelectorAll('.btn');
let Appreciation_slide_index = 1;

showAppreciation_slide(Appreciation_slide_index);

function Appreciation_slide_control(m) {
    showAppreciation_slide(Appreciation_slide_index = m);
}


function showAppreciation_slide(m) {
    for (let i = 0; i < Appreciation_slide.length; i++) {
        Appreciation_slide[i].style.display = 'none';
    }
    Appreciation_slide[Appreciation_slide_index - 1].style.display = 'flex';


    // btn_active.forEach(function(b){
    //     if (b.classList.contains('btn-active')){
    //         b.classList.remove('btn-active');
    //     } 
    //     btn_active[icon_slide_index - 1].classList.add('btn-active');

    // })
}


// for appreciation slide end





// For search bar Start
function search_icon() {


    let search_icon = document.querySelector('#search-icon');
    let filter = search_icon.value.toUpperCase();
    let ul_li_icon = document.querySelectorAll('.ul_slide li');

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < ul_li_icon.length; i++) {
        let im = ul_li_icon[i].getElementsByTagName("img")[0];
        let txtValue = im.getAttribute('alt');
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul_li_icon[i].style.display = "";
        } else {
            ul_li_icon[i].style.display = "none";
        }
    }
}
// For search bar End


// for icons click event, and it will send the user

let icons_clickable = document.querySelectorAll('.ul_slide li img');

icons_clickable.forEach(function (i) {
    i.onclick = function () {

// for time showing..............
let msg_time = document.querySelector('.msg_time');
let t = new Date();
let h = t.getHours();
let m = t.getMinutes();
let t_position = (h >= 12) ? 'PM' : 'AM';

if (h > 12) {
    h =  h - 12;
} else {
    h = h; 
}













        icon_wrapper.classList.remove('show_icon_wrapper')
        let msg_showing_box = document.querySelector('.msg_showing_box');
        msg_showing_box.innerHTML += `<div class="show_msg_now">
        
        <span class="msg_time">
        ${((h < 10) ? '0' + h : h) + ': ' + ((m < 10) ? '0' + m : m) + ' ' + t_position} 
        
        </span>

        </span>
        <span class="msg_more_option">
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        
        
        </span>
        <div class="msg_more_window msg_more_window_hide"> 
        
        <button class="msg_btn msg_remove_btn"> Remove </button>
        
        </div>
        
        <span style="background: transparent" class="show_msg_span_text">
    <img width="150px" src=${this.getAttribute('src')}>   
    </span> </div>`;

    let show_msg_now = document.querySelectorAll('.show_msg_now');
    // msg sending more option
   // let msg_more_window = document.querySelector('.msg_more_window');








    msg_showing_box.scrollTop = msg_showing_box.scrollHeight;

    };

})






// update the function
let setUpdate = setInterval(updateFunction, 10);

function updateFunction() {

    // for  scroll update...........

    let show_msg_now = document.querySelectorAll('.show_msg_now');
    if (show_msg_now.length > 5) {
        msg_showing_box.setAttribute('style', 'align-items: flex-end');
    } else {
        msg_showing_box.setAttribute('style', 'align-content: flex-end');

    }


    // for msg more option update............


    let msg_more_option = document.querySelectorAll('.msg_more_option');
    let text_input = document.querySelector('#text_input');
    msg_more_option.forEach(function(m,n,o){
       
        if (m.nextElementSibling.classList.contains("window_close")) {
            text_input.onfocus = function(){
                m.nextElementSibling.classList.add('msg_more_window_hide');
            };
           
        }
        m.onclick = function(){
            m.nextElementSibling.classList.toggle('msg_more_window_hide');
            m.nextElementSibling.classList.add("window_close");
         }
    })

    // for remove msg_remove_btn update..............
    let msg_remove_btn = document.querySelectorAll('.msg_remove_btn');
    let msg_send_alert = document.querySelector('.msg_send_alert');
    let btn_send_remove = document.querySelector('.btn_send_remove');
    let btn_send_cancel = document.querySelector('.btn_send_cancel');
    let rvMove = document.querySelector('.rvMove');
    msg_remove_btn.forEach(function(remove){
        remove.onclick = function(){
            msg_send_alert.style.display = 'block';
            this.classList.add('rvMove');
           
        };
        btn_send_remove.onclick = function(){
            rvMove.parentElement.parentElement.remove();
            msg_send_alert.style.display = 'none';
            rvMove.classList.remove('rvMove');
        }
      
        btn_send_cancel.onclick = function(){
            msg_send_alert.style.display = 'none';
            let msg_more_window = document.querySelector('.msg_more_window');
            msg_more_window.classList.add('msg_more_window_hide');

        }
    })    



}

// 



// end