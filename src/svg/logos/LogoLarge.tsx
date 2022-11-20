import React from 'react';
import { useTheme } from '@mui/material/styles';

export function LogoLarge({ width = '45px', height = '70px' }) {
  const theme = useTheme();
  const orange = theme.palette.primary.main;
  const grey = theme.palette.text.primary;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 401 82"
      version="1.1"
      style={
        {
          'fill-rule': 'evenodd',
          'clip-rule': 'evenodd',
          'stroke-linejoin': 'round',
          'stroke-miterlimit': 2,
        } as any
      }
    >
      <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,28.0142,-12.4739)">
        <g id="Layer1">
          <g>
            <g transform="matrix(0.766251,0,0,0.766251,8.42432,3.09198)">
              <g transform="matrix(1.01692,-1.01611e-16,-1.52147e-16,1.54172,2.88098,-15.7663)">
                <path
                  d="M51.98,21.786C51.98,19.683 49.392,17.976 46.205,17.976L13.504,17.976C10.317,17.976 7.729,19.683 7.729,21.786C7.729,23.888 10.317,25.595 13.504,25.595L46.205,25.595C49.392,25.595 51.98,23.888 51.98,21.786Z"
                  style={{ fill: orange }}
                />
              </g>
              <g transform="matrix(3.52304e-16,1.01692,-1.54172,-6.82331e-17,83.4551,4.08861)">
                <path
                  d="M51.98,21.786C51.98,19.683 49.392,17.976 46.205,17.976L13.504,17.976C10.317,17.976 7.729,19.683 7.729,21.786C7.729,23.888 10.317,25.595 13.504,25.595L46.205,25.595C49.392,25.595 51.98,23.888 51.98,21.786Z"
                  style={{ fill: orange }}
                />
              </g>
            </g>
            <g transform="matrix(0.766251,0,0,0.766251,23.2351,7.00491)">
              <g transform="matrix(-1.01692,-1.79573e-17,-5.19668e-16,-1.54172,60.9002,94.3491)">
                <path
                  d="M51.98,21.786C51.98,19.683 49.392,17.976 46.205,17.976L13.504,17.976C10.317,17.976 7.729,19.683 7.729,21.786C7.729,23.888 10.317,25.595 13.504,25.595L46.205,25.595C49.392,25.595 51.98,23.888 51.98,21.786Z"
                  style={{ fill: orange }}
                />
              </g>
              <g transform="matrix(1.33261e-16,-1.01692,1.54172,-1.87356e-16,-19.6739,74.4941)">
                <path
                  d="M51.98,21.771C51.98,19.677 49.402,17.976 46.227,17.976L13.482,17.976C10.307,17.976 7.729,19.677 7.729,21.771L7.729,21.8C7.729,23.894 10.307,25.595 13.482,25.595L46.227,25.595C49.402,25.595 51.98,23.894 51.98,21.8L51.98,21.771Z"
                  style={{ fill: orange }}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      {/* <g id="SvgjsG18273" transform="matrix(1,0,0,1,300,0)">
        <rect
          x="-235"
          y="0"
          width="3"
          height="82"
          style={{ fill: 'rgb(51, 51, 51)' }}
        />
      </g> */}
      <g transform="matrix(2.95988,0,0,2.95988,-125.46,-54.8577)">
        <g>
          <g>
            <text
              x="69.283px"
              y="33.931px"
              style={{
                fontWeight: 600,
                fontFamily: "'SignikaNegative-Regular', 'Signika Negative'",
                fontSize: '12px',
                fill: grey,
              }}
            >
              DR
            </text>
            <text
              x="84.223px"
              y="33.931px"
              style={{
                fontWeight: 600,
                fontFamily: "'SignikaNegative-Regular', 'Signika Negative'",
                fontSize: '12px',
                fill: orange,
              }}
            >
              .
            </text>
            <text
              x="89.983px"
              y="33.931px"
              style={{
                fontWeight: 600,
                fontFamily: "'SignikaNegative-Regular', 'Signika Negative'",
                fontSize: '12px',
                fill: grey,
              }}
            >
              WINKLER
            </text>
          </g>
        </g>
      </g>
      <g transform="matrix(1.05714,0,0,1.05714,-8.49007,0.91536)">
        <g id="Slogan">
          <text
            x="85.763px"
            y="62.229px"
            style={{
              fontWeight: 300,
              fontSize: '16px',
              fill: grey,
            }}
          >
            Information Technology Consulting
          </text>
        </g>
      </g>
    </svg>
  );
}
