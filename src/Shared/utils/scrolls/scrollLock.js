export function lockScroll(){
  const body = document.body;
  body.style.overflow = 'hidden';
  body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
}

export function unlockScroll(){
  const body = document.body;
  body.style.overflow = '';
  body.style.paddingRight = '';
}

export default {
  methods: {
    lockScroll,
    unlockScroll
  }
};