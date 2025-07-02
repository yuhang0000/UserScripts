// ==UserScript==
// @name         B站個人主頁優化 (歸檔員自用)
// @namespace    http://yuhang0000.github.io/
// @version      v1.8_2024-10-18
// @description  Bili 個人主頁優化.
// @author       欲行肆灵
// @match        https://space.bilibili.com/*
// @match        https://t.bilibili.com/*
// @grant        none
// @license      GPLv3
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACnklEQVRYR+2XX0hTURzHv9edXVuNNaFhm+CLiBXh8qXaUGRBD+YCX8oSwerm34cG+RKxMGlILxMEwYxuTVCazxV7S8Q0eskUscboIWOzWpDWck5n9rDuzXO3dbu4raA+cGHn+/ve8/vew93ZGfBXolIRNPd40P/kAzrcXmi0OqlFFo1Whw63F/2TYTT3eKBSEaklPZV1TRia3xQv58ikohAarQ7OkUlqjsq6JqkNAFKnystTUePSCis6B31wt9YgGvlM1aRotDp0DvpQWmGl9DQrwEgFAABRs7jiGUuaJDA9BXfbCUS/LFO6QLrmgekp3DxnQ3x9jdKRLgDw68lShVDq/8HPAETNwlbfBkvtWRSVHsSOndotvu2zuhJBMDCHp4/uY2z0lrAaiQAFhUW4PPAQxfsOUTdli4VXL9Dbbsen90EGRM2ia/RZzpoLLPhn0F1/hMB2ujXnzQGguMwM26kWAou9gSrMTvjAOzkshRcpfbvoDUZwLh7lVTWiZrE3MOBnYiBqVhQd1aaMNxfQG4zoGw+J4/hajFDNAWStOZA8N2HzU+5OuUQ+QHlVDTgXDwDgnRxmJ3wSB41CP4Oh+U1KaTpA74594yHoDUYAiSV0VJuouhQ5v6Sf/AoIk0k/p0OhXz5AlpEPsBReFJ9k+eM7STUZhX75AHevXQTn4vFtYwP3ulqk5SQU+uVfwkyj+CXMMv8DEMTX16jfA73BmLRnZ4rde/ZS49WVCMGb+ecoMR8VxQs37oB3cr/zFVJEQWERznffprRgYI7B8cZLaLzaRxVyxXCPgwFh8xNHsjKztJ5V3vpncb3+8B86lPpn0NtWmziUChA1i2Nn2mE92QhTyX7ka3ZtuWX7xKJfEXr9ElMPhvHYO5DqT8q/yXdT6gC1Lkc+ZAAAAABJRU5ErkJggg==
// ==/UserScript==

