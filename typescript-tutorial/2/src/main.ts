interface Song {
  name: string;
  length: number;
  artists: string[];
}

type GetAnnotation<T> = T extends any[] ? ArrayAnnotation : string[];

type ArrayAnnotation = Record<number, string[]>;

type Annotation<T> = {
  [K in keyof T]?: GetAnnotation<T[K]>;
};

const annotation: Annotation<Song> = {
  name: ["A reference to some movie"],
  artists: {
    1: ["Something about the first artist", "His real name is George"],
    2: ["The second artist only did the verse"],
  }
};
