import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/ebertm777/">
        <img src="https://i.imgur.com/KmngC2j.png" alt="ebertm777" />
      </a>
      <p>
        criado com
        {' '}
        <a href="https://github.com/ebertm777">
          react
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
