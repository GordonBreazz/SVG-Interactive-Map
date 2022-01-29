$('path').hover(
  function (e) {
    $('path').css('fill', '#fff')
    $('.indicator').html('')
    var id = $(this)
      .attr('id')
      .toUpperCase()

    if ($(this).attr('name')) {
      var name = $(this).attr('name')
      $('<div>' + name + '</div>').appendTo('.indicator')
    }

    //   if($(this).attr('flag')) {
    //     var flag = "http://sandbox.alexti-dev.ru/mapping/" + $(this).attr('flag') ;
    //     $(' <img class="flag" src="" alt="">').appendTo('.indicator');
    //     $('.indicator').find('img').attr('src',flag )
    //    // $('<img src='+ flag+ ' >').appendTo('.indicator');
    //  }

    $('.change').remove()

    var script = document.createElement('script')
    // script.classList.add('change');
    //script.src = 'http://api.geonames.org/countryInfoJSON?country='+info[id]+'&username=pixeltest&style=full&callback=update';
    document.body.appendChild(script)

    $(this).css('fill', '#f6e72d')
    $('path')
      .not(this)
      .css('fill', 'rgba(0,0,0,0.5)')
    $('.indicator')
      .css({ top: e.pageY, left: e.pageX + 30 })
      .show()
  },
  function () {
    $('.indicator').html('')
    $('.indicator').hide()
    $('path').css('fill', 'rgba(0,0,0,0.2)')
  }
)

