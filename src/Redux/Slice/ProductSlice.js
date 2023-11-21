'use client'

import { createSlice } from '@reduxjs/toolkit'

const product = [
  {
    id: 1,
    name: 'Flushmount',
    img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
    minPage: 20,
    paperType:[
      {id:1,papertype:'Glossy',img: 'http://localhost:3000/assets/img/graphics/card-green.svg',value:0},
      {id:2,papertype:'Luster',img: 'http://localhost:3000/assets/img/graphics/card-green.svg',value:0},
      {id:3,papertype:'Silk',img: 'http://localhost:3000/assets/img/graphics/card-green.svg',value:15},
      {id:4,papertype:'Metalic',img: 'http://localhost:3000/assets/img/graphics/card-green.svg',value:25},
    ],
    Orientation: [
      { id: 1, orientation: 'Square', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
      { id: 2, orientation: 'Landscape', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
      { id: 3, orientation: 'Portrait', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
    ],
    size: [
      {
        id: 1, product_id: 1, orientation_id: 1, size: '8x8', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 1, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 1, product_id: 1, papper: 'White Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
          {
            id: 3, product_id: 1, size_id: 1, product_id: 1, papper: 'Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 2, product_id: 1, orientation_id: 1, size: '10x10', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 2, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 2, product_id: 1, papper: 'White Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
          {
            id: 3, product_id: 1, size_id: 2, product_id: 1, papper: 'Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 3, product_id: 1, orientation_id: 1, size: '12x12', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 3, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 3, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 4, product_id: 1, orientation_id: 1, size: '14x14', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 4, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 4, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 5, product_id: 1, orientation_id: 1, size: '15x15', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 5, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 5, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 6, product_id: 1, orientation_id: 2, size: '8x10', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 6, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 6, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 7, product_id: 1, orientation_id: 2, size: '8x12', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 7, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 7, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 8, product_id: 1, orientation_id: 2, size: '10x12', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 8, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 8, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 9, product_id: 1, orientation_id: 2, size: '11x14', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 9, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 9, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 10, product_id: 1, orientation_id: 2, size: '12x15', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 10, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 10, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 11, product_id: 1, orientation_id: 2, size: '12x16', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 11, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 11, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 12, product_id: 1, orientation_id: 2, size: '12x18', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 12, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 12, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 13, product_id: 1, orientation_id: 3, size: '10x08', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 13, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 13, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 14, product_id: 1, orientation_id: 3, size: '12x08', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 14, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 14, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 15, product_id: 1, orientation_id: 3, size: '12x09', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 15, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 15, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 16, product_id: 1, orientation_id: 3, size: '12x10', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 16, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 16, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 17, product_id: 1, orientation_id: 3, size: '14x11', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 17, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 17, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
      {
        id: 18, product_id: 1, orientation_id: 3, size: '16x12', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', SheetType: [
          {
            id: 1, product_id: 1, size_id: 18, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 1, zone_id: 1, price: 145, cur: "IND" },
              { id: 2, productsheetid: 1, zone_id: 2, price: 2.5, cur: 'USD' }
            ]
          },
          {
            id: 2, product_id: 1, size_id: 18, product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
              { id: 1, productsheetid: 2, zone_id: 1, price: 165, cur: "IND" },
              { id: 2, productsheetid: 2, zone_id: 2, price: 3, cur: 'USD' }
            ]
          },
        ],
      },
    ],
    cover: [
      {
        id: 1, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', size_id: 1, name: 'Image Wrap', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { id: 1, productcoverid: 1, zone_id: 1, price: 2000, cur: "IND" },
          { id: 2, productcoverid: 1, zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 2, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', size_id: 1, name: 'Leather', coverOption: [
          {
            id: 1,
            coverOption: 'Full Lether ',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'Linen',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { id: 1, productcoverid: 2, zone_id: 1, price: 2000, cur: "IND" },
          { id: 2, productcoverid: 2, zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 3, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', size_id: 1, name: 'Photo', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { id: 1, product_id: 1, productcoverid: 3, zone_id: 1, price: 2000, cur: "IND" },
          { id: 2, product_id: 1, productcoverid: 3, zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 4, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', name: 'Acrylic Cameo', size_id: 1, coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ],
        price: [{ id: 1, product_id: 1, productcoverid: 4, zone_id: 1, price: 2000, cur: "IND" }, { id: 2, product_id: 1, productcoverid: 4, zone_id: 2, price: 20, cur: 'USD' }]
      },
      {
        id: 5, name: 'Canvas', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', size_id: 1, coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [{ zone_id: 1, price: 2000, cur: "IND" }, { zone_id: 2, price: 20, cur: 'USD' }]
      },
    ],
    boxSleev: [
      {
        id: 1,
        boxsleev: 'Leather Box',
        size_id: 1,
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      },
      {
        id: 2,
        boxsleev: 'Photo Box',
        size_id: 1,
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      },
      {
        id: 3,
        boxsleev: 'Linen Box',
        size_id: 1,
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      },
      {
        id: 4,
        boxsleev: 'Leather Sleeve',
        size_id: 1,
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      }
    ],
    printOption: [
      {
        id: 1, printOption: 'Print On Wood', size_id: 1, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 600, cur: "IND" },
          { zone_id: 1, price: 10, cur: "USD" },
        ]
      },
      {
        id: 2, printOption: 'Print On Leather', size_id: 1, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 600, cur: "IND" },
          { zone_id: 1, price: 10, cur: "USD" },
        ]
      },
    ],
    color: [{ id: 1, color: 'red', size_id: 1, product_id: 18, }, { id: 2, color: 'black', size_id: 1, product_id: 1, }, { id: 3, color: 'white', size_id: 1, product_id: 1, }],
  },
  {
    id: 2,
    name: 'Photobooks',
    img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
    minPage: 20,
    Orientation: [
      { id: 1, orientation: 'Square', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
      { id: 1, orientation: 'Landscape', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
      { id: 1, orientation: 'Portrait', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
    ],
    size: [
      { product_id: 1, orientation_id: 1, size: '8 x 8', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
      { product_id: 1, orientation_id: 1, size: '10 x 10', img: 'http://localhost:3000/assets/img/graphics/card-green.svg' },
      { product_id: 1, orientation_id: 1, size: '12 x 12', img: 'http://localhost:3000/assets/img/graphics/card-green.svg' },
      { product_id: 1, orientation_id: 1, size: '14 x 14', img: 'http://localhost:3000/assets/img/graphics/card-green.svg' },
      { product_id: 1, orientation_id: 1, size: '15 x 15', img: 'http://localhost:3000/assets/img/graphics/card-green.svg' },
    ],
    SheetType: [
      {
        product_id: 1, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 145, cur: "IND" },
          { zone_id: 2, price: 2.5, cur: 'USD' }
        ]
      },
      {
        product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 165, cur: "IND" },
          { zone_id: 2, price: 3, cur: 'USD' }
        ]
      },
    ],
    cover: [
      {
        id: 1, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', leather: 'Image Wrap', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 2, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', leather: 'Leather', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 3, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', leather: 'Photo', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 4,
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        leather: 'Acrylic Cameo',
        coverOption: [
          {
            id: 1,
            coverOption: 'Full Acrylic ',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
            price: [
              { zone_id: 1, price: 300, cur: "IND" },
              { zone_id: 2, price: 3.5, cur: 'USD' }
            ]
          },
          {
            id: 2,
            coverOption: 'Linen',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
            price: [
              { zone_id: 1, price: 300, cur: "IND" },
              { zone_id: 2, price: 3.5, cur: 'USD' }
            ]
          },
        ],
        price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 4, leather: 'Canvas', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
    ],
    boxSleev: [
      {
        id: 1,
        boxsleev: 'Leather Box',
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      },
      {
        id: 2,
        boxsleev: 'Photo Box',
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      },
      {
        id: 3,
        boxsleev: 'Linen Box',
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      },
      {
        id: 4,
        boxsleev: 'Leather Sleeve',
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      }
    ],
    printOption: [
      {
        id: 1, printOption: 'Print On Wood', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 600, cur: "IND" },
          { zone_id: 1, price: 10, cur: "USD" },
        ]
      },
      {
        id: 2, printOption: 'Print On Leather', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 600, cur: "IND" },
          { zone_id: 1, price: 10, cur: "USD" },
        ]
      },
    ],
    color: [{ id: 1, color: 'red' }, { id: 2, color: 'black' }, { id: 3, color: 'white' }],
  },
  {
    id: 3,
    name: 'Photo Frames',
    img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
    minPage: 20,
    Orientation: [
      { id: 1, orientation: 'Square', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
      { id: 1, orientation: 'Landscape', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
      { id: 1, orientation: 'Portrait', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
    ],
    size: [
      { product_id: 1, orientation_id: 1, size: '8 x 8', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', },
      { product_id: 1, orientation_id: 1, size: '10 x 10', img: 'http://localhost:3000/assets/img/graphics/card-green.svg' },
      { product_id: 1, orientation_id: 1, size: '12 x 12', img: 'http://localhost:3000/assets/img/graphics/card-green.svg' },
      { product_id: 1, orientation_id: 1, size: '14 x 14', img: 'http://localhost:3000/assets/img/graphics/card-green.svg' },
      { product_id: 1, orientation_id: 1, size: '15 x 15', img: 'http://localhost:3000/assets/img/graphics/card-green.svg' },
    ],
    SheetType: [
      {
        product_id: 1, papper: 'Thermal Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 145, cur: "IND" },
          { zone_id: 2, price: 2.5, cur: 'USD' }
        ]
      },
      {
        product_id: 1, papper: 'White / Black Sheet', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 165, cur: "IND" },
          { zone_id: 2, price: 3, cur: 'USD' }
        ]
      },
    ],
    cover: [
      {
        id: 1, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', leather: 'Image Wrap', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 2, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', leather: 'Leather', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 3, img: 'http://localhost:3000/assets/img/graphics/card-green.svg', leather: 'Photo', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 4,
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        leather: 'Acrylic Cameo',
        coverOption: [
          {
            id: 1,
            coverOption: 'Full Acrylic ',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
            price: [
              { zone_id: 1, price: 300, cur: "IND" },
              { zone_id: 2, price: 3.5, cur: 'USD' }
            ]
          },
          {
            id: 2,
            coverOption: 'Linen',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
            price: [
              { zone_id: 1, price: 300, cur: "IND" },
              { zone_id: 2, price: 3.5, cur: 'USD' }
            ]
          },
        ],
        price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
      {
        id: 4, leather: 'Canvas', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', coverOption: [
          {
            id: 1,
            coverOption: 'option 1',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
          {
            id: 2,
            coverOption: 'option 2',
            img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
          },
        ], price: [
          { zone_id: 1, price: 2000, cur: "IND" },
          { zone_id: 2, price: 20, cur: 'USD' }
        ]
      },
    ],
    boxSleev: [
      {
        id: 1,
        boxsleev: 'Leather Box',
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      },
      {
        id: 2,
        boxsleev: 'Photo Box',
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      },
      {
        id: 3,
        boxsleev: 'Linen Box',
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      },
      {
        id: 4,
        boxsleev: 'Leather Sleeve',
        img: 'http://localhost:3000/assets/img/graphics/card-green.svg',
        price: [
          { zone_id: 1, price: 3000, cur: "IND" },
          { zone_id: 2, price: 35, cur: "USD" },
        ]
      }
    ],
    printOption: [
      {
        id: 1, printOption: 'Print On Wood', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 600, cur: "IND" },
          { zone_id: 1, price: 10, cur: "USD" },
        ]
      },
      {
        id: 2, printOption: 'Print On Leather', img: 'http://localhost:3000/assets/img/graphics/card-green.svg', price: [
          { zone_id: 1, price: 600, cur: "IND" },
          { zone_id: 1, price: 10, cur: "USD" },
        ]
      },
    ],
    color: [{ id: 1, color: 'red' }, { id: 2, color: 'black' }, { id: 3, color: 'white' }],
  },
]

const initialState = {
  product: product
}

const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {}
});

export const { } = ProductSlice.actions

export default ProductSlice.reducer



