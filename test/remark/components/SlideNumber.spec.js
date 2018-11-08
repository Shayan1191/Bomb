import SlideNumber from '../../../src/remark/components/SlideNumber/SlideNumber';

describe('SlideNumber', () => {
  let slideNumber;

  const createSlide = (index) => {
    return {
      getSlideIndex: () => (index),
      getSlideNumber: () => (index + 1),
      properties: {}
    };
  };

  it('should display according to format', () => {
    let slide = createSlide(1);
    let slideShow = {
      getOptions: () => {
        return {
          slideNumberFormat: '%current% / %total%'
        };
      },
      getSlides: () => {
        return [
          createSlide(0),
          slide,
          createSlide(2)
        ];
      }
    };

    slideNumber = new SlideNumber(slideShow, 2);

    slideNumber.element.innerHTML.should.equal('2 / 3');
  });
});
