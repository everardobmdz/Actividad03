const scene = new THREE.Scene();
scene.background = new THREE.Color("white");
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(200, 200);

let objeto = document.getElementById("objeto");
objeto.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load( "img/js.jpg" );

let geometry = new THREE.CircleGeometry(2,32);
let material = new THREE.MeshStandardMaterial({color:"white",map:texture});
let circle = new THREE.Mesh(geometry,material);
scene.add(circle);

renderer.render(scene,camera);
camera.position.z = 5;

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5);
scene.add( ambientLight );

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );


function animate() {
    requestAnimationFrame( animate )
    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;
    renderer.render( scene, camera )
   }
animate()