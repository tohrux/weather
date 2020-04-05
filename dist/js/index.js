function weather(data) {

    function weatherIcon(t) {
        if (data.weather[t - 1].icon1.search("yin") != -1) {
            return '&#xe624;'
        }
        if (data.weather[t - 1].icon1.search("duoyun") != -1) {
            return '&#xe61d;'
        }
        if (data.weather[t - 1].icon1.search("qing") != -1) {
            return '&#xe61f;'
        }
        if (data.weather[t - 1].icon1.search("xiaoyu") != -1) {
            return '&#xe622;'
        }
        if (data.weather[t - 1].icon1.search("zhongyu") != -1) {
            return '&#xe623;'
        }
        if (data.weather[t - 1].icon1.search("dayu") != -1 || data.weather[t - 1].icon1.search("baoyu") != -1) {
            return '&#xe61c;'
        }
    }
    var day = document.querySelector('#day')
    var date = document.querySelector('#date')
    var location = document.querySelector('#location')
    //天气图标
    var weather1 = document.querySelector('#weather1')
    var weatherTemp = document.querySelector('#weather-temp')
    var weatherDesc = document.querySelector('#weather-desc')
    var pm25 = document.querySelector('#pm25')
    var wind = document.querySelector('#wind')
    var a1 = document.querySelector('#a1')
    var a2 = document.querySelector('#a2')
    var b1 = document.querySelector('#b1')
    var b2 = document.querySelector('#b2')
    var c1 = document.querySelector('#c1')
    var c2 = document.querySelector('#c2')
    var d1 = document.querySelector('#d1')
    var d2 = document.querySelector('#d2')
    var k1 = document.querySelector('#k1')
    var k2 = document.querySelector('#k2')
    var k3 = document.querySelector('#k3')
    var k4 = document.querySelector('#k4')

    day.innerHTML = data.weather[0].date.slice(0, 2)
    date.innerHTML = data.date
    location.innerHTML = data.city
    weather1.innerHTML = weatherIcon(1)
    //天气图标
    weatherTemp.innerHTML = data.weather[0].temp
    weatherDesc.innerHTML = data.weather[0].weather
    wind.innerHTML = data.weather[0].wind
    pm25.innerHTML = data.pm25
    a1.innerHTML = data.weather[0].temp
    a2.innerHTML = data.weather[0].weather
    b1.innerHTML = data.weather[1].temp
    b2.innerHTML = data.weather[1].weather
    c1.innerHTML = data.weather[2].temp
    c2.innerHTML = data.weather[2].weather
    d1.innerHTML = data.weather[3].temp
    d2.innerHTML = data.weather[3].weather

    k1.innerHTML = weatherIcon(1)
    k2.innerHTML = weatherIcon(2)
    k3.innerHTML = weatherIcon(3)
    k4.innerHTML = weatherIcon(4)

}
window.onload = function () {
    this.first()
    var btn = this.document.querySelector("#search-button")
    var city = this.document.querySelector("#city")
    var options = this.document.querySelectorAll('.right ul li')
    options.forEach((item, index) => {
        item.onclick = function () {
            var a = this.parentElement.children
            var array = []
            for (var i = 0; i < a.length; i++) {
                a[i].classList.remove('active')
            }
            this.classList.add('active')
        }

    })
    console.log(options)
    btn.onclick = function () {
        if (city.value) {
            var script = document.createElement("script")
            script.src = `https://api.asilu.com/weather/?city=${city.value}&callback=weather`
            document.body.appendChild(script)
            window.localStorage.setItem('weather', city.value)
            city.value = ''
        } else {
            alert('请输入要搜索的城市~')
        }

    }
}

function first() {
    var script = document.createElement("script")
    script.src = `https://api.asilu.com/weather/?city=${window.localStorage.getItem('weather')}&callback=weather`
    document.body.appendChild(script)

}