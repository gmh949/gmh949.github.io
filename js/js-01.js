var a = document.querySelector('#a01');
var b = document.querySelector('.main-container-02-top-img div');
// 段子接口函数
function xiaohua() {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "https://res.abeim.cn/api-text_wu?export=json");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var json = JSON.parse(xhr.responseText);
      // console.log(json);
      a.children[0].children[3].innerText = json.content;
    }
  }
}
// 每日一言接口函数
function yiyan() {
  var xhr1 = new XMLHttpRequest();
  xhr1.open("get", "https://res.abeim.cn/api-text_yiyan?export=json");
  xhr1.send();
  xhr1.onreadystatechange = function () {
    if (xhr1.readyState == 4) {
      var json1 = JSON.parse(xhr1.responseText);
      a.children[1].children[3].innerText = json1.content;
    }
  }
}


function yiyan11() {
  var xhr11 = new XMLHttpRequest();
  xhr11.open("get", "http://pv.sohu.com/cityjson?ie=utf-8");
  xhr11.send();
  xhr11.onreadystatechange = function () {
    if (xhr11.readyState == 4) {
      var json11 = JSON.parse(xhr11.responseText);
      console.log(json11);
    }
  }
}

// 情话接口函数
function qinghua() {
  var xhr2 = new XMLHttpRequest();
  xhr2.open("get", "https://res.abeim.cn/api-text_yiyan?export=json");
  xhr2.send();
  xhr2.onreadystatechange = function () {
    if (xhr2.readyState == 4) {
      var json2 = JSON.parse(xhr2.responseText);
      a.children[2].children[3].innerText = json2.content;
    }
  }
}

// 笑话接口函数
function duanzi() {
  var xhr3 = new XMLHttpRequest();
  xhr3.open("get", "https://api.muxiaoguo.cn/api/xiaohua");
  xhr3.send();
  xhr3.onreadystatechange = function () {
    if (xhr3.readyState == 4) {
      var json3 = JSON.parse(xhr3.responseText);
      b.children[0].innerText = json3.data.title;
      b.children[1].innerText = json3.data.content;
    }
  }
}
var bbt = document.querySelector('.bbox input[type=button]')
function baidu() {
  bbt.onclick = function () {
    let hx = document.querySelector('.bbox .p02')
    let ip01 = document.querySelector('.bbox input[type=text]')
    var xhr4 = new XMLHttpRequest();
    xhr4.open("get", "https://res.abeim.cn/api-ip_info?ip="+ ip01.value);
    xhr4.send();
    // 39.170.178.96
    xhr4.onreadystatechange = function () {
      if (xhr4.readyState == 4) {
        var json4 = JSON.parse(xhr4.responseText);
        console.log(json4);
        if(ip01.value != ''){
          hx.innerText = json4.data.ip_pos + ' ' + json4.data.ip_isp;
        }else{
          hx.innerText = json4.msg;
        }
      }
    }
  }
}
window.onload = function () {
  xiaohua();
  yiyan();
  yiyan11();
  qinghua();
  duanzi();
  baidu();
}

$(function () {
  $('.bbox input[type=text]').focus(function () {
    $('.bbox input[type=button]').css({
      width: '60px',
      transition: 'all .3s'
    })
  }).blur(function () {
    setTimeout(function() {
      $('.bbox input[type=button]').css({
        width: '0px'
      })
    },1000)
  })
  $('.button').click(function () {
    alert('特效加载中')
  })
  $('.top-img-text').mouseenter(function () {
    $(this).css({
      transform: 'scale(1.05)',
      transition: 'all .2s'
    })
  }).mouseleave(function () {
    $('.top-img-text').css({
      transform: 'scale(1)',
      transition: 'all .2s'
    })
  })
  $('.top-img-text').click(function () {
    $(this).css({
      transform: 'scale(0)',
      transition: 'all .5s'
    })
    duanzi();
    setTimeout(function () {
      $('.top-img-text').css({
        transform: 'scale(1)'
      })
    }, 1000)
  })
})