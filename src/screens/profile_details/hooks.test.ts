import {
  renderHook,
  act,
  cleanup,
} from '@testing-library/react-hooks';
import { useProfileDetails } from './hooks';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      dtag: '@dtag',
    },
    replace: jest.fn(() => '/'),
    push: jest.fn(() => ('/@dtag')),
  }),
}));

jest.mock('@hooks', () => ({
  useDesmosProfile: (options) => {
    return ({
      fetchDesmosProfile: jest.fn(() => {
        return options.onComplete({
          profile: [
            {
              address: 'desmos18tug2x5uwkgnh7qgadezvdntpwgjc88c98zuck',
              bio: 'hungry all the time',
              dtag: 'happieSa',
              nickname: 'theHappySamoyed',
              chainLinks: [],
              applicationLinks: [],
              creationTime: '2021-10-06T00:10:45.761731',
              coverPic: 'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
              profilePic: 'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
            },
          ],
        });
      }),
      formatDesmosProfile: jest.fn(() => {
        return ({
          dtag: 'happieSa',
          nickname: 'theHappySamoyed',
          imageUrl: 'https://ipfs.desmos.network/ipfs/Qmf48cpgi2zNiH24Vo1xtVsePUJx9665gtiRduVCvV5fFg',
          coverUrl: 'https://ipfs.desmos.network/ipfs/QmTvkdGrtBHHihjVajqqA2HAoHangeKR1oYbQWzasnPi7B',
          bio: 'hungry all the time',
          connections: [],
        });
      }),
    });
  },
}));

describe('hook: useProfileDetails', () => {
  it('correctly toggles profile open', async () => {
    const { result } = renderHook(() => useProfileDetails());
    console.log(result.current.state, 'state');
    // test initial state
    // expect(result.current.state.loading).toBe(true);
    // expect(result.current.state.exists).toBe(true);
    // expect(result.current.state.desmosProfile).toBe(null);

    // render profile UI if shouldShowProfile returns true
    // const profileResult = renderHook(() => useDesmosProfile({
    //   address: 'desmos18tug2x5uwkgnh7qgadezvdntpwgjc88c98zuck',
    //   onComplete: (data) => {
    //     handleSetState({
    //       loading: false,
    //       exists: !!data.profile.length,
    //       desmosProfile: formatDesmosProfile(data),
    //     });
    //   },
    // })).result;
    // console.log(profileResult);

    // act(() => {
    //   console.log('2');
    //   result.current.shouldShowProfile();
    // });
    // expect(result.current.state.loading).toBe(false);
    // expect(result.current.state.exists).toBe(true);
    // expect(result.current.state.desmosProfile).toBe(true);

    // // update url if renders profile UI but dtag and input is same in case insensitive
    // act(() => {
    //   console.log('3');
    //   result.current.shouldShowProfile();
    // });
    // expect(jest.fn(() => ('/@dtag'))).toBeCalledWith('/@dtag');
    // expect(result.current.state.loading).toBe(false);
    // expect(result.current.state.exists).toBe(true);
    // expect(result.current.state.desmosProfile).toBe(true);

    // // don't render profile UI if shouldShowProfile returns false
    // act(() => {
    //   console.log('4');
    //   result.current.shouldShowProfile();
    // });
    // expect(result.current.state.loading).toBe(true);
    // expect(result.current.state.exists).toBe(false);
    // expect(result.current.state.desmosProfile).toBe(true);
  });

  // it('correctly update url', () => {
  // return to homepage if chainConfig profile is false

  // return to homepage if url dtag is not start with @

  // look up profile data in graphql if profile is true and dtag search is start with @
  // });
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
