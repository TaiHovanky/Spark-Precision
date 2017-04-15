let pageNumber = 1;

export const seeOlder = () => {
  console.log('pageaction ', pageNumber++);
  return {
    type: 'PAGE_INCREASE',
    pageNumber: ++pageNumber
  }
}