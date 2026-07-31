mapboxgl.accessToken = 'pk.eyJ1IjoiZHdhcnZlbnZvZGthIiwiYSI6ImNtczh1a3FndjBob2MyenF5NGdkMDZ5N2MifQ.KdzQoMsnO33BFk4J2FIV6w';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v12',
  center: [76.9286, 43.2389],
  zoom: 4,
  pitch: 0,
  bearing: 0
});

// кнопки масштабирования и компас
map.addControl(
  new mapboxgl.NavigationControl({
    visualizePitch: true
  }),
  'top-right'
);

// включаем вращение
map.dragRotate.enable();
map.touchZoomRotate.enableRotation();

const places = [];
