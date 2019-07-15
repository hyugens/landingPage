interface Producto {
    titulo: string;
    subtitulo: string;
    imagen: string;
    texto: string;
    lista?: string[];
}
export const PRODUCTOS: Producto[] = [
    {
      titulo: 'Desarrollo Web',
      subtitulo: 'Aprende Desarrollo Web con este curso 100% práctico, paso a paso y sin conocimientos previos',
      imagen: 'assets/images/desarrollo web.jpg',
      texto: `En este curso aprenderás lo básico de cada tecnología y
      después integraremos todo junto para hacer diseños increíbles,
      es decir: crearemos una base sólida y luego veremos como utilizarla
      sin duda la que considero la mejor forma de aprender.`
    },
    {
      titulo: 'Lenguajes de programación',
      subtitulo: 'Aprende las Bases de la Programación en 9 lenguajes a la vez: Java, Python, Go, C++, PHP, Ruby, C#, JavaScript y C',
      imagen: 'assets/images/ordenador.jpg',
      texto: `En este curso de Fundamentos de Programación aprenderás de forma básica
      y muy completa las nociones más elementales sobre el desarrollo de software.
      Este curso dará un recorrido completo por todos los conceptos más básicos
      para aprender a programar, lo cual te permitirá entender cualquier lenguaje
      gracias a la visión global que adquirirás.`
    },
    {
      titulo: 'Aplicaciones móviles',
      subtitulo: 'Aprender a programar aplicaciones y juegos para Android de forma profesional y desde cero.',
      imagen: 'assets/images/aplicaciones moviles.jpg',
      texto: `Aprende a crear aplicaciones para android desde cero y de forma sencilla con Android Studio y
      las herramientas más profesionales del momento. En este curso aprenderás:`,
      lista: [
        'Java necesario para el desarrollo en Android',
        'Desarrollo de Aplicaciones nativas para Android',
        'Desarrollo de Juegos para Android',
        'y mucho más'
      ]

    },
    {
      titulo: 'Desarrollo de videojuegos',
      subtitulo: 'Aprende a programar videojuegos desde cero a nivel AVANZADO y profesional con Unity® 2019',
      imagen: 'assets/images/videojuegos.jpg',
      texto: `Con este Master estarás preparado para desarrollar y publicar tus
              propios videojuegos con el motor gratuito Unity® y programando con C#.`,
      lista: [
        'Empezaremos con la interface de Unity® y la programación desde cero.',
        'Estudiaremos como desarrollar mecánicas de videojuegos básicas y avanzadas.',
        'Diseñaremos niveles de videojuegos en 2D y 3D.',
        'y mucho más'
      ]
    },
    {
      titulo: 'Contabilidad rápida y eficaz',
      subtitulo: 'Con esta técnica veras la contabilidad más fácil, podrás subir tus ingresos y ganar más tiempo libre.',
      imagen: 'assets/images/finanzas.jpg',
      texto: `El curso es una manera práctica de entender la contabilidad financiera.
      Cuando estudié contabilidad en la universidad no tuve la suerte de tener un método
      práctico para poder comprenderla fácilmente, tuve que estar en una empresa
      para sacarle el jugo a este tema, hoy la contabilidad está en todo lo que hago,
      incluso cuando leí el libro "Padre rico, padre pobre" la contabilidad se mencionaba.`
    },
 ];
