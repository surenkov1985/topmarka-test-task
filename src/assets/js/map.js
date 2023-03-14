

ymaps.ready(function () {
	let map = new ymaps.Map("map", {
		center: [56.305625131939365, 43.991352285157454],
		zoom: 13,
		controls: [],
	});
	map.behaviors.disable("scrollZoom");

	let Placemark = new ymaps.Placemark(
		[56.305625131939365, 43.991352285157454],
		{
			balloonContent: "ул. Пушкина, д. 10",
		},
		{
			iconLayout: "default#image",
			iconImageHref: "assets/images/mark.png",
			iconImageSize: [54, 60],
			iconImageOffset: [-27, -30],
		}
	);
	map.geoObjects.add(Placemark);

    const centerCoord = map.getGlobalPixelCenter()
    
    if(window.innerWidth > 1200) {
        centerCoord[0] -= 150
        centerCoord[1] += 50
    } else if (window.innerWidth > 991) {
        centerCoord[0] -= 0;
		centerCoord[1] += 0;
	} else {
		centerCoord[0] -= 50;
		centerCoord[1] += 50;
	} 
    map.setGlobalPixelCenter(centerCoord)
});
