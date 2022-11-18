import reducer, {
  setCurrentCategory,
  setCategories,
 
} from '../../feature/categorySlice';

const initialState = {
    currentCategory: {
      name: '',
      products: [],
    },
    categories: [],
};

describe.only('Category Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      ...initialState,
    });
  });

  it('should set currentCategory to name and product', () => {
    const previousState = { ...initialState };

    expect(
      reducer(
        previousState,
        setCurrentCategory({ name: 'test', products: [] }),
      ),
    ).toEqual({
        ...initialState,
        currentCategory: { name: 'test', products: [] },
    });
  });

  it('should set current categories name', () => {
    const previousState =  { ...initialState };
     
    

    expect(reducer(previousState, setCategories(["test1", "test2", "test3"]))).toEqual({
      ...initialState,
      categories: ["test1", "test2", "test3"]
    });
  });

  
});