(function() {
    'use strict';

    // 定义一个函数来检查和修改每个 .bili-album 元素 (北站又 TM 改界面，现在是检查 .bili-dyn-gallery 元素)
    function modifyAlbums() {
        const albums = document.querySelectorAll('.bili-dyn-gallery');

        albums.forEach(album => {
            if (album.querySelector('.bili-album__preview')) return; // 如果已经修改过，跳过
            fiximg(album,"bili-dyn-gallery");
        });

        //我恨以条动态放 18 张图

        const data_totals = document.querySelectorAll('div.bili-album__preview__picture.total-mask');
        data_totals.forEach(data_total => {
            let data_tota;
            data_tota = data_total.parentElement;
            let delDOM = data_tota;
            data_tota = data_tota.parentElement;
            delDOM.remove();
            delDOM = data_tota;
            data_tota = data_tota.lastChild;
            data_tota = data_tota.lastChild;
            data_tota = data_tota.querySelector('.bili-album__watch__track__slider');
            //data_tota = data_tota.firstChild;
            fiximg(data_tota,"18-img");
            delDOM = delDOM.querySelector('.bili-album__watch');
            delDOM.remove();
        });
    }


    function fiximg(album, style_div){

            // 新增代码块开始

            //图片组
            let imgPack = [];

            let imgclick = false;

            const newImgDiv = document.createElement('div');

            const divL = document.createElement('div');
            const divC = document.createElement('div');
            const divR = document.createElement('div');

            //图片左边
            divL.style.position = "absolute";
            divL.style.top = "0";
            divL.style.height = "100%";
            divL.style.cursor = "pointer";
            divL.style.left = "0";
            divL.style.width = "20%";
            //鼠标点击
            divL.addEventListener('click', function() {
                let divL1 = divL.parentElement;
                let firstChild = divL1.parentElement;
                divL1 = divL1.lastChild;
                divL.style.display = '';
                divR.style.display = '';
                if(firstChild.id != 0)
                {
                    divL1.src = imgPack[parseInt(firstChild.id) - 1];
                    firstChild.id = parseInt(firstChild.id) - 1;
                    if(firstChild.id == 0)
                    {
                        this.style.display = 'none';
                        this.style.cursor = 'zoom-out';
                    }
                }
                else
                {
                    imgclick = true;
                    this.style.cursor = 'zoom-out';
                    newImgDiv.style.display = 'none';
                }
            });
            //鼠标经过
            divL.addEventListener('mouseover', function() {
                let divL1 = divL.parentElement;
                let firstChild = divL1.parentElement;
                if(firstChild.id != 0)
                {
                 imgclick = false;
                 this.style.cursor = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA8CAYAAAADm2gpAAAAAXNSR0IArs4c6QAAAsVJREFUaAXtmUur2kAUx5NYUXtFiwtx0UU30iLcRWlx4aa4E8W29wv0G/QLlO5vP0BpN1210G0X9YlQC4ILKYLQhctaaF0IPrjx/Uj/I02ITXI1cSZCyUBwPJnM+eU/J5k5GZ6zsRSLxbs8z7/dbDYPXS5Xb7VaXWYymXc2InBcLpdLAkTsdDrr+XwuDQYDqVqtXhUKhRcEhLeDhkBAgc/xePwsFAopLmezGQeYWTgcDgiKlVHFCIK483q9nNvtXnS73TtMQa6DICCLxYIcHqj18wYxsCj7ICRJ4prN5hjB+zqdTs+ZKHIIRKPRmIxGo68+n+8lEYJ6sB4KMRwOqx6P52kymVxRB7EKQRXkGAhqIMdCUAGhAXE0CC2Io0BoQlgGoQ1hCYQFhGkQVhCmQFhCHAzCGoKA7J30TEB8Uc8dpHMz5dpJzyTEhTyBmQGQ2xqC2AlBYHRB7IbQBTkFhAbkVBA7IKeEUEAOhBj/Xd4d9XQQp3qFL5fL95ACfvs3+ZEbk9U2FrpMIYgvAY7exGIxnzoDsxtiCwI1HkQiEd03LPKOYb/f/443JpPhkG94CyIIQm8ymahtSj0ajd5CAnSO8xnFyKgirNfrV61WS4QyGheBQIBLJBI3AfsRAf1Y04C2AZ8LPtRqNRFQCBltQUYmoc2YOQxc8w6M3vA6yuipQmyOMo4yRgoY2Z2Y+e+UyefzT4xuiordTMw4MFBrp8hLCEeZHVnwx1Fm37LTiRmjmMGe3iMqLzejTuB474K81+uR7OA36UP3Q41R52btBKZUKr33+/0XyI/OkB9puqhUKiSNOdee0TS1bkCWKKVSqWeiKH6q1+tjvSQOe78ubDBeWfdi4kr1MGEzUQmXdru9hGI10hXToVGzEhh8ArnE7/NgMLiYTqfCcrn8gSOdzWZ/2QYiQ+EpuY36fQB1sbvZxPBtk+4/aTj+WpXZtpcAAAAASUVORK5CYII=),pointer";
                }
                else
                {
                    imgclick = true;
                    this.style.cursor = 'zoom-out';
                }
                });
            //鼠标经出
            divL.addEventListener('mouseout', function() {
                 //this.style.cursor = 'default';
                 imgclick = true;
            });

            /*图片中间
            divC.style.position = "absolute";
            divC.style.top = "0";
            divC.style.height = "100%";
            divC.style.cursor = "pointer";
            divC.style.left = "20%";
            divC.style.width = "60%";
            divC.addEventListener('click', function() {
                 newImgDiv.style.display = 'none';
            });
            divC.addEventListener('mouseover', function() {
                 this.style.cursor = 'zoom-out';
            });
            divC.addEventListener('mouseout', function() {
                 //this.style.cursor = 'default';
            });
            */

            //图片右边
            divR.style.position = "absolute";
            divR.style.top = "0";
            divR.style.height = "100%";
            divR.style.cursor = "pointer";
            divR.style.left = "80%";
            divR.style.width = "20%";
            divR.addEventListener('click', function() {
                let divR1 = divR.parentElement;
                let firstChild = divR1.parentElement;
                divR1 = divR1.lastChild;
                divL.style.display = '';
                divR.style.display = '';
                if(firstChild.id != imgPack.length - 1)
                {
                    divR1.src = imgPack[parseInt(firstChild.id) + 1];
                    firstChild.id = parseInt(firstChild.id) + 1;
                    if(parseInt(firstChild.id) == imgPack.length - 1)
                    {
                        this.style.display = 'none';
                        this.style.cursor = 'zoom-out';
                    }
                }
                else
                {
                    imgclick = true;
                    this.style.cursor = 'zoom-out';
                    newImgDiv.style.display = 'none';
                }
            });
            divR.addEventListener('mouseover', function() {
                let divR1 = divR.parentElement;
                let firstChild = divR1.parentElement;
                if(parseInt(firstChild.id) != imgPack.length - 1)
                {
                    imgclick = false;
                    this.style.cursor = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA8CAYAAAADm2gpAAAAAXNSR0IArs4c6QAAAhNJREFUaAXtmb9OwlAUxttLiYkV0plB4sgLODC5QRTiYqIbcXDyHXwMEyMMbg7GBfmzEBISIDHdGYU3KLQQEwp4LvHE5oJJIfTS4XQ5vdDe+/V3Ttp+PaoCW7PZ1BzHuY1Go2fz+bwfiUSKmUzmi/8na1Or1eoBY8w0DOMkkUjo4/HY7ff737PZrJDL5d5lCVFAyINpms7Csw2Hw0W9Xh+Xy+UrWUIYpOEimUzq3gXj8biSTqcPIVUvssQwVVWt6XTq1bHcj8ViUsUwEPHY6/UcqIm9i1FqtdpTq9VyXNf1VMrf7mg0klMzsKQKxVkiMWJREBmRCI6JDJIQI5ERieA4dGTgDlwMzU2PxGCdeCOvGSLjJYL7RAZJiJHIiERwTGSQhBg3JHPOz1fFSXY15mLghfxZ1/UbMGs6GLmVqS3LUrrdrgWG7pit/LujH8C4LbLZ7B146dd2uz1c55vAbyvcyNm2fRqYEH49XIzf69L8HrjNcfx5BKm5htQc/ZcaoKFAaj63md/XOb8PRduHe1wWq69JNz1oAxHBffYgEZg2IkEkkABGqgkigQQwUk0QCSSAkWqCSCABjGGpCd4m8fOiG9w7ZqVSuWw0GvsVAWlhmqbdp1Kptb6De45OpzOBLlchn8+/YRqDiLynZ0ATcWVumSL44gwM0MdgMJh4lcgWwdcOTQN6+VlCaMl/gU8tyW7J/wCJLeOSU2dAQgAAAABJRU5ErkJggg==),pointer";
                }
                else
                {
                    imgclick = true;
                    this.style.cursor = 'zoom-out';
                }
                });
            divR.addEventListener('mouseout', function() {
                 //this.style.cursor = 'default';
                 imgclick = true;
            });

            newImgDiv.className = 'bili-album__preview__picture__img b-img';
            newImgDiv.style.display = 'none';
            newImgDiv.style.marginBottom = '4px';

            //点击介个大图时
            newImgDiv.addEventListener('click', function() {
                if(imgclick == true){
                    newImgDiv.style.display = 'none';
                }
            });
            newImgDiv.addEventListener('mouseover', function() {
                 this.style.cursor = 'zoom-out';
            });

            const newPicture = document.createElement('picture');
            newPicture.className = 'b-img__inner';

            const newImg = document.createElement('img');
            newImg.src = 'none';
            newImg.loading = 'lazy';
            newImg.style.objectFit = 'cover';

            newPicture.appendChild(divL);
            //newPicture.appendChild(divC);
            newPicture.appendChild(divR);
            newPicture.appendChild(newImg);
            newImgDiv.appendChild(newPicture);
            let parent = album.parentElement;
            parent.appendChild(newImgDiv);

            // 将新增的元素置于最顶层
            if (style_div == "18-img"){
                parent = parent.parentElement;
                parent = parent.parentElement;
                parent.prepend(newImgDiv);
            }
            else{
                parent.prepend(newImgDiv);
            }

            // 新增代码块结束

            function imgclickink()
            {
                imgclick = true;
            }

            //先判断 div 类型再枚举 img
            let images;
            if (style_div == "18-img"){
                images = album.querySelectorAll('.bili-album__watch__track__item');
            }
            else{
                images = album.querySelectorAll('.b-img__inner');
            }

            //console.log(images)
            if (images.length == 3) {
                createPreviewLayout(album, images, 3, style_div);
            }
            else if (images.length <= 4) {
                createPreviewLayout(album, images, 2, style_div);
            }
            else {
                createPreviewLayout(album, images, 3, style_div);
            }

        // 创建预览布局的函数
        function createPreviewLayout(parent, images, gridType, style_div) {
        if(runtimes == 0)
        {
            console.log("===========================================================================");
        }
        runtimes = runtimes + 1
        console.log("No." + runtimes + "  Style: " + style_div);
        const previewWrapper = document.createElement('div');
        previewWrapper.className = `bili-album__preview grid${gridType}`;

        //let imgPack = [];

        for (let i = 0; i < images.length; i++) {
            const pictureDiv = document.createElement('div');
            pictureDiv.className = 'bili-album__preview__picture';

            const imgDiv = document.createElement('div');
            imgDiv.className = 'bili-album__preview__picture__img b-img';
            imgDiv.appendChild(images[i]);

            let parent2 = images[i].lastChild;
            let imgraw;
            if (parent2.src.indexOf('@') !== -1) {
                imgraw = parent2.src.substring(0, parent2.src.indexOf('@'));
            }
            else
            {
                imgraw = parent2.src
            }
            imgPack.push(imgraw);
            console.log("第 " + i + " 张图片: " + imgPack[i]);

            //图片点击放大事件
            function zoomimg(here){

                let parent = here.parentElement;
                parent = parent.parentElement;
                parent = parent.parentElement;
                parent = parent.parentElement;
                if (style_div == "bili-dyn-gallery")
                {
                    parent = parent.parentElement;
                }
                var firstChild = parent.firstChild;
                firstChild.style.display = '';
                firstChild.id = i;
                firstChild = firstChild.firstChild;
                //let divL = firstChild.firstChild;
                //let divR = firstChild.children[1];
                firstChild = firstChild.lastChild;
                let zoomimg;
                if (parent2.src.indexOf('@') !== -1) {
                    zoomimg = parent2.src.substring(0, parent2.src.indexOf('@'));
                }
                else
                {
                    zoomimg = parent2.src
                }
                firstChild.src = zoomimg;

                //判断是否显示 divL & divR

                if(i == 0)
                {
                    divL.style.display = 'none';
                    divR.style.display = '';
                }
                else if(i == imgPack.length - 1)
                {
                    divL.style.display = '';
                    divR.style.display = 'none';
                }
                else
                {
                    divL.style.display = '';
                    divR.style.display = '';
                }

                imgclickink();

            }

            // 添加点击事件监听器
            if (style_div == "18-img"){
                let fuckU = document.createElement('div');
                fuckU.className = "b-img__inner";
                images[i].parentElement.appendChild(fuckU);
                fuckU.appendChild(images[i].firstChild);
                fuckU.addEventListener('click',function(){zoomimg(this)});
                images[i].remove();
            }
            else{
                images[i].addEventListener('click',function(){zoomimg(this)});
            }

            pictureDiv.appendChild(imgDiv);
            previewWrapper.appendChild(pictureDiv);
        }

        parent.innerHTML = ''; // 清空原有内容
        if (style_div == "18-img"){
            let moveDOM = parent.parentElement;
            moveDOM = moveDOM.parentElement;
            moveDOM = moveDOM.parentElement;
            moveDOM = moveDOM.parentElement;
            moveDOM = moveDOM.firstChild;
            moveDOM.appendChild(previewWrapper);
        }
        else{
            parent.appendChild(previewWrapper);
        }
        console.log("总计 " + imgPack.length + " 张图片");
        console.log("===========================================================================");
        //return imgPack;
    }

    }

    // 初始化检查
    var runtimes = 0;
    //modifyAlbums();

    //重复运行
    (async function autorun() {
        await modifyAlbums();
        setTimeout(autorun, 1000);
    })();

})();