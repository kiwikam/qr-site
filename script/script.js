function success(pos) {
    var crd = pos.coords;

    console.log('Ваше текущее местоположение:');
    console.log(`Широта: ${crd.latitude}`);
    console.log(`Долгота: ${crd.longitude}`);
    console.log(`Плюс-минус ${crd.accuracy} метров.`);
};
  
function error({ message }) {
    console.log(message)
    }
  
navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
})

