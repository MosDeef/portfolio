import { annotate } from 'rough-notation';
const title = document.querySelector('.title');
const roughNotation = document.querySelector('.rough-notation');
const link = document.querySelector('.nav-link');
const list = document.querySelector('.list');
const annotation = annotate(title, { type: 'highlight' , color:'pink'});
annotation.show();
