//import-export pour rendre le code plus lisible on sépare en plusieurs fichiers
import Profile from "./Profile.js";
//de profile.js on prend la fonction Gallery
export default function Gallery() {
  //cf my-first-component
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
