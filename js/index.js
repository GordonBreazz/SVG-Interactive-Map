var idAarr = [
  "RU-MOW",
  "RU-SPE",
  "RU-NEN",
  "RU-YAR",
  "RU-CHE",
  "RU-ULY",
  "RU-TYU",
  "RU-TUL",
  "RU-SVE",
  "RU-RYA",
  "RU-ORL",
  "RU-OMS",
  "RU-NGR",
  "RU-LIP",
  "RU-KRS",
  "RU-KGN",
  "RU-KGD",
  "RU-IVA",
  "RU-BRY",
  "RU-AST",
  "RU-KHA",
  "RU-CE",
  "RU-UD",
  "RU-SE",
  "RU-MO",
  "RU-KR",
  "RU-KL",
  "RU-IN",
  "RU-AL",
  "RU-BA",
  "RU-AD",
  "RU-CR",
  "RU-SEV",
  "RU-KO",
  "RU-KIR",
  "RU-PNZ",
  "RU-TAM",
  "RU-MUR",
  "RU-LEN",
  "RU-VLG",
  "RU-KOS",
  "RU-PSK",
  "RU-ARK",
  "RU-YAN",
  "RU-CHU",
  "RU-YEV",
  "RU-TY",
  "RU-SAK",
  "RU-AMU",
  "RU-BU",
  "RU-KK",
  "RU-KEM",
  "RU-NVS",
  "RU-ALT",
  "RU-DA",
  "RU-STA",
  "RU-KB",
  "RU-KC",
  "RU-KDA",
  "RU-ROS",
  "RU-SAM",
  "RU-TA",
  "RU-ME",
  "RU-CU",
  "RU-NIZ",
  "RU-VLA",
  "RU-MOS",
  "RU-KLU",
  "RU-BEL",
  "RU-ZAB",
  "RU-PRI",
  "RU-KAM",
  "RU-MAG",
  "RU-SA",
  "RU-KYA",
  "RU-ORE",
  "RU-SAR",
  "RU-VGG",
  "RU-VOR",
  "RU-SMO",
  "RU-TVE",
  "RU-PER",
  "RU-KHM",
  "RU-TOM",
  "RU-IRK",
]
var idAarr2 = new Array(
  ["RU-MOW", "Москва", ""],
  ["RU-CHE", "Челябинская область", ""],
  ["RU-ORL", "Орловская область"],
  ["RU-OMS", "Омская область", ""],
  ["RU-LIP", "Липецкая область", ""],
  ["RU-KRS", "Курская область", ""],
  ["RU-RYA", "Рязанская область", ""],
  ["RU-BRY", "Брянская область", ""],
  ["RU-KIR", "Кировская область", ""],
  ["RU-ARK", "Архангельская область", ""],
  ["RU-MUR", "Мурманская область", ""],
  ["RU-SPE", "Санкт-Петербург", ""],
  ["RU-YAR", "Ярославская область", ""],
  ["RU-ULY", "Ульяновская область", ""],
  ["RU-NVS", "Новосибирская область", ""],
  ["RU-TYU", "Тюменская область", ""],
  ["RU-SVE", "Свердловская область", ""],
  ["RU-NGR", "Новгородская область", ""],
  ["RU-KGN", "Курганская область", ""],
  ["RU-KGD", "Калининградская область", ""],
  ["RU-IVA", "Ивановская область", ""],
  ["RU-AST", "Астраханская область", ""],
  ["RU-KHA", "Хабаровский край", ""],
  ["RU-CE", "Чеченская республика", ""],
  ["RU-UD", "Удмуртская республика", ""],
  ["RU-SE", "Республика Северная Осетия", ""],
  ["RU-MO", "Республика Мордовия", ""],
  ["RU-KR", "Республика  Карелия", ""],
  ["RU-KL", "Республика  Калмыкия", ""],
  ["RU-IN", "Республика  Ингушетия", ""],
  ["RU-AL", "Республика Алтай", ""],
  ["RU-BA", "Республика Башкортостан", ""],
  ["RU-AD", "Республика Адыгея", ""],
  ["RU-CR", "Республика Крым", ""],
  ["RU-SEV", "Севастополь", ""],
  ["RU-KO", "Республика Коми", ""],
  ["RU-PNZ", "Пензенская область", ""],
  ["RU-TAM", "Тамбовская область", ""],
  ["RU-LEN", "Ленинградская область", ""],
  ["RU-VLG", "Вологодская область", ""],
  ["RU-KOS", "Костромская область", ""],
  ["RU-PSK", "Псковская область", ""],
  ["RU-YAN", "Ямало-Ненецкий АО", ""],
  ["RU-CHU", "Чукотский АО", ""],
  ["RU-YEV", "Еврейская автономская область", ""],
  ["RU-TY", "Республика Тыва", ""],
  ["RU-SAK", "Сахалинская область", ""],
  ["RU-AMU", "Амурская область", ""],
  ["RU-BU", "Республика Бурятия", ""],
  ["RU-KK", "Республика Хакасия", ""],
  ["RU-KEM", "Кемеровская область", ""],
  ["RU-ALT", "Алтайский край", ""],
  ["RU-DA", "Республика Дагестан", ""],
  ["RU-KB", "Кабардино-Балкарская республика", ""],
  ["RU-KC", "Карачаевая-Черкесская республика", ""],
  ["RU-KDA", "Краснодарский край", ""],
  ["RU-ROS", "Ростовская область", ""],
  ["RU-SAM", "Самарская область", ""],
  ["RU-TA", "Республика Татарстан", ""],
  ["RU-ME", "Республика Марий Эл", ""],
  ["RU-CU", "Чувашская республика", ""],
  ["RU-NIZ", "Нижегородская край", ""],
  ["RU-VLA", "Владимировская область", ""],
  ["RU-MOS", "Московская область", ""],
  ["RU-KLU", "Калужская область", ""],
  ["RU-BEL", "Белгородская область", ""],
  ["RU-ZAB", "Забайкальский край", ""],
  ["RU-PRI", "Приморский край", ""],
  ["RU-KAM", "Камачатский край", ""],
  ["RU-MAG", "Магаданская область", ""],
  ["RU-SA", "Республика Саха", ""],
  ["RU-KYA", "Красноярский край", ""],
  ["RU-ORE", "Оренбургская область", ""],
  ["RU-SAR", "Саратовская область", ""],
  ["RU-VGG", "Волгоградская область", ""],
  ["RU-VOR", "Ставропольский край", ""],
  ["RU-SMO", "Смоленская область", ""],
  ["RU-TVE", "Тверская область", ""],
  ["RU-PER", "Пермская область", ""],
  ["RU-KHM", "Ханты-Мансийский АО", ""],
  ["RU-KHM", "Ханты-Мансийский АО", ""],
  ["RU-TOM", "Томская область", ""],
  ["RU-IRK", "Иркутская область", ""],
  ["RU-NEN", "Ненецскй АО", ""],
  ["RU-STA", "Ставропольский край", ""],
  ["RU-TUL", "Тульская область", "tulskaya_flag.png"]
)

