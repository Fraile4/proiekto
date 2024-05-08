import React from 'react';
import { Square } from './Square';
import '../Board.css';

export const Board = () => {
  // Defind the board JSON
  const boardLayout = [
    [null, null, null, 0, 1, 2, 3, null, null, null],
    [null, null, 4, 5, 6, 7, 8, 9, null, null],
    [null, 10, 11, 12, 13, 14, 15, 16, 17, null],
    [18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
    [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    [null, 48, 49, 50, 51, 52, 53, 54, 55, null],
    [null, null, 56, 57, 58, 59, 60, 61, null, null],
    [null, null, null, 62, 63, 64, 65, null, null, null]
  ];

  return (
    <div className="container">
      {boardLayout.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((squareValue, columnIndex) => (
            squareValue !== null ? (
              <Square key={columnIndex} value={squareValue} />
            ) : (
              <div key={columnIndex} className="empty-square" />
            )
          ))}
        </div>
      ))}
    </div>
  );
};




/*import React from 'react'
import { Square } from './Square'

export const Board = () => {
  return (
    <div class="container">
      <div class="row">
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div class="row">
        <Square value={7}/>
        <Square value={8}/>
        <Square value={9}/>
        <Square value={10}/>
        <Square value={11}/>
        <Square value={12}/>
        <Square value={13}/>
      </div>
      <div class="row">
        <Square value={14}/>
        <Square value={15}/>
        <Square value={16}/>
        <Square value={17}/>
        <Square value={18}/>
        <Square value={19}/>
        <Square value={20}/>
      </div>
      <div class="row">
        <Square value={21}/>
        <Square value={22}/>
        <Square value={23}/>
        <Square value={24}/>
        <Square value={25}/>
        <Square value={26}/>
        <Square value={27}/>
      </div>
    </div>
  )
}
*/