var idAarr = [
  'RU-MOW',
  'RU-SPE',
  'RU-NEN',
  'RU-YAR',
  'RU-CHE',
  'RU-ULY',
  'RU-TYU',
  'RU-TUL',
  'RU-SVE',
  'RU-RYA',
  'RU-ORL',
  'RU-OMS',
  'RU-NGR',
  'RU-LIP',
  'RU-KRS',
  'RU-KGN',
  'RU-KGD',
  'RU-IVA',
  'RU-BRY',
  'RU-AST',
  'RU-KHA',
  'RU-CE',
  'RU-UD',
  'RU-SE',
  'RU-MO',
  'RU-KR',
  'RU-KL',
  'RU-IN',
  'RU-AL',
  'RU-BA',
  'RU-AD',
  'RU-CR',
  'RU-SEV',
  'RU-KO',
  'RU-KIR',
  'RU-PNZ',
  'RU-TAM',
  'RU-MUR',
  'RU-LEN',
  'RU-VLG',
  'RU-KOS',
  'RU-PSK',
  'RU-ARK',
  'RU-YAN',
  'RU-CHU',
  'RU-YEV',
  'RU-TY',
  'RU-SAK',
  'RU-AMU',
  'RU-BU',
  'RU-KK',
  'RU-KEM',
  'RU-NVS',
  'RU-ALT',
  'RU-DA',
  'RU-STA',
  'RU-KB',
  'RU-KC',
  'RU-KDA',
  'RU-ROS',
  'RU-SAM',
  'RU-TA',
  'RU-ME',
  'RU-CU',
  'RU-NIZ',
  'RU-VLA',
  'RU-MOS',
  'RU-KLU',
  'RU-BEL',
  'RU-ZAB',
  'RU-PRI',
  'RU-KAM',
  'RU-MAG',
  'RU-SA',
  'RU-KYA',
  'RU-ORE',
  'RU-SAR',
  'RU-VGG',
  'RU-VOR',
  'RU-SMO',
  'RU-TVE',
  'RU-PER',
  'RU-KHM',
  'RU-TOM',
  'RU-IRK'
]
var idAarr2 = new Array(
  ['RU-MOW', 'Москва', ''],
  ['RU-CHE', 'Челябинская область', ''],
  ['RU-ORL', 'Орловская область'],
  ['RU-OMS', 'Омская область', ''],
  ['RU-LIP', 'Липецкая область', ''],
  ['RU-KRS', 'Курская область', ''],
  ['RU-RYA', 'Рязанская область', ''],
  ['RU-BRY', 'Брянская область', ''],
  ['RU-KIR', 'Кировская область', ''],
  ['RU-ARK', 'Архангельская область', ''],
  ['RU-MUR', 'Мурманская область', ''],
  ['RU-SPE', 'Санкт-Петербург', ''],
  ['RU-YAR', 'Ярославская область', ''],
  ['RU-ULY', 'Ульяновская область', ''],
  ['RU-NVS', 'Новосибирская область', ''],
  ['RU-TYU', 'Тюменская область', ''],
  ['RU-SVE', 'Свердловская область', ''],
  ['RU-NGR', 'Новгородская область', ''],
  ['RU-KGN', 'Курганская область', ''],
  ['RU-KGD', 'Калининградская область', ''],
  ['RU-IVA', 'Ивановская область', ''],
  ['RU-AST', 'Астраханская область', ''],
  ['RU-KHA', 'Хабаровский край', ''],
  ['RU-CE', 'Чеченская республика', ''],
  ['RU-UD', 'Удмуртская республика', ''],
  ['RU-SE', 'Республика Северная Осетия', ''],
  ['RU-MO', 'Республика Мордовия', ''],
  ['RU-KR', 'Республика  Карелия', ''],
  ['RU-KL', 'Республика  Калмыкия', ''],
  ['RU-IN', 'Республика  Ингушетия', ''],
  ['RU-AL', 'Республика Алтай', ''],
  ['RU-BA', 'Республика Башкортостан', ''],
  ['RU-AD', 'Республика Адыгея', ''],
  ['RU-CR', 'Республика Крым', ''],
  ['RU-SEV', 'Севастополь', ''],
  ['RU-KO', 'Республика Коми', ''],
  ['RU-PNZ', 'Пензенская область', ''],
  ['RU-TAM', 'Тамбовская область', ''],
  ['RU-LEN', 'Ленинградская область', ''],
  ['RU-VLG', 'Вологодская область', ''],
  ['RU-KOS', 'Костромская область', ''],
  ['RU-PSK', 'Псковская область', ''],
  ['RU-YAN', 'Ямало-Ненецкий АО', ''],
  ['RU-CHU', 'Чукотский АО', ''],
  ['RU-YEV', 'Еврейская автономская область', ''],
  ['RU-TY', 'Республика Тыва', ''],
  ['RU-SAK', 'Сахалинская область', ''],
  ['RU-AMU', 'Амурская область', ''],
  ['RU-BU', 'Республика Бурятия', ''],
  ['RU-KK', 'Республика Хакасия', ''],
  ['RU-KEM', 'Кемеровская область', ''],
  ['RU-ALT', 'Алтайский край', ''],
  ['RU-DA', 'Республика Дагестан', ''],
  ['RU-KB', 'Кабардино-Балкарская республика', ''],
  ['RU-KC', 'Карачаевая-Черкесская республика', ''],
  ['RU-KDA', 'Краснодарский край', ''],
  ['RU-ROS', 'Ростовская область', ''],
  ['RU-SAM', 'Самарская область', ''],
  ['RU-TA', 'Республика Татарстан', ''],
  ['RU-ME', 'Республика Марий Эл', ''],
  ['RU-CU', 'Чувашская республика', ''],
  ['RU-NIZ', 'Нижегородская край', ''],
  ['RU-VLA', 'Владимировская область', ''],
  ['RU-MOS', 'Московская область', ''],
  ['RU-KLU', 'Калужская область', ''],
  ['RU-BEL', 'Белгородская область', ''],
  ['RU-ZAB', 'Забайкальский край', ''],
  ['RU-PRI', 'Приморский край', ''],
  ['RU-KAM', 'Камачатский край', ''],
  ['RU-MAG', 'Магаданская область', ''],
  ['RU-SA', 'Республика Саха', ''],
  ['RU-KYA', 'Красноярский край', ''],
  ['RU-ORE', 'Оренбургская область', ''],
  ['RU-SAR', 'Саратовская область', ''],
  ['RU-VGG', 'Волгоградская область', ''],
  ['RU-VOR', 'Ставропольский край', ''],
  ['RU-SMO', 'Смоленская область', ''],
  ['RU-TVE', 'Тверская область', ''],
  ['RU-PER', 'Пермская область', ''],
  ['RU-KHM', 'Ханты-Мансийский АО', ''],
  ['RU-KHM', 'Ханты-Мансийский АО', ''],
  ['RU-TOM', 'Томская область', ''],
  ['RU-IRK', 'Иркутская область', ''],
  ['RU-NEN', 'Ненецскй АО', ''],
  ['RU-STA', 'Ставропольский край', ''],
  ['RU-TUL', 'Тульская область', 'tulskaya_flag.png']
)

