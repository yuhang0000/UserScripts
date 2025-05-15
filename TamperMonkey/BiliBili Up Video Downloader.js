// ==UserScript==
// @name         BiliBili Up Video Downloader
// @namespace    http://tampermonkey.net/
// @version      v0.6_2025-5-13
// @description  浏览器侧控制脚本, 与客服端搭配使用.
// @author       欲行肆灵
// @match        *://*/?action=websocket*
// @match        *://*/*/?action=websocket*
// @match        *://*/*/*/?action=websocket*
// @match        *://*/*/*/*/?action=websocket*
// @match        *://*/*/*/*/*/?action=websocket*
// @match        *://*?action=websocket*
// @match        *://*/*?action=websocket*
// @match        *://*/*/*?action=websocket*
// @match        *://*/*/*/*?action=websocket*
// @match        *://*/*/*/*/*?action=websocket*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAACxLAAAsSwGlPZapAAAGymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI1LTA0LTA0VDAxOjUzOjMwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNS0wNC0wNFQwMTo1ODoyNSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNS0wNC0wNFQwMTo1ODoyNSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmOWY2ZDkyYy1iNWQwLWJiNDgtODRlOC1hYTE1NWQyMWQ5OGUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmNTgwZDI3Ny1kMmZiLWJiNDktYjZlMC0xN2E2NDBiNWQyNTIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmODI2OTFmNi1iODEzLTg5NDgtODczNy01OTcwYWZmMmJhOGIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY4MjY5MWY2LWI4MTMtODk0OC04NzM3LTU5NzBhZmYyYmE4YiIgc3RFdnQ6d2hlbj0iMjAyNS0wNC0wNFQwMTo1MzozMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiODc3NTQ3OC1mNzMwLTUxNGYtYTQ1Yi03MWY5MWM5YzRiZjQiIHN0RXZ0OndoZW49IjIwMjUtMDQtMDRUMDE6NTg6MjUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjlmNmQ5MmMtYjVkMC1iYjQ4LTg0ZTgtYWExNTVkMjFkOThlIiBzdEV2dDp3aGVuPSIyMDI1LTA0LTA0VDAxOjU4OjI1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GbFAiQAAA6ZJREFUWMPFl0+LHFUUxX+vujMTZ6YZTZgEWjCOEhBFEV2EIG6yCbjIRnEhuvIDuMk3cekXEFeCIC4VxJ078Q+KopKJoGkzMj3T9arePS7eq+rq6n/VySJFN/ferqLOfeeee99rJ4lHefUBRqPRGNhuJ/MwcYdn8+FwuNtPcU/Sx8BXG7zgTZf/dZP/fkAKyAwUkAysZdN9WQAZbvCM3MH1Xs1AevnXwEddaEvPX5W/f9Od/ALbl8FKZGUErazKCGrRykp0ehdngd7B9WkJNrlmmJCQOweD58ACTgG1LCkZFGJS5SSy0tTAA4FDonkKoDlbMTF7zynMJ9BFYHMdI0NW1ivuAh7LYfW7+l3AlreqUs07gtdJTBnIulC9vCSRgU3A4/MrNLDJYIqt1dKA2fKVKyaGWiVIwM8Cr20gxieRZlQ/03pL6U/3mwxIAgu3ZXZ7hoVk51pPgl4fsOkLu4Cv6oLxN58p//FbZ0WJFSVKdlGsouSJW+8weGUYu2ADcJZpQCbc/mXOHVzB+QKK+HUtiy8Y/fwdClaPV60DnUtikQaCoSAyejhn4ALOZUCGS1/IcC5DZQSPbbhqEC3rglYbSkIhoHqlPlof4yYLrihQUaTNJ3bBJgyQGJibAwoGRbkWHF+goozPpy6YnwXdGWiUIDHgW4CV3/hdRTVODU3+ofz905kdr9oZZ+KQ4mKMGzy9QANlQL5cA+6hKkEw3OPP03/hA8kUW1JCCEwoxXXbKmpGEu78wfwciCVYD95kYDQZ8OvfV12QKAVBIgiCaeor+Tb1r1zo69r+ghKY92hyNlMKNYRXJWA+ivB4bPx05Nl5DLyBN+ENitpXw4/25Kzk1UJce+r8fBuO7/7JyR+/LR0+TX83GCbhenDpYkYeYhJ5cOQGPhCtQV75AU7DGaGx29Yl2H/jbTe4cSvViUb9GuMXxY9Eb2/Av8dxVV3BK1s2RnvNQLaz92G2s/d5Y/YPgE+AdyXdW7AZvW/H/q0i0dsFPDcoLGpj0Xb8PfBFI76YgL4E7izYFG+YYr27gvvEVDBWnwdWnQma94M0FVgH8DwJMYjVR7JllzVGaLVbF6YpyDrw4PA2q4Gs64moDQ5gUg3aBXydBtaejNtXEJwWgTv38tT/0373oRmTZoIYTzxBWwuP5a+3wHeT+x5wfwFTL1/YzXhpuKWgSGuw6fQr66lYxRDkCNrixUvb9eKcJI6Ojo6B7Yf4o/kgcX54eLjvHvXf8/8B/5/xSVM7TdMAAAAASUVORK5CYII=
// @grant        none
// ==/UserScript==

