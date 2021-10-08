export type ImageType = 'poster' | 'backdrop' | 'profile';
export type Size<T extends ImageType> = T extends 'poster'
  ? 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original'
  : T extends 'backdrop'
  ? 'w300' | 'w780' | 'w1280' | 'original'
  : T extends 'profile'
  ? 'w45' | 'w185' | 'original'
  : never;