$('path').each(function () {
  var regId = $(this).attr('id')
  var flag = ''
  var name = ''
  for (var j = 0; j < idAarr2.length; j++) {
    if (regId == idAarr2[j][0]) {
      name = idAarr2[j][1]
      flag = 'flags/' + idAarr2[j][2]

      $(this).attr('name', name)
      $(this).attr('flag', flag)
    }
  }

  var regIdDiv =
    '<div class="reg" >' +
    '[' +
    '<span>' +
    regId +
    '</span>' +
    ']' +
    ' ' +
    name +
    '</div>'
  $(regIdDiv).appendTo('.regs')

  // var idArrMin = [regId, '_'];
  // idAarr2.push(idArrMin);
})

// for (var j = 0; j < idAarr2.length; j++) {
//   if (regId == idAarr2[j][0]) {
//     name = cyr2latChars[j][1];

//   }
// }

function naming () {}

//revertFill();

$('.reg').hover(
  function (e) {
    var id = $(this)
      .find('span')
      .text()

    idHover = '#' + id

    $(idHover).css('fill', '#f6e72d')
    // $('path').not(this).css('fill','rgba(0,0,0,0.5)');
    // $('.indicator').css({'top':e.pageY,'left':e.pageX+30}).show();
  },
  function () {
    $('.indicator').html('')
    $('.indicator').hide()
    $('path').css('fill', 'rgba(0,0,0,0.2)')
  }
)

