<template>
  <div class="main">
    <div>
      <Carousel autoplay v-model="value2" loop>
        <div v-for="i in src">
	        <CarouselItem>
	          <div class="demo-carousel"><img :src="i.src" class="main_img"></div>
	        </CarouselItem>
      	</div>
      </Carousel>
    </div>
    <div>
      <input class="main_div_div" placeholder="请输入书名/作者名/主角名" />
    </div>
    <div class="all">
      <div class="main_font">主编推荐</div>
    </div>
    <div class="all">
      <div class="all_div">
      	<div class="all_div_left"><img :src="srca[0].src" class="all_div_left" /></div>
      	<div class="all_div_right">123</div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0,
                src:'',
                srca:[]
                
            }
        },
         created() {
        this.$http.post('/api/lubo/lubos').then((data) => {
          this.src = data.body.data;
         
        }
     	 ),
        this.$http.post('/api/img/imgs').then((data) => {
          this.srca = data.body.data;
          console.log(this.srca)
         }
       )
      }
    }
</script>
<style>
  *{
    margin: 0 auto;
  }
  .main{
    float: left;
    width: 750px;
  }
  .main_div_div{
    border-radius: 6.667vw;
    background-color: #fcfdf8;
    width: 660px;
    height: 11.133vw;
    margin-top: -53.667vw;
    position: fixed;
    left: -43vw;
    border: 0;
    text-align: center;
    margin-left: 50%;
  }
  .main_img{
    width: 750px;
    height: 404px;
    background-size: 100%;
  }
  .main_font{
    float: left;
    width: 750px;
    color: #000;
    border-bottom: 1px solid #f1f2ee;
    font-size: 30px;
    text-indent: 25px;
    height: 114px;
    line-height: 114px;
  }
  .all{
    float: left;
    width: 750px;
  }
  .all_div{
  	float: left;
  	width: 750px;
  	margin-top: 39px;
  }
  .all_div_left{
  	float: left;
  	width: 362px;
  	height: 450px;
  	background-size: 100%;
  }
  .all_div_right{
  	float: left;
  }
</style>
