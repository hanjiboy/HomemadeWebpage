$(window).scroll(function(e){
  if ($(window).scrollTop()>0)
    $(".navbar").addClass("at_top");
  else
    $(".navbar").removeClass("at_top")    
});

$("#navbarCollapse, .navbar").click(function(){
  if ($("#navbarCollapse").hasClass("show")){
    $("#navbarCollapse").removeClass("show");
  }    
});

$(document).ready(function(){
  $(".imgname").mouseenter(
    function(){
      $(this).text($(this).attr("name-en"));   
    }
  );
  $(".imgname").mouseleave(
    function(){
      $(this).text($(this).attr("name-ch"));
    }
  );
});

var rolelist={};

rolelist.name="My Best Role";
rolelist.date="2021/12/08";
rolelist.list=[
  {name: "伊澤瑞爾",address: "ADC/射手",attr: "物理輸出",href: "https://tw.op.gg/champion/ezreal/statistics/adc/build"},
  {name: "勒布朗",address: "MID/法師",attr: "魔法輸出",href: "https://tw.op.gg/champion/leblanc/statistics/mid/build"},
  {name: "泰達米爾",address: "TOP/鬥士",attr: "物理輸出",href: "https://tw.op.gg/champion/tryndamere/statistics/top/build"},
  {name: "李星",address: "JG/打野",attr: "物理輸出",href: "https://tw.op.gg/champion/leesin/statistics/jungle/build"}
];

var role_html="<div class='show_name'>{{name}}</div><div class='show_address'>{{address}}</div><div class='show_attr'>{{attr}}</div><a href={{href}} target=_blank>符文頁</a>";

function showrolelist(){
  $("#role_list").html("");
  for(var i=0;i<rolelist.list.length;i++){
    var role=rolelist.list[i];
    var role_id="rolenum_"+i;
    var current_role_html=
        role_html.replace("{{id}}",role_id)
                 .replace("{{name}}",role.name)
                 .replace("{{address}}",role.address)
                 .replace("{{attr}}",role.attr)
                 .replace("{{href}}",role.href);
    if (i == 0){
      $("#role_list_0").append(current_role_html);
    }
    if (i == 1){
      $("#role_list_1").append(current_role_html);
    }
    if (i == 2){
      $("#role_list_2").append(current_role_html);
    }
    if (i == 3){
      $("#role_list_3").append(current_role_html);
    }
  }
}
showrolelist();

$(document).ready(function(){
  $("#imgrole_0").click(function(){
    $("#imgrole_0").hide();
    $("#role_list_0").show(100);
  });
  $("#role_list_0").click(function(){
    $("#imgrole_0").show(400);
    $("#role_list_0").hide();
  });
});

$(document).ready(function(){
  $("#imgrole_1").click(function(){
    $("#imgrole_1").hide();
    $("#role_list_1").show(100);
  });
  $("#role_list_1").click(function(){
    $("#imgrole_1").show(400);
    $("#role_list_1").hide();
  });
});

$(document).ready(function(){
  $("#imgrole_2").click(function(){
    $("#imgrole_2").hide();
    $("#role_list_2").show(100);
  });
  $("#role_list_2").click(function(){
    $("#imgrole_2").show(400);
    $("#role_list_2").hide();
  });
});

$(document).ready(function(){
  $("#imgrole_3").click(function(){
    $("#imgrole_3").hide();
    $("#role_list_3").show(100);
  });
  $("#role_list_3").click(function(){
    $("#imgrole_3").show(400);
    $("#role_list_3").hide();
  });
});


$("#button").click(function(){
  if($("#name").val()==""){
    // swal("怎麼稱呼您呢!?", "請輸入Username", "warning");
    eval("document.formMessage['name'].focus()");
  }else if($("#exampleInputEmail1").val()==""){
    // swal("這樣小編怎麼回覆您呢><", "請輸入E-mail", "warning");
    eval("document.formMessage['email'].focus()");
  }else if($("#exampleFormControlTextarea1").val()==""){
    // swal("說點什麼吧!!", "給我一點Message", "warning");
    eval("document.formMessage['message'].focus()");
  }else{
    swal("感謝您的留言!!", "小編已經收到您的訊息囉!!", "success");
    $("#formMessage")[0].reset();
    return false;
  }
});

var s = skrollr.init();

var myvideolists=[
  {
    name: "李星",
    img_link: "https://www.mobafire.com/images/champion/skins/portrait/lee-sin-classic.jpg",
    video_link: "https://www.youtube.com/embed/0Id5ZM6IGi0"
  },
  {
    name: "柔伊",
    img_link: "https://www.mobafire.com/images/champion/skins/portrait/zoe-classic.jpg",
    video_link: "https://www.youtube.com/embed/QPa17-rtVxo"
  },
  {
    name: "雷葛爾",
    img_link: "https://www.mobafire.com/images/champion/skins/portrait/rengar-classic.jpg",
    video_link: "https://www.youtube.com/embed/H4NiGEdznT8"
  },
];

var vm=new Vue({
  el: "#appvideo",
  data: {
    mode_model: false,
    status: "更換呈現模式",
    myvideos: myvideolists
  },
  methods:{
    changelabel: function(){
      if (! this.mode_model){
        this.status="圖片模式";
      }else{
        this.status="影片模式";
      }
    }
  }
});

