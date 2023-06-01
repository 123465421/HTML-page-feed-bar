        document.write('<div class="page" id="page">');
        document.write('<a id="al"><span>«</span></a>');
        document.write('<a href="index1.html"><span>首页</span></a>');
        var i = 1;
     	while(i<=lismax){
        document.write('<a href="index' +i+ '.html"><li>' +i+ '</li></a>');
	    	i++;
      	}
        document.write('<a id="last"><span>末页</span></a>');
        document.write('<a id="ar"><span>»</span></a>');
        document.write('</div>');


    function page(){
        var li = document.getElementsByTagName('li');
        var al = document.getElementById('al');
        var ar = document.getElementById('ar');
        var last = document.getElementById('last');
        var lis = window.lis;//获取html全局变量
        var li1= li[lis-1].style;
        var lismax = window.lismax;//获取html全局插入页面数最大数变量
        var bhref = lis - 1;
        var ahref = lis + 1;
        last.href='index'+ lismax +'.html';
        al.href = 'index'+ bhref +'.html';
        ar.href = 'index'+ ahref +'.html';
        li1.backgroundColor="#1E90FF";
        li1.color="#fff";
        if(lis == 1||lis <1){
          al.style.display="none";
        }
    }
        document.getElementById('page').value = page();