var mapOptions = {
    events: {
      mouseWheel: false, // enables mouse wheel zooming events
      doubleClick: false, // enables double-click to zoom-in events
      drag: true, // enables drag and drop to move the SVG events
      dragCursor: "move", // cursor to use while dragging the SVG
    },
    animationTime: 300, // time in milliseconds to use as default for animations. Set 0 to remove the animation
    zoomFactor: 0.25, // how much to zoom-in or zoom-out
    maxZoom: 3, //maximum zoom in, must be a number bigger than 1
    panFactor: 100, // how much to move the viewBox when calling .panDirection() methods
    // initialViewBox: {
    //   // the initial viewBox, if null or undefined will try to use the viewBox set in the svg tag. Also accepts string in the format "X Y Width Height"
    //   x: 0, // the top-left corner X coordinate
    //   y: 0, // the top-left corner Y coordinate
    //   width: 1000, // the width of the viewBox
    //   height: 1000 // the height of the viewBox
    // },
    // limits: {
    //   // the limits in which the image can be moved. If null or undefined will use the initialViewBox plus 15% in each direction
    //   x: -150,
    //   y: -150,
    //   x2: 1150,
    //   y2: 1150
    // }
  },
  svgPanZoom,
  currentZoom = 0,
  zoomFactor = 4,
  localCursor,
  currentCityId = null,
  mapBacklightColor = "#f6e72d",
  mapBackgroundColor = "rgba(0,0,0,0.2)",
  areaList = [],
  mapMarkerColor = {
    normal: "red",
    active: "blue",
    fill: "transparent",
    opacity: 0.8,
    lineColor: "orange",
    lineOpacity: 1,
  },
  mapMarkerNormal = {
    normal: 3,
    active: 8,
    strokeNormal: 2,
    strokeActive: 3.5,
    lineStrokeWidth: 4,
    lineStrokeDasharray: "10",
    activeClss: "active-point",
  },
  mapMarkerInZoom = {
    normal: 1.5,
    active: 3,
    strokeNormal: 1,
    strokeActive: 1.5,
    lineStrokeWidth: "1.5",
    lineStrokeDasharray: 6,
    activeClss: "active-point-zoom",
  },
  lastCityPoint = {
    id: "",
  },
  indicatorWindow = {
    show: false,
    offset: {
      x: 20,
      y: 20,
    },
  },
  cityPoints = [
    {
      id: "ulanude",
      name: "г. Улан-Удэ",
      title: "г. Верхнеудинск",
      cx: 610,
      cy: 480,
      next: ["dodo"],
      zoom: true,
      area: "RU-BU",
    },
    {
      id: "dodo",
      name: "улус Додо-Ичётуй",
      title: "улус Кутетуевский",
      cx: 575,
      cy: 505,
      next: ["haracai"],
      zoom: true,
      area: "RU-BU",
    },
    {
      id: "haracai",
      name: "улус Харацай",
      title: "станица Атамано-Николаевская",
      cx: 565,
      cy: 500,
      next: ["kyahta"],
      zoom: true,
      area: "RU-BU",
    },
    {
      id: "kyahta",
      name: "г. Кяхта",
      title: "г. Троицкосавск",
      cx: 585,
      cy: 515,
      next: ["kazan"],
      zoom: false,
      area: "RU-BU",
    },
    {
      id: "kazan",
      name: "г. Казань",
      title: null,
      cx: 200,
      cy: 330,
      next: ["piter", "irkutsk"],
      zoom: false,
      area: "RU-TA",
    },
    {
      id: "piter",
      name: "г. Санкт-Петербург",
      title: null,
      cx: 133,
      cy: 185,
      next: ["kazan"],
      zoom: false,
      area: "RU-LEN",
    },
    {
      id: "irkutsk",
      name: "г. Иркутск",
      title: null,
      cx: 568,
      cy: 487,
      next: null,
      zoom: false,
      area: "RU-IRK",
    },
  ]

