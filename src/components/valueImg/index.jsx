import React from 'react';

const voltImg = require('../../image/lightning2.png');
const amperImg = require('../../image/light.png');
const hydrogen = require('../../image/hydrogen.svg');
const tocyb = require('../../image/boot.png');
const boot = require('../../image/large-green.png');

const ValueImg = ({
  text,
  onlyImg,
  onlyText,
  marginImg,
  marginContainer,
  justifyContent,
  zIndexImg,
  size,
  ...props
}) => {
  let img = null;
  let textCurency = text;

  switch (text) {
    case 'millivolt':
      img = voltImg;
      textCurency = 'V';
      break;

    case 'milliampere':
      img = amperImg;
      textCurency = 'A';
      break;

    case 'hydrogen':
      img = hydrogen;
      textCurency = 'H';
      break;

    case 'boot':
      img = boot;
      textCurency = 'BOOT';
      break;

    case 'tocyb':
      img = tocyb;
      textCurency = 'TOCYB';
      break;

    default:
      if (text.length > 6) {
        textCurency = text.slice(6);
        img = null;
        break;
      } else {
        textCurency = text;
        img = null;
        break;
      }
  }

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: justifyContent || 'center',
        margin: marginContainer || 0,
      }}
      {...props}
    >
      {!onlyImg && <span>{textCurency}</span>}
      {!onlyText && img !== null && (
        <img
          style={{
            margin: marginImg || 0,
            width: size || 20,
            height: size || 20,
            objectFit: 'contain',
            zIndex: zIndexImg || 0,
          }}
          src={img}
          alt="text"
        />
      )}
    </div>
  );
};

export default ValueImg;
