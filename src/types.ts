interface Musing {
  title: string;
  link: string;
  image: string;
}

interface Project {
  title: string;
  link: string;
  image: string;
  gitHub: string;
}

interface Work {
  title: string;
  positions: { name: string; timeLine: string }[];
  timeLine: string;
  image: string;
}
