import {css} from 'styled-components';

const rowAlignCenter = css`
  display: flex;
  align-items: center;
`;

const rowJustifyCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rowJustifyBetween = css`
  display: flex;
  justify-content: space-between;
`;

const columnJustifyBetween = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export {
  rowAlignCenter,
  rowJustifyCenter,
  columnJustifyBetween,
  rowJustifyBetween,
};