$("path").hover(
  function (e) {
    // $('path').css('fill', '#fff')
    $(".indicator").html("")
    var id = $(this).attr("id").toUpperCase()

    if ($(this).attr("name")) {
      var name = $(this).attr("name")
      $("<div>" + name + "</div>").appendTo(".indicator")
    }

    // if ($(this).attr("flag")) {
    //   var flag = "assets/images/" + $(this).attr("flag")
    //   console.log(flag)
    //   $(' <img class="flag" src="" alt="">').appendTo(".indicator")
    //   $(".indicator").find("img").attr("src", flag)
    //   // $('<img src='+ flag+ ' >').appendTo('.indicator');
    // }

    // $('.change').remove()

    // var script = document.createElement("script")
    // // script.classList.add('change');
    // //script.src = 'http://api.geonames.org/countryInfoJSON?country='+info[id]+'&username=pixeltest&style=full&callback=update';
    // document.body.appendChild(script)

    $(this).css("fill", mapBacklightColor)
    // $('path')
    //   .not(this)
    //   .css('fill', mapBackgroundColor)
    showIndicator(e)
  },
  function () {
    //hideIndicator()
    // if (lastCi tyPoint)
    //   if (lastCityPoint.area !=  $(this).attr('id').toUpperCase()) console.log('okkkkkkkkkkkkk',lastCityPoint.area, $(this).attr('id').toUpperCase()
    $("path").css("fill", mapBackgroundColor)
    areaHighlight()
  }
)

function showIndicator(e) {
  indicatorWindow.show = true
  $(".indicator")
    .css({
      top: e.pageY + indicatorWindow.offset.y,
      left: e.pageX + indicatorWindow.offset.x,
    })
    .show()
}

function hideIndicator() {
  indicatorWindow.show = false
  $(".indicator").html("")
  $(".indicator").hide()
}

$("path").each(function () {
  var regId = $(this).attr("id")
  var flag = ""
  var name = ""
  for (var j = 0; j < idAarr2.length; j++) {
    if (regId == idAarr2[j][0]) {
      name = idAarr2[j][1]
      flag = "flags/" + idAarr2[j][2]

      $(this).attr("name", name)
      $(this).attr("flag", flag)
    }
  }

  // var regIdDiv =
  //   '<div class="reg" >' +
  //   "[" +
  //   "<span>" +
  //   regId +
  //   "</span>" +
  //   "]" +
  //   " " +
  //   name +
  //   "</div>"
  // $(regIdDiv).appendTo(".regs")

  // var idArrMin = [regId, '_'];
  // idAarr2.push(idArrMin);
})

