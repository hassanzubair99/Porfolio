import { useEffect, useRef } from "react";
import * as THREE from "three";
import { skills } from "@/lib/constants";

export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create a hat-like shape
    const hatGeometry = new THREE.TorusKnotGeometry(1.5, 0.5, 100, 16);
    const hatMaterial = new THREE.MeshPhongMaterial({
      color: 0x4338ca, // Indigo color
      shininess: 60,
    });
    const hat = new THREE.Mesh(hatGeometry, hatMaterial);

    // Create spheres for skills
    const skillSpheres: THREE.Mesh[] = [];
    skills.forEach((_, index) => {
      const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
      const sphereMaterial = new THREE.MeshPhongMaterial({
        color: 0x6366f1,
        shininess: 30,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

      // Position spheres in a circle around the hat
      const angle = (index / skills.length) * Math.PI * 2;
      sphere.position.x = Math.cos(angle) * 3;
      sphere.position.y = Math.sin(angle) * 3;
      sphere.position.z = 0;

      skillSpheres.push(sphere);
      scene.add(sphere);
    });

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    scene.add(hat);
    camera.position.z = 8;

    // Animation function
    function animate() {
      requestAnimationFrame(animate);

      // Rotate hat
      hat.rotation.x += 0.005;
      hat.rotation.y += 0.005;

      // Animate skill spheres
      skillSpheres.forEach((sphere, index) => {
        const time = Date.now() * 0.001;
        const angle = (index / skills.length) * Math.PI * 2 + time;

        sphere.position.x = Math.cos(angle) * 3;
        sphere.position.y = Math.sin(angle) * 3;
      });

      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />
      <div className="absolute inset-0 pointer-events-none">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="absolute text-sm font-medium text-primary"
            style={{
              left: `${50 + 30 * Math.cos((index / skills.length) * Math.PI * 2)}%`,
              top: `${50 + 30 * Math.sin((index / skills.length) * Math.PI * 2)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}