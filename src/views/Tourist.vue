<template>
<div class="bigbox">
  <div class="box">
        <!--第一行(lineFirst) 猫咪-->
        <div class="lineF">
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/cat01.jpg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/cat02.jpeg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="boxF">
                <div class="boxS">
                    <div class="boxT">
                        <div class="overlay">
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/dog01.jpeg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/dog02.jpeg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--第二行(lineSecond)  小狗-->
        <div class="lineS">
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/cat03.jpeg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/cat04.jpg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/dog03.jpg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/dog04.jpeg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--第三行(lineFirst)-->
        <div class="lineT">
              <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-color:#fa9b27;">
                        <div class="overlay">
                            <a href="#">选您所想</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <!-- 第四行 -->
        <div class="lineG">
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/mouce01.jpeg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/mouce02.jpeg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/rabbet01.png);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/rabbet02.jpg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第五行 -->
         <div class="lineH">
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/mouce03.jpg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/mouce04.png);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
             <div class="boxF">
                <div class="boxS">
                    <div class="boxT">
                        <div class="overlay">
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/rabbet03.jpg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boxF">
                <div class="boxS">
                    <div class="boxT" style="background-image: url(img/rabbet04.jpg);">
                        <div class="overlay">
                            <a href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
export default {
  
}
</script>

<style  scoped type="text/css">
body, div, img, ul, li {
            margin: 0;
            padding: 0;
        }
body {
            font-size: 12px;
            background-color: #DDD;
            min-width: 1200px;
        }
ul,ul li {
            list-style: none;
        }
.clear {
            clear: both;
        }
.bigbox{
  width: 1400px;
  height: 1000px;
  background-color: #fbd640;
  margin-left: 300px;
}
.box {
            position: relative;
            width: 1350px;
            height: 1000px;
            margin: 0px 150px;
           
        } 
.lineF,.lineS,.lineT,.lineG,.lineH{
            position: absolute;
            visibility: hidden;
        }
.lineS {
            top: 182px;
            left: 105px;
        }
.lineT {
           top: 364px;
           left: 421px;
        }
.lineG {
         top: 549px;
         left: 110px;
}
.lineH{
         top: 738px;
         left: 2px;
}
.boxF,.boxS,.boxT,.overlay {
            width: 200px;
            height: 250px;
            overflow: hidden;
        }
.boxF,.boxS {
            visibility: hidden;
        }
.boxF {
            transform: rotate(120deg);
            float: left;
            margin-left: 10px;
            -ms-transform: rotate(120deg);
            -moz-transform: rotate(120deg);
            -webkit-transform: rotate(120deg);
        }
.boxS {
            transform: rotate(-60deg);
            -ms-transform: rotate(-60deg);
            -moz-transform: rotate(-60deg);
            -webkit-transform: rotate(-60deg);
        }
.boxT {
            transform: rotate(-60deg);
            background: no-repeat 50% center;
            background-size: 200% auto;
            -ms-transform: rotate(-60deg);
            -moz-transform: rotate(-60deg);
            -webkit-transform: rotate(-60deg);
            visibility: visible;
        }
.overlay {
            transition: all 250ms ease-in-out 0s;
            display: none;
            position: relative;
        }
.overlay:hover {
            background-color: rgba(0, 0, 0, 0.6);
        }
.boxT:hover .overlay {
            display: block;
        }
.overlay a {
            display: inline-block;
            position: absolute;
            left: 35%;
            top: 45%;
            margin: 0px 10px -40px -16px;
            border-radius: 3px;
            background-color: #d3b850;
            text-align: center;
            line-height: 32px;
            width: 100px;
            height: 32px;
            text-decoration: none;
            color: White;
            font-size: 18px;
            font-weight: bolder;
        }
</style>