// for (var j = 0; j < idAarr2.length; j++) {
//   if (regId == idAarr2[j][0]) {
//     name = cyr2latChars[j][1];

//   }
// }

function naming() {}

//revertFill();

// $('.reg').hover(
//   function (e) {
//     var id = $(this)
//       .find('span')
//       .text()

//     idHover = '#' + id

//     $(idHover).css('fill', mapBacklightColor)
//     // $('path').not(this).css('fill','rgba(0,0,0,0.5)');
//     // $('.indicator').css({'top':e.pageY,'left':e.pageX+30}).show();
//   },
//   function () {
//     hideIndicator()
//     $('path').css('fill', mapBackgroundColor)
//   }
// )

//} // revertFill

function getCityPoint(id) {
  return cityPoints.find(function (elem) {
    if (elem.id == id) return elem
  })
}

function setAriasList(id) {
  let city = getCityPoint(id)
  areaList = [city.area]
  for (let item of city.next) {
    let nexCity = getCityPoint(item)
    areaList.push(nexCity.area)
  }
  areaHighlight()
  return areaList
}

function areaHighlight(color = mapBacklightColor) {
  for (let id of areaList) $("#" + id).css("fill", color)
  // var tmp = getCityPoint(id)
  // if (tmp) {
  //   if ($('#' + tmp.area).length > 0) {
  //     $('#' + tmp.area).css('fill', color)
  //   }
  // }
}

function cityMarkerActivate(id, e, m) {
  $("#" + id).attr("r", m.active)
  $("#" + id).attr("stroke-width", m.strokeActive)
  var city = getCityPoint(id)
  if (city) {
    //areaHighlight(city.area, mapBacklightColor)
    $(".indicator").html("")
    var thtml = `<p>Место: ${city.name}</p>`
    if (city.title) thtml += `<p>Название в XIX веке: ${city.title}</p>`
    $("<div>" + thtml + "</div>").appendTo(".indicator")
    showIndicator(e)
  }
}

function cityMarkerDeactivate(id, e, m) {
  var city = getCityPoint(id)
  if (city) {
    //areaHighlight(city.area, mapBackgroundColor)
  }
  if (currentCityId != id) {
    $("#" + id).attr("r", m.normal)
    $("#" + id).attr("stroke-width", m.strokeNormal)
  }
}

function pointHighlighter() {
  var m = mapMarkerInZoom
  if (currentZoom == 0) m = mapMarkerNormal

  if (currentCityId) {
    $("#" + currentCityId).attr("r", m.active)
    $("#" + currentCityId).attr("stroke-width", m.strokeActive)
  }
  //console.log(lastCityPoint.id)
  if (lastCityPoint.id && lastCityPoint.id != currentCityId) {
    $("#" + lastCityPoint.id).attr("r", m.normal)
    $("#" + lastCityPoint.id).attr("stroke-width", m.strokeNormal)
  }
}

