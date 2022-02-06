import Image from 'next/image';
import React from 'react';

const BLOGS = [
  {
    name: 'Configure Airbnb style guide in a React Native project with Typescript',
    url: 'https://medium.com/@lopezarizajosealejandro/configurar-las-gu%C3%ADas-de-estilo-de-airbnb-en-un-proyecto-de-react-native-typescript-799dbf478bdc',
    image: '/images/react.jpg',
  },
  {
    name: 'How to make RESTlet calls to Netsuite from NestJs?',
    url: 'https://medium.com/@lopezarizajosealejandro/how-to-make-restlet-calls-to-netsuite-from-nestjs-d52fb5f85d55',
    image: '/images/react_2.jpg',
  },
];

function Blog() {
  return (
    <div className="pt-10" id="work">
      <div className="text-4xl font-bold md:text-5xl text-center md:m-10">
        My Blog
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
        {BLOGS.map(({ image, name, url }) => (
          <a href={url} target="_blank">
            <div className="rounded card__container shadow">
              <Image
                src={image}
                height={175}
                width={263}
                className="rounded-t"
              />
              <div className="px-2 pb-4">
                <span className="text-sm">{name}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Blog;