//} // revertFill
var mapOptions = {
    events: {
      mouseWheel: false, // enables mouse wheel zooming events
      doubleClick: false, // enables double-click to zoom-in events
      drag: true, // enables drag and drop to move the SVG events
      dragCursor: 'move' // cursor to use while dragging the SVG
    },
    animationTime: 300, // time in milliseconds to use as default for animations. Set 0 to remove the animation
    zoomFactor: 0.25, // how much to zoom-in or zoom-out
    maxZoom: 3, //maximum zoom in, must be a number bigger than 1
    panFactor: 100 // how much to move the viewBox when calling .panDirection() methods
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
  currentCityId = null,
  mapMarkerColor = {
    normal: 'red',
    active: 'blue',
    fill: 'transparent',
    opacity: 0.8
  },
  mapMarkerNormal = {
    normal: 3,
    active: 8,
    strokeNormal: 2,
    strokeActive: 3
  },
  mapMarkerInZoom = {
    normal: 1,
    active: 4,
    strokeNormal: 1,
    strokeActive: 2.5
  },
  cityPoints = [
    {
      id: 'ulanude',
      name: 'г. Улан-Удэ',
      title: 'г. Верхнеудинск',
      cx: 610,
      cy: 480,
      next: ['dodo'],
      zoom: true
    },
    {
      id: 'dodo',
      name: 'улус Додо-Ичётуй',
      title: 'улус Кутетуевский',
      cx: 575,
      cy: 505,
      next: ['haracai'],
      zoom: true
    },
    {
      id: 'haracai',
      name: 'улус Харацай',
      title: 'станица Атамано-Николаевская',
      cx: 565,
      cy: 500,
      next: ['kyahta'],
      zoom: true
    },
    {
      id: 'kyahta',
      name: 'г. Кяхта',
      title: 'г. Троицкосавск',
      cx: 585,
      cy: 515,
      next: ['kazan'],
      zoom: true
    },
    {
      id: 'kazan',
      name: 'г. Казань',
      title: null,
      cx: 200,
      cy: 330,
      next: ['piter', 'irkutsk'],
      zoom: false
    },
    {
      id: 'piter',
      name: 'г. Санкт-Петербург',
      title: null,
      cx: 102,
      cy: 190,
      next: ['kazan'],
      zoom: false
    },
    {
      id: 'irkutsk',
      name: 'г. Иркутск',
      title: null,
      cx: 568,
      cy: 487,
      next: null,
      zoom: true
    }
  ]
function getCityPoint (id) {
  return cityPoints.find(function (elem) {
    if (elem.id == id) return elem
  })
}

function changeMapMarkers (m, cls = '.circle5') {
  $(cls).attr('r', m.normal)
  $(cls).attr('stroke-width', m.strokeNormal)
  $(cls).on('mouseover', function () {
    $(this).attr('r', m.active)
    $(this).attr('stroke-width', m.strokeActive)
  })
  $(cls).on('mouseleave', function () {
    $(this).attr('r', m.normal)
    $(this).attr('stroke-width', m.strokeNormal)
  })
}
/////////////////////////////////////////// Map Initialization
function initMap () {
  // Insert Cities
  $.each(cityPoints, function (index, val) {
    var svg = document.getElementById('svg2')
    svg.insertAdjacentHTML(
      'beforeend',
      `<circle class="circle5" id="${val.id}" cx="${val.cx}" cy="${val.cy}" r="3" stroke="${mapMarkerColor.normal}" fill="${mapMarkerColor.fill}" stroke-width="3" stroke-opacity="${mapMarkerColor.opacity}" />`
    )
  })
  // Insert Lines
  $.each(cityPoints, function (index, val) {
    nextList = val.next
    var svg = document.getElementById('svg2')
    if (nextList)
      $.each(nextList, function (ind, v) {
        var city = getCityPoint(v)
        // console.log(`<line id=${val.id +
        //   '_line'}" class="path" x2="${city.cx}" x1="${val.cx}" y2="${city.cy}" y1="${val.cy}" stroke="orange" fill="transparent"
// stroke-width="5" stroke-dasharray="10 5" visibility="visibility" stroke-linecap="round" />`)
        svg.insertAdjacentHTML(
          'beforeend',
          `<line id=${val.id + '_' + v}" class="path" x2="${city.cx}" x1="${
            val.cx
          }" y2="${city.cy}" y1="${val.cy}" stroke="orange" fill="transparent"
      stroke-width="5" stroke-dasharray="10 5" visibility="hidden" stroke-linecap="round" />`
          //`<circle class="circle5" id="${val.id}" cx="${val.cx}" cy="${val.cy}" r="3" stroke="${mapMarkerColor.normal}" fill="${mapMarkerColor.fill}" stroke-width="3" stroke-opacity="${mapMarkerColor.opacity}" />`
        )
      })
  })
  changeMapMarkers(mapMarkerNormal)
  $('.circle5').click(clickByPoint)
  svgPanZoom = $('#svg2').svgPanZoom(mapOptions)
}

////////////////////////////////////////////////
function clickByPoint (event) {
  var city = getCityPoint(event.currentTarget.id)
  if (currentCityId)
    $('#' + currentCityId).attr('stroke', mapMarkerColor.normal)
  currentCityId = city.id
  $('#' + currentCityId).attr('stroke', mapMarkerColor.active)

  if (city.zoom && currentZoom == 0) {
    changeMapMarkers(mapMarkerInZoom)
    currentZoom = 2
    svgPanZoom.zoomIn(currentZoom)
  }
  if (!city.zoom && currentZoom > 0) {
    changeMapMarkers(mapMarkerNormal)
    svgPanZoom.zoomOut(currentZoom)
    currentZoom = 0
  }
  svgPanZoom.setCenter(city.cx, city.cy)

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