function changeMapMarkers(m, cls = ".circle5") {
  $(cls).attr("r", m.normal)
  $(cls).attr("stroke-width", m.strokeNormal)
  pointHighlighter(m)

  $(cls).hover(
    function (e) {
      cityMarkerActivate($(this).attr("id"), e, m)
    },
    function (e) {
      cityMarkerDeactivate($(this).attr("id"), e, m)
    }
  )
  $(".path5").attr("stroke-width", m.lineStrokeWidth)
  $(".path5").attr("stroke-dasharray", m.lineStrokeDasharray)
}
/////////////////////////////////////////// Map Initialization
function initMap() {
  $.each(cityPoints, function (index, val) {
    nextList = val.next
    var svg = document.getElementById("svg2")

    // var pt = svg.createSVGPoint()

    // // Get point in global SVG space
    // function cursorPoint(evt) {
    //   pt.x = evt.clientX
    //   pt.y = evt.clientY
    //   return pt.matrixTransform(svg.getScreenCTM().inverse())
    // }

    // svg.addEventListener(
    //   "mousemove",
    //   function (evt) {
    //     localCursor = cursorPoint(evt)
    //     // Use loc.x and loc.y here
    //   },
    //   false
    // )

    if (nextList)
      $.each(nextList, function (ind, v) {
        var city = getCityPoint(v)
        svg.insertAdjacentHTML(
          "beforeend",
          `<line id="${val.id + "_" + v}" class="path5" x2="${city.cx}" x1="${
            val.cx
          }" y2="${city.cy}" y1="${val.cy}" stroke="${
            mapMarkerColor.lineColor
          }" opacity="${mapMarkerColor.lineOpacity}" fill="transparent"
      stroke-width="5" stroke-dasharray="10 5" visibility="hidden" stroke-linecap="round" />`
        )
      })
  })

  // Insert Cities
  $.each(cityPoints, function (index, val) {
    var svg = document.getElementById("svg2")
    svg.insertAdjacentHTML(
      "beforeend",
      `<circle class="circle5" id="${val.id}" cx="${val.cx}" cy="${val.cy}" r="3" stroke="${mapMarkerColor.normal}" fill="${mapMarkerColor.fill}" stroke-width="3" stroke-opacity="${mapMarkerColor.opacity}" />`
    )
  })

  changeMapMarkers(mapMarkerNormal)
  $(".circle5").click(clickByPoint)

  $("#svg2").dblclick(function () {
    zoom(0)
  })
  svgPanZoom = $("#svg2").svgPanZoom(mapOptions)
  $("path").css("fill", mapBackgroundColor)
}

function zoom(newZoomVal = 0) {
  if (newZoomVal < 0) return false
  if (newZoomVal > currentZoom) {
    currentZoom = newZoomVal
    svgPanZoom.zoomIn(currentZoom)
    changeMapMarkers(mapMarkerInZoom)
    return true
  }
  if (newZoomVal < currentZoom) {
    svgPanZoom.zoomOut(currentZoom - newZoomVal)
    currentZoom = newZoomVal
    pointHighlighter()
    changeMapMarkers(mapMarkerNormal)
    $("#" + currentCityId).removeClass(mapMarkerInZoom.activeClss)
    $("#" + currentCityId).addClass(mapMarkerNormal.activeClss)

    return true
  }
  return false
}

function drawLine(sId, fId) {
  $("#" + sId + "_" + fId).attr("visibility", "visibility")
  getCityPoint(sId).area
  areaList = [getCityPoint(sId).area, getCityPoint(fId).area]
  areaHighlight()
}
//==============================================================
function clickByPoint(event) {
  var m1,
    city = getCityPoint(event.currentTarget.id)
  areaList = [city.area]  
  if (city.zoom) m1 = mapMarkerInZoom
  else m1 = mapMarkerNormal
  if (currentCityId) {
    $("#" + currentCityId).attr("stroke", mapMarkerColor.normal)
    $("#" + currentCityId).removeClass(mapMarkerNormal.activeClss)
    $("#" + currentCityId).removeClass(mapMarkerInZoom.activeClss)
  }
  currentCityId = city.id
  $("#" + currentCityId).attr("stroke", mapMarkerColor.active)
  $("#" + currentCityId).addClass(m1.activeClss)

  //draw lines between points
  $(".path5").attr("visibility", "hidden")
  if (city.next) {
    if (city.id == "kazan" && lastCityPoint.id == "kyahta")
      drawLine(currentCityId, city.next[0])
    else if (city.id == "kazan" && lastCityPoint.id == "piter")
      drawLine(currentCityId, city.next[1])
    else for (var item of city.next) drawLine(currentCityId, item)
  }

  if (city.zoom && currentZoom == 0) {
    zoom(zoomFactor)
    //svgPanZoom.setCenter(city.cx, city.cy)
  }

  if (!city.zoom && currentZoom > 0) {
    zoom(0)
    //svgPanZoom.setCenter(city.cx, city.cy)
  }
  svgPanZoom.setCenter(city.cx, city.cy)
  pointHighlighter()
  // areaHighlight(currentCityId)
  // if (getCityPoint(currentCityId))
  //   areaHighlight(getCityPoint(currentCityId).next[0])

  lastCityPoint = city
}

$(document).ready(function () {
  initMap()
  // $('.circle5').on('mouseover', function () {
  //   $(this).attr('r', '10')
  //   $(this).attr('stroke-width', '5')
  // })
  // $('.circle5').on('mouseleave', function () {
  //   $(this).attr('r', '5')
  //   $(this).attr('stroke-width', '3')
  // })
})
