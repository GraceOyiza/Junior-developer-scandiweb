import reducer, {
  setCurrencies,
  setCurrentCurrency,
} from '../../feature/currencySlice';

const initialState = {
    currencies: [],
    currentCurrency: '',
};

describe.only('Currency Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      ...initialState,
    });
  });

  it('should return currencies', () => {
    const previousState = { ...initialState };

    expect(
      reducer(
        previousState,
        setCurrencies([
          { symbol: '$', name: 'USD' },
          { symbol: '#', name: 'NGN' },
        ]),
      ),
    ).toEqual({
      ...initialState,
      currencies: [
        { symbol: '$', name: 'USD' },
        { symbol: '#', name: 'NGN' },
      ],
    });
  });

  it('should set current currency', () => {
    const previousState = {
      ...initialState,
      currencies: [
        { symbol: '$', name: 'USD' },
        { symbol: '#', name: 'NGN' },
      ],
    };

    expect(reducer(previousState, setCurrentCurrency('$'))).toEqual({
      ...initialState,
      currencies: [
        { symbol: '$', name: 'USD' },
        { symbol: '#', name: 'NGN' },
      ],
      currentCurrency: '$',
    });
  });
});
