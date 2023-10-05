import ParallaxItem from '@/Components/Parallax/ParallaxItem'
import React from 'react'

import rand from './rand'

const images = [
  {
    src:
      "https://hodinkee.imgix.net/limited/oris/marketing-fullbleed-1-d.jpg?w=500",
    dimensions: [500, 312]
  },
  {
    src:
      "https://hodinkee.imgix.net/limited/oris/marketing-fullbleed-1-e.jpg?w=500",
    dimensions: [500, 305]
  },
  {
    src:
      "https://hodinkee.imgix.net/limited/oris/marketing-fullbleed-3.jpg?w=500",
    dimensions: [500, 358]
  },
  {
    src: "https://hodinkee.imgix.net/limited/iwc/image_1.jpg?w=500",
    dimensions: [500, 541]
  },
  {
    src: "https://hodinkee.imgix.net/limited/iwc/LE-IWC-duo.png?w=500",
    dimensions: [500, 297]
  }
];

const imagesPerColumn = 4;

function Column({ className }) {
  return (
    <div className={className}>
      {new Array(imagesPerColumn).fill(null).map((_, index) => {
        const image = images[rand(0, images.length - 1)];
        const paddingBottom = (image.dimensions[1] / image.dimensions[0]) * 100;

        return [
          [
            <div className="row" key={`row-1-${index}`}>
              <ParallaxItem className="parallax-item">
                <div
                  className="image"
                  style={{ paddingBottom: `${paddingBottom}%` }}
                >
                  <img loading="lazy" src={image.src} alt="" />
                </div>
              </ParallaxItem>
            </div>,
            <div className="row" key={`row-2-${index}`}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                culpa, hic amet tempora mollitia illum et obcaecati totam sequi
                consequatur. Veniam tenetur quia adipisci deserunt autem rerum
                enim at sapiente!
              </p>
            </div>
          ]
        ];
      })}
    </div>
  );
}

const Index = () => {
  return (
    <div className="App">
      <p>
        Images sourced from{" "}
        <a
          href="https://limited.hodinkee.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          limited.hodinkee.com
        </a>
      </p>
      <div className="grid">
        <Column className="column left" />
        <Column className="column right" />
      </div>
    </div>
  );
}

export default Index