(function() {
    //这是延时
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let socket;
    let getcommentnum = 500; //設置留言抓取上綫
    let areuok = false;

    function socketget(){
        socket = new WebSocket("ws://127.0.0.1:65532");
        window.socket = socket;
        socket.onopen = function(){
            console.log("# WebSocket: 连接成功");
            justdoit();
        }
        socket.onclose = function(){
            console.log("# WebSocket: 连接断开");
            if(areuok == false){
                socketget();
            }
            return;
        }
        socket.onmessage = function(data) {
            console.log("# WebSocket: 接收讯息: \r\n" + data.data);
            let newcommand = data.data;
            if(newcommand.indexOf(';') != -1){
                let data = newcommand.split(';');
                command(data);
            }
        }
    }

    //执行指令
    function command(data){
        if(data[0] == "biliupvideodown"){
            if(data[1] == "gotovideopage"){ //下载影片详情耶, 评论, 封面, 弹幕, 字幕
                getcommentnum = data[2]; //设置评论采集上限
                downloadvideo(null,data[3],null);
            }
        }
    }

    async function findvideolist(){
        //获取视频数量
        let num = document.querySelector(".contribution-item.cur");
        //遍历列表
        let a = document.querySelectorAll(".small-item");
        if(num == null){
            await delay(1000);
            findvideolist();
            return;
        }
        num = num.querySelector(".num");
        num = num.innerText;
        console.log('# 总计 ' + num + ' 个视频');
        if(a.length == 0 && num != 0){ //重试
            await delay(1000);
            findvideolist();
            return;
        }
        let pagemax = document.querySelector(".be-pager-total");
        pagemax = pagemax.innerText;
        pagemax = pagemax.substring(pagemax.indexOf("共") + 2 , pagemax.indexOf("页") - 1);
        let page = document.querySelector(".be-pager-item-active");
        page = page.querySelector("a");
        page = page.innerText;
        console.log('# 总计 ' + pagemax + ' 页 , 当前第 ' + page + " 页");

        async function doit(b){ //整理材料在这里
            let c = b.querySelector("a[class='title']");
            let title = c.getAttribute('title');
            //封面
            c = b.querySelector("img");
            c.crossOrigin = "anonymous";
            //console.log(c);
            if(c.complete != true || c.naturalWidth == null || c.naturalWidth == 0){
                //console.log('重试');
                await delay(10);
                await doit(b);
                return;
            }
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            canvas.width = c.naturalWidth;
            canvas.height = c.naturalHeight;
            ctx.drawImage(c, 0, 0);
            let base64 = canvas.toDataURL('image/png');
            base64 = base64.substring(base64.indexOf(";") + 1);
            //console.log(base64);
            //let cover = c.src;
            let cover = base64;

            c = b.querySelector(".play");
            c = c.querySelector("span");
            let playnum = c.innerText;
            c = b.querySelector(".time");
            let time = c.innerText;
            let bv = b.getAttribute('data-aid');
            let post = title + ";" + playnum + ";" + time + ";" + bv;
            console.log(post);
            socket.send("biliupvideodown;videolist;" + cover + ";" + post);
        }

        //console.log(a);
        async function find(){
            for(let b of a){ //遍历循环在这里
                await doit(b);
            }
        }

        await find();

        if(Number(page) < Number(pagemax)){ //页数不够自动跳转至下一页
            let next = document.querySelector(".be-pager-next");
            next.click();
            await delay(1000);
            findvideolist();
            return;
        }

        console.log('# 完成');
        socket.send("biliupvideodown;videolist;ok");
        areuok = true;
        try{ socket.Close(); }catch{};
        //closepage();

        /*find().then(function(){
            if(page < pagemax){ //页数不够自动跳转至下一页
                retry();
                return;
            }

            console.log('# 完成');
            socket.send("biliupvideodown;videolist;ok");
            areuok = true;
            socket.Close();
        });

        async function retry(){
            let next = document.querySelector(".be-pager-next");
            next.click();
            await delay(1000);
            findvideolist();
        }*/
    }


    //开启 WebSocket 监听
    (async function(){
        await delay(0);
        socketget(); }
    )();

    //下载影片
    async function downloadvideo(path = null,option = "1-1-1-1-1",title){
        option = option.split("-"); //选项, 设置哪些能下载分别是: 脱机网页,影片,封面,弹幕,字幕
        let commentnum; //留言總數
        let bilicomments

        //看看留言數
        async function findcomment(){
            try{
                bilicomments = document.querySelector("bili-comments");
                bilicomments.scrollIntoView();
                let a = bilicomments.shadowRoot.querySelector("div[id='header']");
                a = a.querySelector("bili-comments-header-renderer");
                a = a.shadowRoot.querySelector("div[id='count']");
                commentnum = a.innerText;
                console.log("# BiliBili Up Video Downloader: 总计 " + commentnum + " 条评论");
                await delay(1000);
                if(option[0] == "1"){
                    await pagedown();
                }
            }
            catch{
                await delay(1000);
                await findcomment();
                return;
            }
        }

        //遍历留言
        async function pagedown(){
            window.scrollTo(0, 4294967295);
            let a = bilicomments.shadowRoot.querySelector("div[id='feed']");
            if(a == null){ //评论列表不存在就刷新
                await delay(1000);
                await pagedown();
                return;
            }
            a = a.querySelectorAll("bili-comment-thread-renderer");
            let bottombar = bilicomments.shadowRoot.querySelector(".bottombar");
            if(a.length < getcommentnum && bottombar == null){ //不滿足充實
                await delay(2000);
                await pagedown();
                return;
            }
            else{ //收購
                console.log("# BiliBili Up Video Downloader: 总抓取: " + a.length + " 条评论");
                await delay(2000);
                let num = a.length;
                while(num > 0 && num != 0){
                    num--;
                    a[num].scrollIntoView();
                    await delay(100);
                }
                window.scrollTo(0, 0);
                console.log("抓取完毕");
                socket.send("biliupvideodown;videopage;ok");
            }
        }

        /*
        async function acghelperdown(){ //下载弹幕, 太懒了, 用 BiliHelper
            let a = document.querySelector("[id='bilibiliHelper2HandleButton']");
            a.click();
            await delay(1000);
            if(option[3] == "1"){
                a = document.querySelector(".load-danmuku-button");
                a = a.querySelector("button");
                a.click();
            }
            if(option[4] == "1"){
                a = document.querySelector(".load-danmuku-button");
                a = a.querySelector("button");
                a.click();
            }
        }
        */

        await findcomment();
        if(title == null) { //当标题未设置时, 直接从页面上获取.
            let title = document.querySelector(".video-info-title-inner");
            title = title.querySelector("h1").getAttribute("title");
            //console.log(title);
        }
        //acghelperdown(); //转由客户端下载
    }

    //调试 - 影片详情耶, 评论, 封面, 弹幕, 字幕
    //downloadvideo();

    //自动化任务
    function justdoit(){
        if(window.window.location.href.indexOf('space.bilibili.com') != -1){ //获取视频列表
            findvideolist();
        }
        if(window.window.location.href.indexOf('bilibili.com/video') != -1){ //下载影片
            //downloadvideo();
        }
    }

    //关闭当前标签页
    function closepage(){
        console.log("关闭当前页");
        window.opener = null;
        window.open('','_self');
        window.close();
    }
    window.closepage = closepage;

})();