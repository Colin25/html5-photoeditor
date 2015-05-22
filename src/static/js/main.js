/**
 * Created by f0x11 on 2015/4/21.
 */


function drawBeauty(beauty){
    var mycv = document.getElementById("canvas");   //js原生方法获取id=canvas的元素
    var myctx = mycv.getContext("2d");              //canvas方法
    myctx.drawImage(beauty, 0, 0);                  //canvas方法，插入图片
}
function insertPic(picSrc){
    var beauty = new Image();   //新建Image对象，来处理图片
    beauty.src = picSrc;        //填充图片内容，此处可以给链接，也可以给读出的图片内容。
    if(beauty.complete){        //检测image实例是否加载完成，
        drawBeauty(beauty);     //加载完成，画到canvas里。
    }else{
        beauty.onload = function(){ //js原生方法监听beauty的onload事件。onload事件表示加载完成
            drawBeauty(beauty);     //调用函数画beauty
        };
        beauty.onerror = function(){    //监听加载失败事件
            window.alert('美女加载失败，请重试'); //弹框警告
        };
    }
}

function fileSelect() {
    var files = this.files; //this代表触发当前函数的元素，此处为id=file1的元素。this.files为input[type=file]对象的内置方法，获取选中的文件（可多选）。

    for(var i = 0, f; f = files[i]; i++) {  //遍历选中的文件
        var reader = new FileReader();      //html5新技术，具体看文档。实例化一个FileReader对象。
        reader.onload = function() {
            console.log(this);          //打印调试信息，正式环境中需删除
            insertPic(this.result);     //将文件内容传递给insertPic函数。
        };
        //读取文件内容
        reader.readAsDataURL(f);            //读取文件内容，并触发reader的onload事件
    }
}

//TODO: 限制每次只能打开一张
//TODO: 图片打开后大小没有适配
//TODO: 文件格式判断，只能是图片
$(function() {  //jquery domready，元素加载完成
    $("#file1").on("change", fileSelect);   //jquery 监听id=file1元素的change事件，如果该元素的值被改变，触发fileSelect函数。
});