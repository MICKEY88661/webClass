const express = require('express')
const app = express()

// static靜態頁面
// __dirname路徑
// + 資料夾（靜態網內容）
app.use(express.static(__dirname + '/public'));

app.get('/q', function (req, res) {

  const hw = [
    {
      "img": "https://www.acuvue.com.tw/sites/acuvue_tw/files/styles/medium/public/products_oasys.png",
      "link": "https://www.acuvue.com.tw/contact-lenses/acuvue-oasys1day",
      "subtitle": "嬌生安視優",
      "title": "歐舒適每日拋",
      "originalPrice": "950",
      "specialOffer": "800"
    },
    {
      "img": "https://www.acuvue.com.tw/sites/acuvue_tw/files/styles/medium/public/1-day-acuvue-trueye.png",
      "link": "https://www.acuvue.com.tw/contact-lenses/acuvue-trueye-1-day",
      "subtitle": "嬌生安視優",
      "title": "恆潤氧每日拋",
      "originalPrice": "750",
      "specialOffer": "600"
    },
    {
      "img": "https://www.acuvue.com.tw/sites/acuvue_tw/files/styles/medium/public/1-day-acuvue-moist.png",
      "link": "https://www.acuvue.com.tw/contact-lenses/acuvue-moist-1-day",
      "subtitle": "嬌生安視優",
      "title": "超涵水每日拋",
      "originalPrice": "550",
      "specialOffer": "450"
    }
  ]

  function _printProductCard(hw) {
    for (let c = 0; c < hw.length; c++) {
      productCards +=
        `<div class="product-wrap" 
              style=" margin: 50px ;
                      border: 1px solid #ddd;
                      border-radius: 2px;
                      padding: 20px;
                      width: 200px;
                      display:inline-block;
                      text-align: center">

        <a href="${hw[c].link}">
             <img src="${hw[c].img}" 
             alt="${hw[c].subtitle}+${hw[c].title}" 
             style="border: 1px solid #ddd;
                    border-radius: 4px;
                    padding: 5px;
                    width: 150px;">
         </a>

        <h2>${hw[c].subtitle}</h1>
        <h3>${hw[c].title}</h4>
        <p><span style="color:gray;
                        text-decoration: line-through;">
                        $ ${hw[c].originalPrice}
            </span>
             　 
            <span style="color:red;
                         font-weight: bold;
                         font-size: x-large;">
                         $ ${hw[c].specialOffer}
            </span>
        </p>
    </div>`
    }
    return productCards
  }
  productCards = []
  productCards = _printProductCard(hw)


  res.send(productCards)
})

app.listen(3000)