import ask from './Api';

describe('API Caller', () => {
    it('should call YesNo API', () => {
        const fetchSpy = jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => {},
            }));

        return ask()
            .then(() => {
                expect(fetchSpy).toHaveBeenCalledWith('https://yesno.wtf/api/');
            })
    });

    it('should return YesNo response in JSON format', () => {
        const fetchSpy = jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => ({ foo: 'bar' }),
            }));

        return ask()
            .then(response => {
                expect(response).toEqual({ foo: 'bar' });
            });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });
});
