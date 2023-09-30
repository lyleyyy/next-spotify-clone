// custom.d.ts

// Since the error: Could not find a declaration file for module 'use-sound'. '/Users/lyle/Development/next-spotify-clone/node_modules/use-sound/dist/use-sound.esm.js' implicitly has an 'any' type. There are types at '/Users/lyle/Development/next-spotify-clone/node_modules/use-sound/dist/index.d.ts', but this result could not be resolved when respecting package.json "exports". The 'use-sound' library may need to update its package.json or typings.

// I have to declare this type
declare module "use-sound" {
  const useSound: any; //
  export default useSound;
}
